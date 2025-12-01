import React from 'react';
import Link from 'next/link';

interface Plan {
    plan_code: string;
    plan_name: string;
    study_type: string;
    credit: string;
    duration: string;
    date_study: string;
    fee: string | string[] | { [key: string]: string };
    qualification: string | string[];
}

interface ProgramCardCompactProps {
    programKey: string;
    program: {
        major: string;
        title: string;
        title_en: string;
        degree: string;
        contact: string;
        img: string;
        plans: Plan[];
    };
}

const ProgramCardCompact: React.FC<ProgramCardCompactProps> = ({ programKey, program }) => {
    const getDegreeColor = (degree: string) => {
        if (degree.includes('ปริญญาเอก')) return 'border-l-cmu-red';
        if (degree.includes('นานาชาติ')) return 'border-l-cmu-gold';
        return 'border-l-gray-400';
    };

    const getDegreeBadge = (degree: string) => {
        if (degree.includes('ปริญญาเอก')) return 'bg-cmu-red text-white';
        if (degree.includes('นานาชาติ')) return 'bg-cmu-gold text-gray-900';
        return 'bg-gray-600 text-white';
    };

    return (
        <div className={`bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200 h-full flex flex-col border-l-4 ${getDegreeColor(program.degree)}`}>
            {/* Header */}
            <div className="p-6 border-b border-gray-100">

        
                <div className="flex items-start justify-between mb-3">
                 

                    
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded ${getDegreeBadge(program.degree)}`}>
                        {program.degree}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                        {program.plans.length} แผน
                    </span>
                </div>
                {/* major */}
                {/* <div className="mb-2">
                  
                </div> */}
                <h3 className="text-md font-bold text-gray-900 mb-2 leading-tight">
                    {program.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                    {program.title_en}
                </p>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col space-y-4">
                <div className="space-y-3 flex-1">
                    <div className="flex items-start">
                        <svg className="w-4 h-4 mr-2 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <div className="flex-1">
                            <p className="text-xs text-gray-500 mb-0.5 uppercase tracking-wide">แผนการศึกษา</p>
                            <p className="text-sm text-gray-900 font-medium">{program.plans.map(p => p.plan_name).join(', ')}</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <svg className="w-4 h-4 mr-2 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div className="flex-1">
                            <p className="text-xs text-gray-500 mb-0.5 uppercase tracking-wide">วันเรียน</p>
                            <p className="text-sm text-gray-900 font-medium">{[...new Set(program.plans.map(p => p.date_study))].join(' / ')}</p>
                        </div>
                    </div>
                </div>

                {/* Footer Button */}
                <Link href={`/program/${programKey}`} className="w-full border border-gray-300 hover:border-cmu-red hover:bg-gray-50 text-gray-700 hover:text-cmu-red font-medium py-2.5 px-4 transition-all duration-200 flex items-center justify-center group text-sm mt-auto">
                    <span>ดูรายละเอียด</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default ProgramCardCompact;
