// app/components/RecommendedSection.jsx
'use client'

import Image from "next/image";

export default function RecommendedSection() {
    // Array of card data for mapping
    const recommendedItems = [
        {
            id: 1,
            image: "/8-Home/01.png",
            alt: "อาไก่นุ่มนุ่ม",
            title: "อกไก่นุ่มนุ่ม กระตุ้นยอดขาย",
            description: "โออิชิ อีทโตะ (OISHI EATO) เดินหน้าพัฒนานวัตกรรมสินค้า เพื่อตอบโจทย์ผู้บริโภคสายสุขภาพ ",
            badge: {
                text: "ใหม่ #1",
                color: "bg-[#FF3B30]"
            },
            logo: {
                src: "/oishi-logo.png",
                alt: "Oishi"
            },
            nextlink: "https://www.oishigroup.com/pressroom/358/%E0%B9%82%E0%B8%AD%E0%B8%AD%E0%B8%B4%E0%B8%8A%E0%B8%B4-%E0%B8%AD%E0%B8%B5%E0%B8%97%E0%B9%82%E0%B8%95%E0%B8%B0-%E0%B9%81%E0%B8%8B%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%21%21%21-%E0%B9%82%E0%B8%AD%E0%B8%AD%E0%B8%B4%E0%B8%8A%E0%B8%B4-%E0%B8%AD%E0%B8%B5%E0%B8%97%E0%B9%82%E0%B8%95%E0%B8%B0-%E0%B9%81%E0%B8%8B%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%9C%E0%B8%AA%E0%B8%A1%E0%B8%98%E0%B8%B1%E0%B8%8D%E0%B8%9E%E0%B8%B7%E0%B8%8A-%E0%B9%84%E0%B8%AA%E0%B9%89%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%8B%E0%B8%AD%E0%B8%AA%E0%B9%82%E0%B8%8A%E0%B8%A2%E0%B8%B8%E0%B8%A1%E0%B8%B2%E0%B9%82%E0%B8%A2%E0%B8%9C%E0%B8%AA%E0%B8%A1%E0%B9%80%E0%B8%A7%E0%B8%A2%E0%B9%8C-%E0%B8%AD%E0%B8%A3%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%82%E0%B8%A2%E0%B8%8A%E0%B8%99%E0%B9%8C"  // ลิงก์ที่อยากให้ไป
        },
        {
            id: 2,
            image: "/8-Home/02.png",
            alt: "คริสตัล",
            title: "คริสตัล - 6 ฉลากใหม่เพลงพิเศษ",
            description: "น้ำดื่มที่ให้คุณมากกว่าการแค่ได้ดื่มน้ำฉลากใหม่ ! 6 เพลงพิเศษ เสียงน้ำผสานกับเสียงดนตรี อิงจากหลักการดนตรีบำบัด",
            badge: {
                text: "ฉลากใหม่",
                color: "bg-[#00C2FF]"
            },
            nextlink: "https://www.facebook.com/photo.php?fbid=274541568663623&id=100083233455504&set=a.229806533137127"
        },
        {
            id: 3,
            image: "/8-Home/03.png",
            alt: "เอส",
            title: "เอส - โปรโมชั่นใหม่",
            description: "เอส ฉลองความสำเร็จแบบเหนือชั้นในการอัพเลเวลแบรนด์ครั้งสำคัญในรอบทศวรรษกับแคมเปญ est Cola Born to be Awesome",
            nextlink: "https://www.thaibev.com/news/detail/0d883c03c110906482c8c925d3b0e9dd"
        },
        // เพิ่มข้อมูลเพื่อทดสอบการเลื่อน
        {
            id: 4,
            image: "/8-Home/01.png", // ใช้รูปเดิมสำหรับตัวอย่าง
            alt: "ตัวอย่างเพิ่มเติม",
            title: "โปรโมชั่นพิเศษ",
            description: "ตัวอย่างบล็อกเพิ่มเติมเพื่อแสดงการเลื่อน",
            badge: {
                text: "พิเศษ",
                color: "bg-[#FF9500]"
            },
            nextlink: "#"
        }
    ];

    return (
        <section className="font-prompt py-4">
            <div className="max-w-[1200px] mx-auto px-4 pb-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg md:text-xl font-medium text-[#222]">คัดเพื่อคุณ</h2>
                    <a href="#" className="text-[#0070C0] text-sm md:text-base font-medium hover:underline">ดูทั้งหมด</a>
                </div>

                {/* Card List - ลบแถบเลื่อนด้วย scrollbar-hide และ -webkit-scrollbar */}
                <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                    <style jsx global>{`
                        .scrollbar-hide::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>

                    {recommendedItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.nextlink}
                            className="block bg-white rounded-lg shadow-[0_2px_8px_0_rgba(0,0,0,0.07)] w-[180px] min-w-[180px] md:w-[200px] md:min-w-[200px] flex-shrink-0 no-underline transform transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <div className="relative">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={320}
                                    height={160}
                                    className="rounded-t-lg w-full h-[70px] md:h-[80px] object-cover"
                                />

                                {item.badge && (
                                    <div className={`absolute top-2 left-2 ${item.badge.color} rounded-full px-2 py-0.5 flex items-center`}>
                                        <span className="text-white text-[10px] md:text-xs font-bold">{item.badge.text}</span>
                                    </div>
                                )}

                                {item.logo && (
                                    <div className="absolute top-2 right-2">
                                        <Image
                                            src={item.logo.src}
                                            alt={item.logo.alt}
                                            width={24}
                                            height={24}
                                            className="w-6 h-6 md:w-7 md:h-7"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="pt-2 px-3 pb-3">
                                <div className="text-sm font-semibold text-[#222] leading-tight mb-1 line-clamp-2">
                                    {item.title}
                                </div>
                                <div className="text-xs text-[#888] mb-2 line-clamp-2">
                                    {item.description}
                                </div>
                                <div className="flex items-center justify-end text-[#222] text-xs font-medium hover:underline">
                                    อ่านเพิ่มเติม
                                    <svg className="ml-1" width="18" height="18" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
  <path d="M7 18l6-6-6-6" />
  <path d="M13 18l6-6-6-6" />
</svg>

                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}