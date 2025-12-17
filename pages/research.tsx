import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Project {
    advisor: string;
    project_name: string;
}

export default function Research() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [dbStatus, setDbStatus] = useState<any>(null);
    const [testingDb, setTestingDb] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch('/api/projects');
            if (!response.ok) {
                throw new Error('Failed to fetch projects');
            }
            const data = await response.json();
            setProjects(data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    const testDatabase = async () => {
        setTestingDb(true);
        try {
            const response = await fetch('/api/test-db');
            const data = await response.json();
            setDbStatus(data);
        } catch (err) {
            setDbStatus({
                success: false,
                message: 'ไม่สามารถเชื่อมต่อได้',
                error: (err as Error).message
            });
        } finally {
            setTestingDb(false);
        }
    };

    
    return (
        <>
            <Head>
                <title>งานวิจัย - บัณฑิตศึกษา คณะวิศวกรรมศาสตร์ มช.</title>
                <meta name="description" content="ศูนย์วิจัย ห้องปฏิบัติการ และโครงการวิจัย" />
            </Head>

            <div className="min-h-screen bg-white">
                {/* Header */}
                <header className="bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-semibold text-white mb-1">โครงการวิจัยบัณฑิตศึกษา</h1>
                                <p className="text-blue-100 text-sm">คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</p>
                            </div>
                            <Link href="/" className="text-white hover:text-blue-200 transition-colors text-sm font-medium">
                                กลับหน้าหลัก
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-6 py-8">
                    {/* Search and Test Section */}
                    <div className="mb-8 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-semibold text-gray-800">รายการโครงการวิจัย</h2>
                            {!loading && !error && (
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                    ทั้งหมด {projects.length} โครงการ
                                </span>
                            )}
                        </div>
                        <button
                            onClick={testDatabase}
                            disabled={testingDb}
                            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 disabled:bg-gray-100 transition-colors text-sm font-medium flex items-center gap-2"
                        >
                            {testingDb ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-400 border-t-transparent"></div>
                                    <span>กำลังทดสอบ...</span>
                                </>
                            ) : (
                                <span>ทดสอบการเชื่อมต่อ</span>
                            )}
                        </button>
                    </div>

                    {/* Database Status */}
                    {dbStatus && (
                        <div className={`mb-6 p-4 rounded-md border-l-4 ${
                            dbStatus.success 
                                ? 'bg-green-50 border-green-500' 
                                : 'bg-red-50 border-red-500'
                        }`}>
                            <div className="flex items-start gap-3">
                                <div className="flex-1">
                                    <p className={`font-medium ${
                                        dbStatus.success ? 'text-green-900' : 'text-red-900'
                                    }`}>
                                        {dbStatus.message}
                                    </p>
                                    {dbStatus.connectionInfo && (
                                        <div className="text-xs text-gray-600 mt-2 space-y-1">
                                            <p>Host: {dbStatus.connectionInfo.host} | Database: {dbStatus.connectionInfo.database}</p>
                                        </div>
                                    )}
                                    {!dbStatus.success && dbStatus.error && (
                                        <p className="text-xs text-red-700 mt-2">{dbStatus.error}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Loading State */}
                    {loading && (
                        <div className="flex flex-col justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-10 w-10 border-3 border-blue-900 border-t-transparent mb-4"></div>
                            <p className="text-gray-500 text-sm">กำลังโหลดข้อมูล...</p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-md p-6 text-center">
                            <p className="text-red-800 font-medium">เกิดข้อผิดพลาด</p>
                            <p className="text-red-600 text-sm mt-1">{error}</p>
                        </div>
                    )}

                    {/* Projects Table */}
                    {!loading && !error && (
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-20">
                                                ลำดับ
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                                ชื่องานวิจัย
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-64">
                                                อาจารย์ที่ปรึกษา
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {projects.length === 0 ? (
                                            <tr>
                                                <td colSpan={3} className="px-6 py-12 text-center">
                                                    <p className="text-gray-400">ไม่พบข้อมูลโครงการวิจัย</p>
                                                </td>
                                            </tr>
                                        ) : (
                                            projects.map((project, index) => (
                                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-900">
                                                        {project.project_name || '-'}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-700">
                                                        {project.advisor || '-'}
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Footer Info */}
                    {!loading && !error && projects.length > 0 && (
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-500">
                                แสดงข้อมูลทั้งหมด {projects.length} โครงการ
                            </p>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}
