import React from 'react';
import Image from 'next/image';

interface Plan {
    plan_code: string;
    plan_name: string;
    study_type: string;
    credit: string;
    duration: string;
    date_study: string;
    fee: string | string[] | { thai?: string; international?: string; group1?: string; group2?: string };
    qualification: string | string[];
}

interface ProgramCardProps {
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

const ProgramCard: React.FC<ProgramCardProps> = ({ programKey, program }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const getDegreeColor = (degree: string) => {
        if (degree.includes('ปริญญาเอก')) return 'bg-purple-100 text-purple-700 border-purple-200';
        if (degree.includes('นานาชาติ')) return 'bg-blue-100 text-blue-700 border-blue-200';
        return 'bg-green-100 text-green-700 border-green-200';
    };

    const renderFee = (fee: string | string[] | object) => {
        if (typeof fee === 'string') {
            return <p className="text-gray-700">{fee}</p>;
        }
        if (Array.isArray(fee)) {
            return (
                <div className="space-y-1">
                    {fee.map((item, index) => (
                        <p key={index} className="text-gray-700 text-sm">
                            • {item}
                        </p>
                    ))}
                </div>
            );
        }
        return (
            <div className="space-y-1">
                {Object.entries(fee).map(([key, value]) => (
                    <p key={key} className="text-gray-700 text-sm">
                        {key}: {value}
                    </p>
                ))}
            </div>
        );
    };
    const renderQualification = (qualification: string | string[]) => {
        if (typeof qualification === 'string') {
            return <p className="text-gray-700">{qualification}</p>;
        }
        if (Array.isArray(qualification)) {
            return (
                <div className="space-y-2">
                    {qualification.map((item, index) => (
                        <p key={index} className="text-gray-700 text-sm">
                            • {item}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };
              

    return (
        <div className="bg-white rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 border-b border-gray-100">
                {/* banner image */}
                <div className="mb-4">
                    <Image
                        src={program.img}
                        alt={`${program.title} Banner`}
                        width={800}
                        height={200}
                        className="w-full h-80 object-cover rounded-md"
                    />
                </div>
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getDegreeColor(program.degree)} mb-3`}>
                            {program.degree}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h2>
                        <p className="text-sm text-gray-600 mb-1">{program.title_en}</p>
                        <p className="text-sm text-indigo-600 font-medium">{program.major}</p>
                    </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>ติดต่อ: {program.contact}</span>
                </div>
            </div>

            {/* Plans */}
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    แผนการศึกษา ({program.plans.length} แผน)
                </h3>

                <div className="space-y-4">
                    {program.plans.map((plan, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-5 hover:border-indigo-300 transition-colors bg-gray-50">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-lg font-semibold text-indigo-700">
                                    {plan.plan_name}
                                </h4>
                                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                                    {plan.study_type}
                                </span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="text-gray-600 mb-2">
                                        <span className="font-medium text-gray-800">📚 หน่วยกิต:</span> {plan.credit}
                                    </p>
                                    <p className="text-gray-600 mb-2">
                                        <span className="font-medium text-gray-800">⏱️ ระยะเวลา:</span> {plan.duration}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-medium text-gray-800">📅 วันเรียน:</span> {plan.date_study}
                                    </p>
                                </div>
                          
                            </div>
                                <div className="mt-4">
                                    <p className="font-medium text-gray-800 mb-2">💰 ค่าใช้จ่าย:</p>
                                    {renderFee(plan.fee)}
                                    </div>
                                

                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <p className="font-medium text-gray-800 mb-2">✅ คุณสมบัติผู้สมัคร:</p>
                                <div className="text-sm text-gray-700 leading-relaxed">{renderQualification(plan.qualification)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
