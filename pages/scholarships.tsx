import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Scholarships() {
    const scholarships = [
        {
            title: 'ทุนพัฒนาบุคลากรประจำการ',
            category: 'ทุนรัฐบาล',
            description: 'ทุนสำหรับบุคลากรภาครัฐที่ต้องการศึกษาต่อระดับบัณฑิตศึกษา',
            amount: 'ตามเกณฑ์ของทางราชการ',
            deadline: 'ติดตามประกาศ',
            eligibility: ['เป็นข้าราชการหรือพนักงานรัฐวิสาหกิจ', 'ได้รับอนุญาตจากหน่วยงาน'],
        },
        {
            title: 'ทุนผู้ช่วยสอน (TA)',
            category: 'ทุนภายใน',
            description: 'ทุนสำหรับนักศึกษาที่ช่วยสอนและช่วยงานภาควิชา',
            amount: '5,000 - 10,000 บาท/เดือน',
            deadline: 'สมัครได้ตลอดทั้งปี',
            eligibility: ['เป็นนักศึกษาปัจจุบัน', 'ผลการเรียนดี GPA ไม่ต่ำกว่า 3.25'],
        },
        {
            title: 'ทุนผู้ช่วยวิจัย (RA)',
            category: 'ทุนภายใน',
            description: 'ทุนสำหรับนักศึกษาที่ช่วยงานวิจัยของอาจารย์',
            amount: '6,000 - 15,000 บาท/เดือน',
            deadline: 'สมัครได้ตลอดทั้งปี',
            eligibility: ['เป็นนักศึกษาปัจจุบัน', 'มีทักษะวิจัยและสนใจงานวิจัย'],
        },
        {
            title: 'ทุน CHE',
            category: 'ทุนรัฐบาล',
            description: 'ทุนจากสำนักงานคณะกรรมการการอุดมศึกษา',
            amount: 'เต็มจำนวนค่าเล่าเรียนและค่าครองชีพ',
            deadline: 'มกราคม - กุมภาพันธ์',
            eligibility: ['ผลการเรียนดีเยี่ยม', 'มีศักยภาพในการทำวิจัย'],
        },
        {
            title: 'ทุนพัฒนาอาเซียน',
            category: 'ทุนต่างประเทศ',
            description: 'ทุนสำหรับนักศึกษาจากประเทศอาเซียน',
            amount: 'ครอบคลุมค่าเล่าเรียนและค่าครองชีพ',
            deadline: 'ติดตามประกาศ',
            eligibility: ['เป็นนักศึกษาจากประเทศอาเซียน', 'ผลการเรียนดี'],
        },
        {
            title: 'ทุนวิจัย TRF',
            category: 'ทุนวิจัย',
            description: 'ทุนสนับสนุนการวิจัยจากสำนักงานกองทุนสนับสนุนการวิจัย',
            amount: 'ตามโครงการวิจัย',
            deadline: 'ตามรอบการรับสมัครของ TRF',
            eligibility: ['มีหัวข้อวิจัยที่น่าสนใจ', 'อาจารย์ที่ปรึกษารับรอง'],
        },
    ];

    return (
        <>
            <Head>
                <title>ทุนการศึกษา - บัณฑิตศึกษา คณะวิศวกรรมศาสตร์ มช.</title>
                <meta name="description" content="ทุนการศึกษาและทุนสนับสนุนต่างๆ สำหรับนักศึกษาบัณฑิตศึกษา" />
            </Head>

            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                                🎓 บัณฑิตศึกษา
                            </Link>
                            <Link href="/" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
                                ← กลับหน้าหลัก
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Page Title */}
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">💰 ทุนการศึกษา</h1>
                        <p className="text-lg text-gray-600">
                            ทุนการศึกษา ทุนวิจัย และทุนสนับสนุนต่างๆ สำหรับนักศึกษาบัณฑิตศึกษา
                        </p>
                    </div>

                    {/* Scholarships Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {scholarships.map((scholarship, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900">{scholarship.title}</h3>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                                        {scholarship.category}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-4">{scholarship.description}</p>

                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="text-sm font-medium text-gray-700 w-24">จำนวนเงิน:</span>
                                        <span className="text-sm text-gray-900 flex-1">{scholarship.amount}</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-sm font-medium text-gray-700 w-24">กำหนดการ:</span>
                                        <span className="text-sm text-gray-900 flex-1">{scholarship.deadline}</span>
                                    </div>
                                    <div className="border-t pt-3">
                                        <p className="text-sm font-medium text-gray-700 mb-2">คุณสมบัติ:</p>
                                        <ul className="space-y-1">
                                            {scholarship.eligibility.map((item, i) => (
                                                <li key={i} className="text-sm text-gray-600 flex items-start">
                                                    <span className="mr-2">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Important Notice */}
                    <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">หมายเหตุ</h4>
                                <p className="text-sm text-gray-700">
                                    ข้อมูลทุนการศึกษาอาจมีการเปลี่ยนแปลงตามประกาศของหน่วยงานต่างๆ กรุณาติดตามข้อมูลจากภาควิชาและหน่วยงานที่เกี่ยวข้อง
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
