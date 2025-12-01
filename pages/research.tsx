import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Research() {
    const researchCenters = [
        {
            name: 'ศูนย์วิจัยวิศวกรรมโยธาและโครงสร้างพื้นฐาน',
            name_en: 'Civil Engineering and Infrastructure Research Center',
            department: 'ภาควิชาวิศวกรรมโยธา',
            description: 'งานวิจัยด้านโครงสร้าง วัสดุก่อสร้าง และระบบโครงสร้างพื้นฐาน',
            icon: '🏗️',
        },
        {
            name: 'ศูนย์วิจัยพลังงานและสิ่งแวดล้อม',
            name_en: 'Energy and Environment Research Center',
            department: 'ภาควิชาวิศวกรรมเครื่องกล',
            description: 'พลังงานทดแทน ประสิทธิภาพพลังงาน และสิ่งแวดล้อม',
            icon: '⚡',
        },
        {
            name: 'ศูนย์วิจัยปัญญาประดิษฐ์และวิทยาการข้อมูล',
            name_en: 'AI and Data Science Research Center',
            department: 'ภาควิชาวิศวกรรมคอมพิวเตอร์',
            description: 'Machine Learning, Deep Learning, Big Data และ AI Applications',
            icon: '🤖',
        },
        {
            name: 'ศูนย์วิจัยระบบอัตโนมัติและหุ่นยนต์',
            name_en: 'Automation and Robotics Research Center',
            department: 'ภาควิชาวิศวกรรมไฟฟ้า',
            description: 'ระบบควบคุมอัตโนมัติ หุ่นยนต์อุตสาหกรรม และ IoT',
            icon: '🤖',
        },
        {
            name: 'ศูนย์วิจัยโลจิสติกส์และซัพพลายเชน',
            name_en: 'Logistics and Supply Chain Research Center',
            department: 'ภาควิชาวิศวกรรมอุตสาหการ',
            description: 'การจัดการโซ่อุปทาน ระบบโลจิสติกส์ และการเพิ่มประสิทธิภาพ',
            icon: '📦',
        },
        {
            name: 'ศูนย์วิจัยทรัพยากรธรณีและสิ่งแวดล้อม',
            name_en: 'Georesources and Environment Research Center',
            department: 'ภาควิชาวิศวกรรมเหมืองแร่และปิโตรเลียม',
            description: 'การสำรวจทรัพยากร การจัดการสิ่งแวดล้อม และความยั่งยืน',
            icon: '⛏️',
        },
    ];

    return (
        <>
            <Head>
                <title>งานวิจัย - บัณฑิตศึกษา คณะวิศวกรรมศาสตร์ มช.</title>
                <meta name="description" content="ศูนย์วิจัย ห้องปฏิบัติการ และโครงการวิจัย" />
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
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">🔬 งานวิจัย</h1>
                        <p className="text-lg text-gray-600">
                            ศูนย์วิจัย ห้องปฏิบัติการ และโครงการวิจัยของคณะวิศวกรรมศาสตร์
                        </p>
                    </div>

                    {/* Research Centers */}
                    <div className="space-y-6">
                        {researchCenters.map((center, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start">
                                    <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-3xl">{center.icon}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{center.name}</h3>
                                        <p className="text-sm text-gray-600 mb-2">{center.name_en}</p>
                                        <p className="text-sm text-indigo-600 font-medium mb-3">{center.department}</p>
                                        <p className="text-gray-700">{center.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Research Areas */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">สาขาวิจัยหลัก</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {['โครงสร้างและวัสดุ', 'พลังงานทดแทน', 'ปัญญาประดิษฐ์', 'ระบบอัตโนมัติ', 'โลจิสติกส์', 'สิ่งแวดล้อม', 'วัสดุศาสตร์', 'ระบบควบคุม', 'การจัดการอุตสาหกรรม'].map((area, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                                    <p className="text-gray-900 font-medium">{area}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
