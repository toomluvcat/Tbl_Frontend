import React from "react";

export default function TaskTimeline() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center font-sans">
      {/* Header */}
      <div className="w-full max-w-[430px] mx-auto px-6 pt-6 pb-2">
        <div className="flex items-center gap-2 mb-6">
          {/* Back Arrow */}
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F5]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B0B0B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <span className="text-[#888] text-[20px] font-medium ml-1">รายการที่ต้องทำ</span>
        </div>
        {/* Date Row */}
        <div className="mb-1">
          <span className="text-[28px] font-bold text-[#222]">จันทร์ 10 พค</span>
        </div>
        {/* Calendar Days */}
        <div className="flex items-center gap-4 mb-6 mt-2">
          {[
            { d: "จ", n: "8" },
            { d: "อ", n: "9" },
            { d: "พ", n: "10" },
            { d: "พฤ", n: "11" },
            { d: "ศ", n: "12" },
            { d: "ส", n: "13", active: true },
            { d: "อา", n: "14" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center w-8">
              <span className={`text-[16px] font-medium ${item.active ? 'text-[#0070C0]' : 'text-[#888]'}`}>{item.d}</span>
              <span className={`text-[16px] font-medium ${item.active ? 'text-[#0070C0]' : 'text-[#888]'}`}>{item.n}</span>
              {item.active && <span className="w-1.5 h-1.5 rounded-full bg-[#0070C0] mt-1"></span>}
            </div>
          ))}
        </div>
      </div>
      {/* Timeline */}
      <div className="w-full max-w-[430px] mx-auto px-6 pb-10">
        <div className="relative border-l-2 border-[#0070C0] ml-5">
          {/* Timeline Item 1 - Highlighted */}
          <div className="relative flex items-start mb-10">
            {/* Circle */}
            <div className="absolute -left-6 top-2">
              <div className="w-6 h-6 rounded-full border-4 border-white bg-[#0070C0] flex items-center justify-center shadow" style={{boxShadow:'0 0 0 2px #0070C0'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" fill="#fff"/></svg>
              </div>
            </div>
            {/* Card */}
            <div className="ml-6 flex-1">
              <div className="bg-[#0070C0] rounded-2xl px-6 pt-5 pb-4 flex flex-col shadow-md min-w-[290px] max-w-[340px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-[20px] font-semibold">ขึ้นของที่คลัง</span>
                  <span className="text-white text-[15px] font-medium">9.00 น.</span>
                </div>
                <div className="text-white text-[14px] font-normal mb-3 leading-tight">ขึ้นของที่คลังกับรถหมายเลข<br/>TBL1452-7 Havi ทะเบียน<br/>รถหมายเลข กข 123</div>
                {/* Product Images Placeholder */}
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center overflow-hidden">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="#E5E5E5"><circle cx="10" cy="10" r="10"/></svg>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button className="bg-black text-white text-[15px] font-medium rounded-full px-6 py-1.5">ตรวจสอบ</button>
                </div>
              </div>
            </div>
          </div>
          {/* Timeline Item 2 */}
          <div className="relative flex items-start mb-10">
            <div className="absolute -left-5 top-2">
              <div className="w-4 h-4 rounded-full border-2 border-[#0070C0] bg-white"></div>
            </div>
            <div className="ml-6 flex-1 flex items-center justify-between">
              <div>
                <div className="text-[#222] text-[20px] font-bold mb-1">ส่งของ เฮียร์ต่อ</div>
                <div className="text-[#888] text-[14px] font-normal leading-tight">ออกจากคลังเดินทางสู่เฮียร์ต่อ<br/>โดยจัดส่งออเดอร์ TBL154-5</div>
              </div>
              <div className="text-[#222] text-[15px] font-medium whitespace-nowrap ml-4">9.30 น.</div>
            </div>
          </div>
          {/* Timeline Item 3 */}
          <div className="relative flex items-start mb-10">
            <div className="absolute -left-5 top-2">
              <div className="w-4 h-4 rounded-full border-2 border-[#0070C0] bg-white"></div>
            </div>
            <div className="ml-6 flex-1 flex items-center justify-between">
              <div>
                <div className="text-[#222] text-[20px] font-bold mb-1">ศูนย์คลังรวมสินค้า</div>
                <div className="text-[#888] text-[14px] font-normal leading-tight">ขนย้ายพัสดุจำนวน 11 รายการลงให้เฮียร์ต่อรวมถึงเช็คยอดความถูกต้อง</div>
              </div>
              <div className="text-[#222] text-[15px] font-medium whitespace-nowrap ml-4">10.35 น.</div>
            </div>
          </div>
          {/* Timeline Item 4 */}
          <div className="relative flex items-start mb-10">
            <div className="absolute -left-5 top-2">
              <div className="w-4 h-4 rounded-full border-2 border-[#0070C0] bg-white"></div>
            </div>
            <div className="ml-6 flex-1 flex items-center justify-between">
              <div>
                <div className="text-[#222] text-[20px] font-bold mb-1">ส่งของเฮีย</div>
                <div className="text-[#888] text-[14px] font-normal leading-tight">ขนย้ายพัสดุจำนวน 11 รายการลงให้เฮียร์ต่อรวมถึงเช็คยอดความถูกต้อง</div>
              </div>
              <div className="text-[#222] text-[15px] font-medium whitespace-nowrap ml-4">10.35 น.</div>
            </div>
          </div>
          {/* Timeline Item 5 */}
          <div className="relative flex items-start">
            <div className="absolute -left-5 top-2">
              <div className="w-4 h-4 rounded-full border-2 border-[#0070C0] bg-white"></div>
            </div>
            <div className="ml-6 flex-1 flex items-center justify-between">
              <div>
                <div className="text-[#222] text-[20px] font-bold mb-1">รถบรรทุกกลับคลัง</div>
                <div className="text-[#888] text-[14px] font-normal leading-tight">ขนย้ายพัสดุจำนวน 11 รายการลงให้เฮียร์ต่อรวมถึงเช็คยอดความถูกต้อง</div>
              </div>
              <div className="text-[#222] text-[15px] font-medium whitespace-nowrap ml-4">10.35 น.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 