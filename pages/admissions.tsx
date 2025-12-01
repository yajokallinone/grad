import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Admissions() {
    const timeline = [
        { period: 'มกราคม - กุมภาพันธ์', event: 'เปิดรับสมัคร รอบที่ 1' },
        { period: 'มีนาคม', event: 'สอบสัมภาษณ์ รอบที่ 1' },
        { period: 'เมษายน', event: 'ประกาศผลรอบที่ 1' },
        { period: 'พฤษภาคม - มิถุนายน', event: 'เปิดรับสมัคร รอบที่ 2' },
        { period: 'กรกฎาคม', event: 'สอบสัมภาษณ์ รอบที่ 2' },
        { period: 'สิงหาคม', event: 'ประกาศผลรอบที่ 2 และเปิดภาคเรียน' },
    ];

    const documents = [
        'สำเนาปริญญาบัตร และ Transcript (ฉบับภาษาอังกฤษ)',
        'สำเนาบัตรประชาชน หรือ Passport',
        'รูปถ่าย 1 นิ้ว จำนวน 2 รูป',
        'หนังสือรับรองจากอาจารย์ 2 ท่าน',
        'แผนการศึกษา (Study Plan)',
        'ผลคะแนนภาษาอังกฤษ (ถ้ามี)',
        'Portfolio หรือผลงาน (ถ้ามี)',
    ];

    return (
        <>
            <Head>
                <title>การรับสมัคร - บัณฑิตศึกษา คณะวิศวกรรมศาสตร์ มช.</title>
                <meta name="description" content="ระบบรับสมัคร เอกสาร และกำหนดการ" />
            </Head>

            <div className="min-h-screen bg-gray-50">
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

                <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">📝 การรับสมัคร</h1>
                        <p className="text-lg text-gray-600">
                            ข้อมูลการรับสมัคร เอกสารประกอบ และกำหนดการต่างๆ
                        </p>
                    </div>

                    {/* Apply Button */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-8 mb-12 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">สมัครเรียน ปีการศึกษา 2569</h2>
                        <p className="mb-6 text-indigo-100">เปิดรับสมัครแล้ว! สมัครได้ตั้งแต่วันนี้ - 28 กุมภาพันธ์ 2569</p>
                        <a 
                            href="https://www.grad.cmu.ac.th" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            สมัครออนไลน์ที่นี่
                        </a>
                    </div>

                    {/* Timeline */}
                    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">กำหนดการรับสมัคร</h2>
                        <div className="space-y-4">
                            {timeline.map((item, index) => (
                                <div key={index} className="flex items-start border-l-4 border-indigo-500 pl-4 py-2">
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-900">{item.event}</p>
                                        <p className="text-sm text-gray-600">{item.period}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Required Documents */}
                    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">เอกสารประกอบการสมัคร</h2>
                        <ul className="space-y-3">
                            {documents.map((doc, index) => (
                                <li key={index} className="flex items-start text-gray-700">
                                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{doc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Application Process */}
                    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">ขั้นตอนการสมัคร</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="font-bold text-indigo-600">1</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">ลงทะเบียนออนไลน์</h3>
                                    <p className="text-sm text-gray-600">สมัครผ่านระบบออนไลน์ที่ www.grad.cmu.ac.th</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="font-bold text-indigo-600">2</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">ชำระค่าสมัคร</h3>
                                    <p className="text-sm text-gray-600">ชำระเงินค่าสมัคร 500 บาท ผ่านระบบออนไลน์</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="font-bold text-indigo-600">3</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">ส่งเอกสาร</h3>
                                    <p className="text-sm text-gray-600">อัพโหลดเอกสารประกอบการสมัครทั้งหมด</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="font-bold text-indigo-600">4</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">สอบสัมภาษณ์</h3>
                                    <p className="text-sm text-gray-600">เข้ารับการสอบสัมภาษณ์กับภาควิชา (ออนไลน์หรือออนไซต์)</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="font-bold text-green-600">5</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">รับผลและรายงานตัว</h3>
                                    <p className="text-sm text-gray-600">ตรวจสอบผลและดำเนินการรายงานตัว</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
