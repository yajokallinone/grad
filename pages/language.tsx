import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Language() {
    return (
        <>
            <Head>
                <title>ศูนย์ภาษา - บัณฑิตศึกษา คณะวิศวกรรมศาสตร์ มช.</title>
                <meta name="description" content="เกณฑ์ภาษาอังกฤษ การสอบ และคอร์สเรียน" />
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

                <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">🌐 ศูนย์ภาษา</h1>
                        <p className="text-lg text-gray-600">
                            เกณฑ์ภาษาอังกฤษ การสอบ และคอร์สเรียนสำหรับนักศึกษาบัณฑิตศึกษา
                        </p>
                    </div>

                    {/* English Requirements */}
                    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">เกณฑ์ภาษาอังกฤษสำหรับนักศึกษาบัณฑิตศึกษา</h2>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-indigo-700 mb-3">ระดับปริญญาโท</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">การสอบ</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">คะแนนขั้นต่ำ</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 text-sm text-gray-900">TOEFL ITP</td>
                                                <td className="px-6 py-4 text-sm text-gray-900">400</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm text-gray-900">TOEFL IBT</td>
                                                <td className="px-6 py-4 text-sm text-gray-900">32</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm text-gray-900">IELTS</td>
                                                <td className="px-6 py-4 text-sm text-gray-900">3.0</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm text-gray-900">CMU-eTEGS</td>
                                                <td className="px-6 py-4 text-sm text-gray-900">35</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-purple-700 mb-3">ระดับปริญญาเอก</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">การสอบ</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">คะแนนขั้นต่ำ</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 text-sm text-gray-900">TOEFL ITP</td>
                                                <td className="px-6 py-4 text-sm text-gray-900">450</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm text-gray-900">TOEFL IBT</td>
                                                <td className="px-6 py-4 text-sm text-gray-900">45</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm text-gray-900">IELTS</td>
                                                <td className="px-6 py-4 text-sm text-gray-900">4.0</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 text-sm text-gray-900">CMU-eTEGS</td>
                                                <td className="px-6 py-4 text-sm text-gray-900">45</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CMU-eTEGS Info */}
                    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">การสอบ CMU-eTEGS</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                <span className="font-semibold">CMU-eTEGS</span> (Chiang Mai University Electronic Test of English for Graduate Students) 
                                เป็นการสอบวัดความรู้ภาษาอังกฤษสำหรับนักศึกษาบัณฑิตศึกษาของมหาวิทยาลัยเชียงใหม่
                            </p>
                            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                                <h3 className="font-semibold text-indigo-900 mb-2">วิธีการสมัครสอบ:</h3>
                                <ol className="list-decimal list-inside space-y-2 text-sm">
                                    <li>สมัครสอบผ่านเว็บไซต์ศูนย์ภาษา มหาวิทยาลัยเชียงใหม่</li>
                                    <li>ชำระค่าสมัครสอบ 200 บาท</li>
                                    <li>เข้าสอบตามวันและเวลาที่กำหนด</li>
                                    <li>รับผลสอบภายใน 7 วันทำการ</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Language Courses */}
                    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">คอร์สเรียนภาษาอังกฤษ</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">English for Academic Purposes</h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    คอร์สภาษาอังกฤษเพื่อการศึกษาวิจัย การเขียนบทความวิชาการ
                                </p>
                                <p className="text-xs text-gray-500">ระยะเวลา: 8 สัปดาห์ | ค่าใช้จ่าย: 3,000 บาท</p>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">TOEFL Preparation</h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    คอร์สเตรียมสอบ TOEFL พร้อมแนวข้อสอบและเทคนิค
                                </p>
                                <p className="text-xs text-gray-500">ระยะเวลา: 6 สัปดาห์ | ค่าใช้จ่าย: 2,500 บาท</p>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">IELTS Preparation</h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    คอร์สเตรียมสอบ IELTS ครบทั้ง 4 ทักษะ
                                </p>
                                <p className="text-xs text-gray-500">ระยะเวลา: 6 สัปดาห์ | ค่าใช้จ่าย: 2,500 บาท</p>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Thesis Writing</h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    การเขียนวิทยานิพนธ์และบทความวิชาการภาษาอังกฤษ
                                </p>
                                <p className="text-xs text-gray-500">ระยะเวลา: 4 สัปดาห์ | ค่าใช้จ่าย: 2,000 บาท</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12 bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">ติดต่อศูนย์ภาษา</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p>📞 โทร: 053-943-xxx</p>
                            <p>📧 อีเมล: language@cmu.ac.th</p>
                            <p>🌐 เว็บไซต์: www.cmu.ac.th/language</p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
