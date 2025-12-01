import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
    const departments = [
        {
            name: 'ภาควิชาวิศวกรรมโยธา',
            name_en: 'Department of Civil Engineering',
            phone: '053-944-157',
            email: 'civil@eng.cmu.ac.th',
            programs: ['วิศวกรรมโยธา', 'วิศวกรรมและการบริหารการก่อสร้าง'],
        },
        {
            name: 'ภาควิชาวิศวกรรมไฟฟ้า',
            name_en: 'Department of Electrical Engineering',
            phone: '053-944-157',
            email: 'ee@eng.cmu.ac.th',
            programs: ['วิศวกรรมไฟฟ้า'],
        },
        {
            name: 'ภาควิชาวิศวกรรมเครื่องกล',
            name_en: 'Department of Mechanical Engineering',
            phone: '053-944-146',
            email: 'me@eng.cmu.ac.th',
            programs: ['วิศวกรรมเครื่องกล', 'วิศวกรรมพลังงาน'],
        },
        {
            name: 'ภาควิชาวิศวกรรมอุตสาหการ',
            name_en: 'Department of Industrial Engineering',
            phone: '053-944-183',
            email: 'ie@eng.cmu.ac.th',
            programs: ['วิศวกรรมอุตสาหการ', 'การจัดการอุตสาหกรรม', 'วิศวกรรมโลจิสติกส์'],
        },
        {
            name: 'ภาควิชาวิศวกรรมคอมพิวเตอร์',
            name_en: 'Department of Computer Engineering',
            phone: '053-942-088',
            email: 'cpe@eng.cmu.ac.th',
            programs: ['วิทยาการข้อมูล'],
        },
        {
            name: 'ภาควิชาวิศวกรรมเหมืองแร่และปิโตรเลียม',
            name_en: 'Department of Mining and Petroleum Engineering',
            phone: '053-944-128',
            email: 'mn@eng.cmu.ac.th',
            programs: ['วิศวกรรมทรัพยากรธรณีเพื่อความยั่งยืน'],
        },
    ];

    return (
        <>
            <Head>
                <title>ติดต่อเรา - บัณฑิตศึกษา คณะวิศวกรรมศาสตร์ มช.</title>
                <meta name="description" content="ข้อมูลติดต่อแต่ละภาควิชาและหน่วยงาน" />
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

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">📞 ติดต่อเรา</h1>
                        <p className="text-lg text-gray-600">
                            ข้อมูลติดต่อภาควิชาต่างๆ ภายในคณะวิศวกรรมศาสตร์
                        </p>
                    </div>

                    {/* Main Contact */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-8 mb-12 text-white">
                        <h2 className="text-2xl font-bold mb-4">งานบัณฑิตศึกษา คณะวิศวกรรมศาสตร์</h2>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>053-944-xxx</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>grad@eng.cmu.ac.th</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>จันทร์-ศุกร์ 8:30-16:30 น.</span>
                            </div>
                        </div>
                    </div>

                    {/* Departments */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">ติดต่อภาควิชา</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {departments.map((dept, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{dept.name}</h3>
                                <p className="text-sm text-gray-600 mb-4">{dept.name_en}</p>
                                
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-sm">
                                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="text-gray-700">{dept.phone}</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-gray-700">{dept.email}</span>
                                    </div>
                                </div>

                                <div className="border-t pt-3">
                                    <p className="text-xs text-gray-500 mb-2">หลักสูตรที่เปิดสอน:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {dept.programs.map((program, i) => (
                                            <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                                {program}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Map */}
                    <div className="mt-12 bg-white rounded-lg shadow-md border border-gray-200 p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">แผนที่</h2>
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500">Google Maps Integration</p>
                        </div>
                        <p className="text-sm text-gray-600 mt-4">
                            📍 คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่ 239 ถนนห้วยแก้ว ตำบลสุเทพ อำเภอเมือง จังหวัดเชียงใหม่ 50200
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
