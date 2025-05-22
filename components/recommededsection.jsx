// app/components/RecommendedSection.jsx
import Image from "next/image";

export default function RecommendedSection() {
  // Array of card data for mapping
  const recommendedItems = [
    {
      id: 1,
      image: "/sample1.jpg",
      alt: "อาไก่นุ่มนุ่ม",
      title: "อกไก่นุ่มนุ่ม กระตุ้นยอดขาย",
      description: "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      badge: {
        text: "ใหม่ #1",
        color: "bg-[#FF3B30]"
      },
      logo: {
        src: "/oishi-logo.png",
        alt: "Oishi"
      }
    },
    {
      id: 2,
      image: "/sample2.jpg",
      alt: "คริสตัล",
      title: "คริสตัล - 6 ฉลากใหม่เพลงพิเศษ",
      description: "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum",
      badge: {
        text: "ฉลากใหม่",
        color: "bg-[#00C2FF]"
      }
    },
    {
      id: 3,
      image: "/sample3.jpg",
      alt: "เอส",
      title: "เอส - โปรโมชั่นใหม่",
      description: "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum"
    }
  ];

  return (
    <section className=" min-h-screen font-prompt">
      <div className="max-w-[1200px] mx-auto px-8 ">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[22px] font-semibold text-[#222]">คัดเพื่อคุณ</h2>
          <a href="#" className="text-[#0070C0] text-[17px] font-medium hover:underline">ดูทั้งหมด</a>
        </div>
        
        {/* Card List */}
        <div className="flex gap-6 overflow-x-auto pb-2">
          {/* Map through the recommendedItems array */}
          {recommendedItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-[0_2px_8px_0_rgba(0,0,0,0.07)] w-[320px] min-w-[320px] flex-shrink-0"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={320}
                  height={160}
                  className="rounded-t-2xl w-full h-[160px] object-cover"
                />
                
                {/* Conditional Badge */}
                {item.badge && (
                  <div className={`absolute top-3 left-3 ${item.badge.color} rounded-full px-3 py-1 flex items-center`}>
                    <span className="text-white text-xs font-bold">{item.badge.text}</span>
                  </div>
                )}
                
                {/* Conditional Logo */}
                {item.logo && (
                  <div className="absolute top-3 right-3">
                    <Image
                      src={item.logo.src}
                      alt={item.logo.alt}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="text-[17px] font-semibold text-[#222] leading-tight mb-1">
                  {item.title}
                </div>
                <div className="text-[14px] text-[#888] mb-4">
                  {item.description}
                </div>
                <a href="#" className="flex items-center text-[#222] text-[15px] font-medium hover:underline">
                  อ่านเพิ่มเติม
                  <svg className="ml-1" width="18" height="18" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}