import Image from "next/image";

export default function HomePage() {
    return (
        <div className="min-h-screen font-prompt flex flex-col items-center">
            {/* Header */}
            <header className="w-full max-w-[420px] mx-auto flex items-center justify-between px-5 pt-4 pb-2 bg-white rounded-b-2xl shadow-none">
                <div className="flex items-center mt-4 gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                        <img src="/2-Map/Group 587.png" alt="profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <div className="bg-green-400 w-2 h-2 rounded-full"></div>
                            <div className="text-xs">กำลังทำงาน</div>
                        </div>
                        <div className="text-sm font-medium text-[#222]">นางสาวส่ง ของไว</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Image src="/8-Home/Group 602.png" alt="profile" width={200} height={200} className="w-8 h-8 object-cover" />
                </div>
            </header>

            {/* Card: ระยะทางวันนี้ */}
            <div className="w-full max-w-[420px] mx-auto mt-4 px-5">
                <Image src="/11-Driver/Group 608.png" alt="profile" width={500} quality={100} height={500} className="w-full" />
            </div>

            {/* Tools */}
            <div className="w-full max-w-[420px] mx-auto mt-5 px-5">
                <p className="text-md font-medium text-[#222] mb-2">เครื่องมือ</p>
                <div className="flex justify-between">
                    {/* Tool 1 */}
                    <div className="flex flex-col items-center">
                        <Image src="/11-Driver/Group 572.png" alt="profile" width={200} quality={100} height={200} className="w-14 h-14 object-cover" />
                        <div className="text-xs text-[#222] font-medium mt-2">ภาระงาน</div>
                    </div>
                    {/* Tool 2 */}
                    <div className="flex flex-col items-center">
                        <Image src="/11-Driver/Group 571.png" alt="profile" width={200} quality={100} height={200} className="w-14 h-14 object-cover" />
                        <div className="text-xs text-[#222] font-medium mt-2">ข้อมูลย้อนหลัง</div>
                    </div>
                    {/* Tool 3 */}
                    <div className="flex flex-col items-center">
                        <Image src="/11-Driver/Group 573.png" alt="profile" width={200} quality={100} height={200} className="w-14 h-14 object-cover" />
                        <div className="text-xs text-[#222] font-medium mt-2">เสตทเม้นต์</div>
                    </div>
                    {/* Tool 4 */}
                    <div className="flex flex-col items-center">
                        <Image src="/11-Driver/ChatGPT_Image_May_21__2025__06_19_35_PM-removebg-preview 1.png" alt="profile" width={200} quality={100} height={200} className="w-24" />
                        <div className="text-xs text-[#222] font-medium mt-2">เกี่ยวกับเรา</div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[420px] mx-auto mt-7 px-5">
                <p className="text-md font-medium text-[#222] mb-2">สถานะการส่งสินค้า</p>
                <div className="bg-[#F6F6F6] rounded-3xl p-6 flex flex-col gap-2 shadow border border-[#F0F0F0]">
                    <div className="flex justify-between">
                        <div className="text-[18px] font-semibold text-[#222]">ขึ้นของที่คลัง</div>
                        <div className="text-xs">ตอนนี้</div>
                    </div>
                    <div className="flex w-full justify-between items-end gap-2">
                        <div className="text-[12px] max-w-[200px] text-[#666]">
                            กำลังเตรียมจัดส่ง
                            ขึ้นของที่คลังกับรถหมายเลข TBL1452-7 Havi ทะเบียน
                            รถหมายเลข กข 123
                        </div>
                        <div className="flex">
                            <button className="bg-[#222] text-white text-[11px] rounded-full px-6 py-2">ตรวจสอบ</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Delivered and Remaining Items */}
            <div className="w-full max-w-[420px] mx-auto mt-5 px-5">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-[16px] mt-2 font-medium text-[#222]">ความคืบหน้า</span>
                </div>
                <div className="flex justify-center mb-4">
                    <div className="bg-[#181A20] rounded-2xl px-6 py-4 flex items-center gap-6 w-full max-w-[380px] shadow-lg bg-gradient-to-r from-amber-200 to-yellow-400 ">
                        <div className="flex flex-col items-start gap-1 flex-1">
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 flex items-center justify-center  rounded-full">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.08"/>
                                        <circle cx="12" cy="8" r="2" fill="#fff" />
                                        <circle cx="12" cy="15" r="1.5" fill="#fff" />
                                    </svg>
                                </div>
                                <span className="text-white text-[15px] font-medium">ระยะทางที่ต้องวิ่ง</span>
                            </div>
                            <span className="text-[#B0B0B0] text-[12px] font-light">07:59 - Now</span>
                        </div>
                        <div className="flex flex-col gap-[10px] items-end">
                            <span className="text-white text-[22px] font-medium leading-none">2,340</span>
                            <span className="text-[#B0B0B0] text-[13px] font-medium -mt-1">กิโลเมตร</span>
                        </div>
                        <div className="flex items-center justify-center ml-4">
                            <svg width="44" height="44" viewBox="0 0 44 44">
                                <circle cx="22" cy="22" r="19" stroke="white" strokeWidth="6" fill="none"/>
                                <circle
                                    cx="22"
                                    cy="22"
                                    r="19"
                                    stroke="#F89E21"
                                    strokeWidth="6"
                                    fill="none"
                                    strokeDasharray={2 * Math.PI * 19}
                                    strokeDashoffset={2 * Math.PI * 19 * (1 - 0.55)}
                                    strokeLinecap="round"
                                    transform="rotate(-90 22 22)"
                                />
                                <text x="50%" y="54%" textAnchor="middle" fill="#F89E21" fontSize="13" fontWeight="bold" dy=".3em">55%</text>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className=" rounded-2xl p-4 flex flex-col items-start shadow bg-[#F6F6F6]">
                        <div className="flex items-center gap-2 mb-1">
                           
                            <span className="text-[13px] font-medium text-[#222] mb-[6px]">ส่งแล้ว</span>
                        </div>
                        <span className="text-[22px] text-[#222] leading-none font-thin">24 <span className="text-[13px] font-thin">รายการ</span></span>
                        <span className="text-[11px] text-[#B0B0B0] mt-1">อัพเดทล่าสุด 1 ชั่วโมงที่แล้ว</span>
                    </div>
                    <div className="rounded-2xl p-4 flex flex-col items-start  bg-[#F6F6F6]">
                        <div className="flex items-center gap-2 mb-1">
                           
                            <span className="text-[13px] font-medium text-[#222] mb-[6px]">ค้างส่ง</span>
                        </div>
                        <span className="text-[22px] font-bold text-[#222] leading-none">8 <span className="text-[13px] font-thin">รายการ</span></span>
                        <span className="text-[11px] text-[#B0B0B0] mt-1">อัพเดทล่าสุด 30 นาทีที่แล้ว</span>
                    </div>
                </div>
            </div>

            {/* Order Status */}
            

            {/* Progress Bar */}
            <div className="w-full max-w-[420px] mx-auto mt-6 px-5">
                <div className="bg-white rounded-2xl p-4 flex flex-col shadow border border-[#F0F0F0]">
                    <p className="text-[12px] font-medium mb-4">สถานะการส่งของคุณ</p>
                    <Image src="/11-Driver/Group 604.png" alt="profile" width={500} quality={100} height={500} className="w-full" />
                    <button className="w-full bg-[#0070C0] text-white text-sm font-semibold rounded-full py-2 mt-4">รายละเอียดเส้นทาง</button>
                </div>
            </div>
            <div className="h-10"></div>
        </div>
    );
}
