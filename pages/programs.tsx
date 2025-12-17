import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import ProgramCardCompact from '@/components/ProgramCardCompact';
import Chatbot from '@/components/Chatbot';
import { graduatePrograms } from '@/data/programs';
import Footer from '@/components/Footer';

export default function Home() {
    const [filters, setFilters] = useState({
        degree: 'all',
        major: 'all',
        searchTerm: '',
        plan: 'all',
        studyDay: 'all',
        title: 'all',
    });

    const filteredPrograms = useMemo(() => {
        return Object.entries(graduatePrograms).filter(([key, program]) => {
            // Filter by degree
            if (filters.degree !== 'all') {
                if (filters.degree === 'นานาชาติ') {
                    if (!program.degree.includes('นานาชาติ')) return false;
                } else {
                    if (!program.degree.includes(filters.degree)) return false;
                }
            }

            // Filter by major
            if (filters.major !== 'all' && program.major !== filters.major) {
                return false;
            }

            // Filter by title
            if (filters.title !== 'all' && program.title !== filters.title) {
                return false;
            }

            // Filter by plan
            if (filters.plan !== 'all') {
                if (!program.plans.some(p => p.plan_name === filters.plan)) {
                    return false;
                }
            }

            // Filter by study day
            if (filters.studyDay !== 'all') {
                if (!program.plans.some(p => p.date_study === filters.studyDay)) {
                    return false;
                }
            }

            // Filter by search term
            if (filters.searchTerm) {
                const searchLower = filters.searchTerm.toLowerCase();
                const titleMatch = program.title.toLowerCase().includes(searchLower);
                const titleEnMatch = program.title_en.toLowerCase().includes(searchLower);
                const majorMatch = program.major.toLowerCase().includes(searchLower);

                if (!titleMatch && !titleEnMatch && !majorMatch) {
                    return false;
                }
            }

            return true;
        });
    }, [filters]);

    return (
        <>
            <Head>
                <title>Graduate Programs - Faculty of Engineering, CMU</title>
                <meta name="description" content={"Graduate programs at the Faculty of Engineering, Chiang Mai University. Master's and Doctoral degrees in various engineering disciplines."} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="min-h-screen bg-white">
                <Header />

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="programs">
                    {/* Stats Section */}
                   

             

                    {/* Filter Bar */}
                    <FilterBar onFilterChange={setFilters} />

                    {/* Programs Grid - 3 Columns */}
                    {filteredPrograms.length > 0 ? (
                        <>
                            <div className="mb-8">
                                <h4 className="text-2xl font-bold text-gray-900">
                                    สาขาทั้งหมด ({filteredPrograms.length})
                                </h4>
                              
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredPrograms.map(([key, program]) => (
                                    <ProgramCardCompact key={key} programKey={key} program={program} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 border border-gray-200">
                            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">ไม่พบโปรแกรมที่ตรงกับการค้นหา</h3>
                            <p className="text-gray-600 mb-4">ลองปรับตัวกรองหรือคำค้นหาของคุณ</p>
                            <button
                                onClick={() => setFilters({ degree: 'all', major: 'all', searchTerm: '', plan: 'all', studyDay: 'all' , title: 'all' })}
                                className="px-6 py-2 bg-cmu-red text-white hover:bg-cmu-maroon transition-colors font-medium"
                            >
                                ล้างตัวกรอง
                            </button>
                        </div>
                    )}
                </main>

                {/* Footer */}
                <Footer />

                {/* Chatbot */}
                <Chatbot />
            </div>
        </>
    );
}
