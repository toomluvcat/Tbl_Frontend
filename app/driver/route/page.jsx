'use client'

import { useState } from "react";
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';

const timeline = [
  {
    title: "ขึ้นของที่คลัง",
    time: "9.00 น.",
    desc: (
      <>
      วางเบียร์ 10 ลังข้างตู้แช่, โซดาหลังเคาน์เตอร์, น้ำดื่มชิดประตู เจ้าของตรวจนับก่อน รับสินค้าแล้วถอยรถ
      </>
    ),
    button: true,
  },
  {
    title: "ส่งของ นชดล โภคภัณฑ์",
    time: "9.30 น.",
    desc: (
      <>
       ขนเบียร์เข้าหลังร้านมุมซ้าย, โซดาติดผนังขวา, น้ำดื่มซ้อนข้างชั้น ระวังบันไดชันและพื้นลื่นเมื่อฝนตก
      </>
    ),
    button: true,
  },
  
  {
    title: "ส่งของ ร้านมีชัย โภคภัณฑ์",
    time: "10.35 น.",
    desc: (
      <>
       เบียร์วางซ้าย, โซดาวางขวา, น้ำดื่มหน้าประตู ร้านไม่เคร่งเรื่องเรียงแต่ห้ามบังทางรถเข็น
      </>
    ),
    button: true,
  },
  {
    title: "ส่งของ ร้านซื้อกะตา",
    time: "10.35 น.",
    desc: (
      <>
       ลากเบียร์ใต้ชั้นแช่, โซดาวางพาเลท, น้ำดื่มมุมหน้าร้าน พื้นลื่น ใช้รองเท้ากันลื่น
      </>
    ),
    button: true,
  },
  // ... เพิ่มรายการอื่นๆ ตามต้องการ
];

export default function ThaiScheduleApp() {
  const [active, setActive] = useState(0);
  const [showDetail, setShowDetail] = useState(null);

  return (
    <div className="min-h-screen  font-prompt">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center ">
        <ChevronLeft className="w-6 h-6 text-gray-600 mr-3" />
        <h1 className="text-lg font-medium text-gray-900">รายการที่ต้องทำ</h1>
      </div>

      {/* Calendar Section */}
      <div className="bg-white mx-4 mt-4 rounded-lg p-4">
        <h2 className="text-xl font-medium text-gray-900 mb-4">จันทร์ 10 พค</h2>
        
        {/* Week Days */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          <div className="text-center text-sm text-gray-600 py-2">จ</div>
          <div className="text-center text-sm text-gray-600 py-2">อ</div>
          <div className="text-center text-sm text-gray-600 py-2">พ</div>
          <div className="text-center text-sm text-gray-600 py-2">พฤ</div>
          <div className="text-center text-sm text-gray-600 py-2">ศ</div>
          <div className="text-center text-sm text-gray-600 py-2">ส</div>
          <div className="text-center text-sm text-gray-600 py-2">อา</div>
        </div>
        
        {/* Week Numbers */}
        <div className="grid grid-cols-7 gap-1">
          <div className="text-center text-base text-gray-900 py-2">8</div>
          <div className="text-center text-base text-gray-900 py-2">9</div>
          <div className="text-center text-base text-gray-900 py-2">10</div>
          <div className="text-center text-base text-gray-900 py-2">11</div>
          <div className="text-center text-base text-gray-900 py-2">12</div>
          <div className="text-center text-base text-blue-600 py-2 relative">
            13
            <div className="w-1 h-1 bg-blue-600 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
          </div>
          <div className="text-center text-base text-gray-900 py-2">14</div>
        </div>
      </div>

      {/* Schedule Timeline */}
      <div className="relative flex px-10 mt-6">
        {/* เส้น timeline หลัก */}
        <div className="absolute h-[590px] rounded left-[50px] top-10 bottom-0 w-1 bg-[#0267B2] z-0" />
        <div className="flex flex-col w-full">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start mb-4 relative cursor-pointer"
              onClick={() => setActive(idx)}
            >
              {/* จุดวงกลม */}
              <div className="relative z-10" style={{ marginTop: '5px' }}>
                <Image
                  src={idx === 0 ? "/11-Driver/check.svg" : "/11-Driver/check2.svg"}
                  alt="driver"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              {/* การ์ด */}
              <div className="ml-10 flex-1">
                <div
                  className={
                    "transition-all duration-300 " +
                    (idx === 0
                      ? "bg-gradient-to-t from-blue-400 to-blue-600 rounded-3xl p-6 text-white"
                      : "bg-white p-6 rounded-3xl text-gray-900 border border-gray-200")
                  }
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <span className={idx === 0 ? "text-sm text-white" : "text-sm text-gray-600"}>{item.time}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className={idx === 0 ? "text-sm mb-3 max-w-[200px] opacity-90" : "text-sm mb-3 max-w-[200px] text-gray-600"}>
                      {item.desc}
                    </p>
                    {item.button && (
                      <button
                        className={`${idx === 0 ? "bg-black  text-white" : "bg-white text-black border border-gray-200" }  px-4 py-2 rounded-full text-sm font-medium ml-4 transition-all duration-300`}
                        onClick={e => {
                          e.stopPropagation();
                          setShowDetail(idx === showDetail ? null : idx);
                        }}
                      >
                        ตรวจสอบ
                      </button>
                    )}
                  </div>
                  {/* แสดงรายละเอียดแบบอนิเมชั่น */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${showDetail === idx ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                  >
                    {showDetail === idx && (
                      <div className="p-4 bg-white rounded-xl text-blue-700 shadow mt-2">
                        รายละเอียดเพิ่มเติมของ {item.title}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}