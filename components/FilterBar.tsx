import React, { useState } from 'react';
import {graduatePrograms} from '@/data/programs';

interface FilterBarProps {
    onFilterChange: (filters: { degree: string; major: string; searchTerm: string; plan: string; studyDay: string; title: string }) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
    const [degree, setDegree] = useState('all');
    const [major, setMajor] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [plan, setPlan] = useState('all');
    const [studyDay, setStudyDay] = useState('all');
    const [title, setTitle] = useState('all');

    const uniqueMajors = [...new Set(Object.values(graduatePrograms).map(program => program.major))];
    const uniqueTitles = [...new Set(Object.values(graduatePrograms).map(program => program.title))];
    const uniquePlans = [...new Set(Object.values(graduatePrograms).flatMap(p => p.plans.map(plan => plan.plan_name)))].sort((a, b) => {
        // Extract numbers from plan names for sorting
        const getNumber = (str: string) => {
            const match = str.match(/\d+(\.\d+)?/);
            return match ? parseFloat(match[0]) : 999;
        };
        return getNumber(a) - getNumber(b);
    });
    const uniqueStudyDays = [...new Set(Object.values(graduatePrograms).flatMap(p => p.plans.map(plan => plan.date_study)))];

    const handleFilterChange = (newDegree?: string, newMajor?: string, newSearch?: string, newPlan?: string, newStudyDay?: string, newTitle?: string) => {
        const updatedDegree = newDegree !== undefined ? newDegree : degree;
        const updatedMajor = newMajor !== undefined ? newMajor : major;
        const updatedSearch = newSearch !== undefined ? newSearch : searchTerm;
        const updatedPlan = newPlan !== undefined ? newPlan : plan;
        const updatedStudyDay = newStudyDay !== undefined ? newStudyDay : studyDay;
        const updatedTitle = newTitle !== undefined ? newTitle : title;

        setDegree(updatedDegree);
        setMajor(updatedMajor);
        setSearchTerm(updatedSearch);
        setPlan(updatedPlan);
        setStudyDay(updatedStudyDay);
        setTitle(updatedTitle);

        onFilterChange({
            degree: updatedDegree,
            major: updatedMajor,
            searchTerm: updatedSearch,
            plan: updatedPlan,
            studyDay: updatedStudyDay,
            title: updatedTitle,
        });
    };

    return (
        <div className="bg-white rounded-xl card-shadow p-6 mb-8 border border-gray-100">
            <div className="flex items-center mb-4">
                <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <h2 className="text-lg font-semibold text-gray-800">กรองข้อมูล</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {/* Search */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ค้นหา</label>
                    <input
                        type="text"
                        placeholder="ค้นหา..."
                        value={searchTerm}
                        onChange={(e) => handleFilterChange(undefined, undefined, e.target.value, undefined, undefined, undefined)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                {/* Degree Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ระดับการศึกษา</label>
                    <select
                        value={degree}
                        onChange={(e) => handleFilterChange(e.target.value, undefined, undefined, undefined, undefined, undefined)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                        <option value="all">ทั้งหมด</option>
                    
                        <option value="ปริญญาโท">ปริญญาโท</option>
                        <option value="ปริญญาเอก">ปริญญาเอก</option>
                        <option value="นานาชาติ">หลักสูตรนานาชาติ</option>
                    </select>
                </div>

                {/* Major Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ภาควิชา/ศูนย์</label>
                    <select
                        value={major}
                        onChange={(e) => handleFilterChange(undefined, e.target.value, undefined, undefined, undefined, undefined)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                        <option value="all">ทั้งหมด</option>
                        {uniqueMajors.map((majorName) => (
                            <option key={majorName} value={majorName}>
                                {majorName}
                            </option>
                        ))}
                    </select>
                </div>
                
                {/* Title Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">สาขาวิชา</label>
                    <select
                        value={title}
                        onChange={(e) => handleFilterChange(undefined, undefined, undefined, undefined, undefined, e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                        <option value="all">ทั้งหมด</option>
                        {uniqueTitles.map((titleName) => (
                            <option key={titleName} value={titleName}>
                                {titleName}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Plan Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">แผนการเรียน</label>
                    <select
                        value={plan}
                        onChange={(e) => handleFilterChange(undefined, undefined, undefined, e.target.value, undefined, undefined)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                        <option value="all">ทั้งหมด</option>
                        {uniquePlans.map((planName) => (
                            <option key={planName} value={planName}>
                                {planName}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Study Day Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">วันเรียน</label>
                    <select
                        value={studyDay}
                        onChange={(e) => handleFilterChange(undefined, undefined, undefined, undefined, e.target.value, undefined)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                        <option value="all">ทั้งหมด</option>
                        {uniqueStudyDays.map((day) => (
                            <option key={day} value={day}>
                                {day}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Active Filters Display */}
            {(degree !== 'all' || major !== 'all' || searchTerm || plan !== 'all' || studyDay !== 'all' || title !== 'all') && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-sm text-gray-600">กำลังกรอง:</span>
                        {degree !== 'all' && (
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                                {degree}
                            </span>
                        )}
                        {major !== 'all' && (
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                {major}
                            </span>
                        )}
                        {title !== 'all' && (
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                                {title}
                            </span>
                        )}
                        {plan !== 'all' && (
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                                {plan}
                            </span>
                        )}
                        {studyDay !== 'all' && (
                            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                                {studyDay}
                            </span>
                        )}
                        {searchTerm && (
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                "{searchTerm}"
                            </span>
                        )}
                        <button
                            onClick={() => handleFilterChange('all', 'all', '', 'all', 'all', 'all')}
                            className="text-sm text-red-600 hover:text-red-700 font-medium ml-2"
                        >
                            ล้างทั้งหมด
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterBar;
