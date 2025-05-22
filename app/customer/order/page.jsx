'use client';
import MobileNavbar from "@/components/mobilenavbar";
import Image from "next/image";
import React, { useState } from "react";

export default function OrderDetail() {
  const [showRating, setShowRating] = useState(false);
  const [rating, setRating] = useState(0); // เริ่มที่ 0 ดาว

  // ตัวอย่างข้อมูล
  const items = [
    { name: "estส้มซ่า เซตพาเลต *268", qty: 5 },
    { name: "เครื่องดื่มโออิชิ แบบแพ็ค *13", qty: 6 },
    { name: "อันโซ เซตพาเลต *45", qty: 12 },
    { name: "แรงเจอร์ เบบบวด *78", qty: 9 },
    { name: "เป๊ปซี่ช้าง แบบขวด *1000", qty: 20 },
    { name: "estส้มซ่า เซตพาเลต *268", qty: 14 },
    { name: "เครื่องดื่มโออิชิ แบบแพ็ค *13", qty: 3 },
    { name: "อันโซ เซตพาเลต *45", qty: 8 },
    { name: "แรงเจอร์ เบบบวด *78", qty: 15 },
    { name: "เป๊ปซี่ช้าง แบบขวด *1000", qty: 20 },
  ];
  const total = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="min-h-screen bg-[#fff] flex flex-col items-center font-prompt relative">
        <MobileNavbar></MobileNavbar>
      {/* Container */}
      <div className="w-full max-w-[480px] mx-auto pt-6 pb-4 px-0 flex flex-col min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-center px-6">
          <div className="text-[20px] font-normal text-[#222]">รายการสั่งซื้อ</div>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3 px-6 mt-6">
          <img
            src="/2-Map/Group 587.png"
            alt="avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="font-medium text-[16px] text-[#222]">นางสาวส่ง ของไว</div>
            <div className="text-xs text-gray-400 mt-0.5">หมายเลขทะเบียน กข 1234</div>
          </div>
          <div className="flex items-center gap-2 border-[1px] border-gray-200 rounded-full px-2 py-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            <span className=" text-[#B88A00] text-xs font-medium rounded-full ">กำลังส่งของ</span>
          </div>
        </div>

        {/* Order Info */}
        <div className="flex items-center gap-3 bg-[#F7F8FA] rounded-2xl py-2 px-6 mt-4 mx-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center">
            <Image src="/4-Transaction-Order/Group 530.png" alt="order" width={32} height={32} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-[15px] text-[#222]">เลขออเดอร์ TBL5242-7</div>
            <div className="text-xs text-gray-400 mt-0.5">วันที่ 17 พฤษภาคม 2568</div>
          </div>
          <span className="text-[#E04A4A] text-xs font-medium rounded-full px-3 py-1">รายงานปัญหา</span>
        </div>

        {/* Summary */}
        <div className="bg-[#F7F8FA] rounded-2xl mt-4 mx-4 px-6 py-6">
          <div className="font-medium text-[15px] text-[#222] mb-3">สรุปยอดค่าใช้จ่าย</div>
          <ul className="space-y-4">
            {items.map((item, idx) => (
              <li key={idx} className="flex justify-between text-[14px] text-[#888]">
                <span className="truncate">{item.name}</span>
                <span>{item.qty} ลัง</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4 pt-3 border-t border-[#E6E6E6] text-[15px] font-medium text-[#222]">
            <span>รวมทุกรายการ</span>
            <span>{total} ลัง</span>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Button */}
        <button
          className="w-[90%] mx-auto mt-8 mb-2 bg-[#0070C0] hover:bg-[#005fa3] text-white text-[18px] font-medium rounded-full py-3 shadow transition"
          onClick={() => setShowRating(true)}
        >
          ออกใบเสร็จ
        </button>
      </div>

      {/* Rating Modal */}
      {showRating && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
          {/* Animation: slide up */}
          <div className="w-full flex justify-center items-end animate-slideup">
            {/* วงกลมตัดข้าง (bottom sheet แบบโดม) */}
            <div className="relative w-full max-w-[400px] h-[390px] flex flex-col items-center justify-end">
              {/* วงกลมขาวตัดข้าง */}
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[400px] bg-white"
                style={{
                  borderTopLeftRadius: "320px",
                  borderTopRightRadius: "320px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                  boxShadow: "0 0 24px 0 rgba(0,0,0,0.10)",
                }}
              />
              {/* เนื้อหา */}
              <div className="relative z-10  translate-y-[-60px] flex flex-col items-center w-full px-6 pb-6">
                
                  <Image
                    src="/5-User-review/Group 538.png"
                    alt="delivery"
                    width={500}
                    height={500}
                    className="w-[170px] h-[170px] mb-6"
                  />
                {/* หัวข้อ */}
                <div className="font-medium text-[20px] text-[#222] mb-1 text-center">ประเมินการจัดส่ง</div>
                {/* คำอธิบาย */}
                <div className="text-[15px]  text-[#B0B0B0] text-center my-2 leading-[18px]">
                  เราต้องการฟังเสียงจากคุณ การให้คะแนนจะช่วย<br />
                  ให้เราปรับปรุงการขนส่งให้ดีและรวดเร็วยิ่งขึ้น
                </div>
                {/* Stars */}
                <div className="flex items-center gap-2 mt-4 mb-7">
                  {[1,2,3,4,5].map((i) => (
                    <svg
                      key={i}
                      onClick={() => setRating(i)}
                      className={`w-9 h-9 cursor-pointer transition-all duration-200 transform ${i <= rating ? "text-[#FFD600] scale-110" : "text-gray-300 scale-100"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ filter: i <= rating ? 'drop-shadow(0 2px 6px #FFD60066)' : 'none' }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                {/* ปุ่ม */}
                <button
                  className="w-full bg-[#0070C0] hover:bg-[#005fa3] text-white text-[16px] font-medium rounded-full py-3  shadow transition"
                  onClick={() => setShowRating(false)}
                >
                  ยืนยันการให้คะแนน
                </button>
              </div>
            </div>
          </div>
          <style jsx>{`
            .animate-slideup {
              animation: slideup 0.35s cubic-bezier(.4,0,.2,1);
            }
            @keyframes slideup {
              from { transform: translateY(100%); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
