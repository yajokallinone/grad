import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Landing() {
  return (
    <>
      <Head>
        <title>หน่วยบัณฑิตศึกษา คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</title>
        <meta name="description" content="ระบบข้อมูลหลักสูตรบัณฑิตศึกษา คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่ ปริญญาโท ปริญญาเอก ทุนการศึกษา และแนวทางวิจัย" />
      </Head>

      <div className="min-h-screen bg-gray-100 p-6 lg:p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* ================= LEFT : DEGREE TRACK ================= */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">หน่วยบัณฑิตศึกษา</h2>
              <h4 className="text-sm text-gray-600 ">งานบริการการศึกษา คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</h4>

            </div>

            {/* Banner */}
            <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-lg">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/eng-banner.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#5b171e]/90 to-[#5b171e]/40"></div>

              <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                <div>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs mb-3">
                    📢 ประกาศรับสมัคร
                  </div>
                  <h3 className="text-3xl font-bold mb-2">
                    รับสมัครนักศึกษาใหม่
                  </h3>
                  <p className="text-xl mb-4">ระดับบัณฑิตศึกษา ปีการศึกษา 2569</p>
                  <ul className="text-sm space-y-1 text-white/90">
                    <li>• หลักสูตรปริญญาโท </li>
                    <li>• หลักสูตรปริญญาเอก </li>

                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm space-y-1">
                    <p>📞 โทร: 053-944179</p>
                    {/* facebook */}
                    {/* <p> f: EDSERV.ENGCMU</p> */}
                  </div>

                  <Link
                    href="/"
                    className="w-14 h-14 rounded-full bg-white text-[#5b171e] flex items-center justify-center hover:scale-110 transition font-bold text-xl"
                  >
                    →
                  </Link>
                </div>
              </div>
            </div>

            {/* Master / Doctoral */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Master */}
              {/* <Link href="/programs">
                <div className="relative rounded-2xl bg-white shadow-md hover:shadow-xl transition overflow-hidden h-[200px] group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5b171e]/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  <div className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-3">
                        <span className="text-2xl">🎓</span>
                      </div>
                      <h4 className="text-xl font-bold mb-1">ข้อมูลหลักสูตร</h4>
                      <span className="text-sm text-gray-500">หลักสูตรปริญญาโท-เอก ทุกสาขา</span>
                    </div>
                    <span className="text-sm text-[#5b171e] font-semibold group-hover:translate-x-1 transition inline-block">เพิ่มเติม →</span>
                  </div>
                </div>
              </Link> */}

              {/* Scholarships */}
              {/* <Link href="/">
                <div className="relative rounded-2xl bg-white shadow-md hover:shadow-xl transition overflow-hidden h-[200px] group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5b171e]/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  <div className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-3">
                        <span className="text-2xl">💰</span>
                      </div>
                      <h4 className="text-xl font-bold mb-1">ข้อมูลทุน</h4>
                      <span className="text-sm text-gray-500">ทุนการศึกษาและทุนวิจัย</span>
                    </div>
                    <span className="text-sm text-[#5b171e] font-semibold group-hover:translate-x-1 transition inline-block">เพิ่มเติม →</span>
                  </div>
                </div>
              </Link> */}
            </div>

            {/* Info Cards */}

          </div>

          {/* ================= RIGHT : NON-DEGREE TRACK ================= */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Quick Links</h2>
              <p className="text-sm text-gray-500 mt-1">ข้อมูลสำคัญ</p>
            </div>
            
            {/* Grid 2x2 for 4 links */}
            <div className="grid grid-cols-2 gap-4">
                  <Link href="/">
                <div className="relative rounded-xl bg-white shadow-md hover:shadow-xl transition overflow-hidden h-[160px] group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5b171e]/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  <div className="relative p-4 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-xl">📰</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">ข่าวประชาสัมพันธ์</h3>
                      <p className="text-xs text-gray-500">กิจกรรมต่างๆ</p>
                    </div>
                    <span className="text-xs text-[#5b171e] font-semibold group-hover:translate-x-1 transition inline-block">เพิ่มเติม →</span>
                  </div>
                </div>
              </Link>
              <Link href="/programs">
                <div className="relative rounded-xl bg-white shadow-md hover:shadow-xl transition overflow-hidden h-[160px] group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5b171e]/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  <div className="relative p-4 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-xl">🎓</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">ข้อมูลหลักสูตร</h3>
                      <p className="text-xs text-gray-500">ปริญญาโท-เอก</p>
                    </div>
                    <span className="text-xs text-[#5b171e] font-semibold group-hover:translate-x-1 transition inline-block">เพิ่มเติม →</span>
                  </div>
                </div>
              </Link>

              <Link href="/research">
                <div className="relative rounded-xl bg-white shadow-md hover:shadow-xl transition overflow-hidden h-[160px] group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5b171e]/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  <div className="relative p-4 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-xl">🔬</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">ข้อมูลงานวิจัย</h3>
                      <p className="text-xs text-gray-500">งานวิจัยต่างๆ</p>
                    </div>
                    <span className="text-xs text-[#5b171e] font-semibold group-hover:translate-x-1 transition inline-block">เพิ่มเติม →</span>
                  </div>
                </div>
              </Link>

              <Link href="/">
                <div className="relative rounded-xl bg-white shadow-md hover:shadow-xl transition overflow-hidden h-[160px] group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5b171e]/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  <div className="relative p-4 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-xl">💰</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">ข้อมูลทุน</h3>
                      <p className="text-xs text-gray-500">ทุนการศึกษา</p>
                    </div>
                    <span className="text-xs text-[#5b171e] font-semibold group-hover:translate-x-1 transition inline-block">เพิ่มเติม →</span>
                  </div>
                </div>
              </Link>

          
            </div>


            {/* Contact Info */}
            {/* <div className="bg-gradient-to-br from-[#5b171e] to-[#8b2632] text-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold mb-4 flex items-center">
                <span className="mr-2">📞</span>
                ติดต่อเรา
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>งานบริการการศึกษา</span>
                </div>
                  <div className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">☎️</span>
                  <span>053-944-xxx</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">✉️</span>
                  <span>grad@eng.cmu.ac.th</span>
                </div>
                <div className="pt-3 border-t border-white/20">
                  <p className="text-xs text-white/80">
                    เวลาทำการ: จันทร์-ศุกร์ 08:30-16:30 น.
                  </p>
                </div>
              </div>
            </div> */}

            {/* Announcement */}
            {/* <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
              <div className="flex items-start">
                <span className="text-2xl mr-3">💡</span>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">ประกาศสำคัญ</h4>
                  <p className="text-sm text-blue-700">
                    เปิดรับสมัครนักศึกษาใหม่ ภาคการศึกษา 1/2569 
                  </p>
                  <a href="/programs" className="text-xs text-blue-600 hover:underline mt-2 inline-block">
                    อ่านเพิ่มเติม →
                  </a>
                </div>
              </div>
            </div> */}

            {/* Recommendation */}

          </div>
        </div>
      </div>
    </>
  )
}
