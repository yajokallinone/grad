import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
               
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
                <div className="flex items-center justify-between h-20">
                        
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                        
                            <Link href="../">
                                <Image src="/logo-home.jpg" alt="CMU Logo" width={40} height={40} />
                            </Link>
                          
                        </div>
                   <Link href="../">
                          <a className="text-xl font-bold text-gray-900">
                             บัณฑิตศึกษา
                          </a>
                            <p className="text-sm text-gray-600">
                                คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
                            </p>
             
                      </Link>

                    </div>
   
                    {/* Navigation */}
                    {/* <nav className="hidden md:flex items-center space-x-8">
                        <a href="#programs" className="text-gray-700 hover:text-cmu-red transition-colors font-medium text-sm">
                            Programs
                        </a>
                        <a href="#admissions" className="text-gray-700 hover:text-cmu-red transition-colors font-medium text-sm">
                            Admissions
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-cmu-red transition-colors font-medium text-sm">
                            Contact
                        </a>
                        <button className="bg-cmu-red text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cmu-maroon transition-colors">
                            Apply Now
                        </button>
                    </nav> */}
                </div>
            </div>

            {/* Subtitle Section */}
            {/* <div className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                        หลักสูตรระดับบัณฑิตศึกษา
                    </h2>
                    <p className="text-gray-600">
                        คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
                    </p>
                </div>
            </div> */}
        </header>
    );
};

export default Header;
