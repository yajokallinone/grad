import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { graduatePrograms } from '@/data/programs';
import Header from '@/components/Header';
import ProgramCard from '@/components/ProgramCard'; // Using the detailed card
import Link from 'next/link';
import Footer from '@/components/Footer';

// Define the structure of a single program
interface Program {
    major: string;
    title: string;
    title_en: string;
    degree: string;
    contact: string;
    img: string;
    plans: any[]; // You might want to define a stricter type for plans
}

interface ProgramPageProps {
    programKey: string;
    program: Program | null;
}

const ProgramPage: React.FC<ProgramPageProps> = ({ programKey, program }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!program) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <main className="max-w-4xl mx-auto px-4 py-12 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">ไม่พบหลักสูตร</h1>
                    <p className="text-gray-600 mb-8">ไม่พบหลักสูตรที่คุณกำลังค้นหา</p>
                    <Link href="/" className="px-6 py-2 bg-cmu-red text-white hover:bg-cmu-maroon transition-colors font-medium">
                        กลับไปหน้าหลัก
                    </Link>
                </main>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{`${program.title_en} - CMU Engineering`}</title>
                <meta name="description" content={`Details for the ${program.title_en} program at the Faculty of Engineering, Chiang Mai University.`} />
            </Head>

            <div className="min-h-screen bg-gray-50">
                <Header />

                <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="mb-8">
                        <Link href="/#programs" className="text-sm font-medium text-cmu-red hover:text-cmu-maroon flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            กลับไปหน้าหลักสูตร
                        </Link>
                    </div>
                    
                    <ProgramCard programKey={programKey} program={program} />

                </main>

                <Footer />
            </div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.keys(graduatePrograms).map(key => ({
        params: { programId: key },
    }));

    return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;
    const programId = params?.programId as string;
    
    // Type assertion for graduatePrograms
    const programs: { [key: string]: Program } = graduatePrograms;
    const program = programs[programId] || null;

    if (!program) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            programKey: programId,
            program,
        },
        revalidate: 60, // Re-generate the page every 60 seconds if needed
    };
};

export default ProgramPage;
