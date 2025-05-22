'use client';
import Link from "next/link";
import Image from 'next/image';
import React from 'react';
import MobileNavbar from "@/components/mobilenavbar";
export default function HomePage() {
  // ตัวอย่างฟังก์ชันที่จำเป็น
  const handleMenuClick = (id) => {
    // TODO: handle menu click
    console.log('Menu clicked:', id);
  };

  return (
    <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto min-h-screen p-4 font-prompt bg-white">
         <MobileNavbar />
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <div className="flex-1 flex flex-col items-center">
          <span className="text-xs text-gray-400">เฮียซ้ง เจริญโภคภัณฑ์</span>
          <div className="flex items-center mt-1">
   
            <span className="ml-1 text-xs text-blue-600 font-bold">23 หมู่ 8 อำเภอเมืองขอนแก่น</span>
          </div>
        </div>
        <button className="relative">
        <Image src="/8-Home/Group 602.png" alt="สถานที่" width={40} height={40} />
        </button>
      </header>

      {/* Hero Banner */}
      <div className="w-full mb-6 flex flex-col items-center">
        {/* <Image src="/your-banner.png" alt="banner" width={320} height={100} /> */}
        <div className="w-full">
          <Image
            src="/8-Home/a.png"
            alt="banner"
            width={720}
            height={160}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* หมวดหมู่ผู้ใช้งาน */}
      <div>
        <div className="font-medium mb-2">หมวดหมู่ผู้ใช้งาน</div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
          {[
            { id: 1, title: 'สถานะสินค้า', img: '/8-Home/Group 581.png', alt: 'สถานะสินค้า' ,link:'/customer/map'},
            { id: 2, title: 'โปรโมชั่น', img: '/8-Home/calendar_3d 1.png', alt: 'โปรโมชั่น' ,link:'/customer/promotion'     },
            { id: 3, title: 'รายการย้อนหลัง', img: '/8-Home/admission tickets_3d 1.png', alt: 'รายการย้อนหลัง' ,link:'/customer/history'},
            { id: 4, title: 'แสกน QR', img: '/8-Home/Group 582.png', alt: 'ภาพรวม' ,link:'/customer/summary'},
            { id: 5, title: 'ขอ statement', img: '/8-Home/Group 583.png', alt: 'ขอ statement' ,link:'/customer/statement'},
            { id: 6, title: 'รายงานปัญหา', img: '/8-Home/Group 584.png', alt: 'รายงานปัญหา' ,link:'/customer/report'},
          ].map((item) => (
            <Link
            href={item.link}
              key={item.id}
              className="flex flex-col items-center p-3 hover:bg-blue-50 transition-colors h-32 justify-between"
              onClick={() => handleMenuClick(item.id)}
              style={{ minHeight: '8rem' }}
            >
              <span className="">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </span>
              <span className="text-xs font-prompt text-center leading-tight mt-2">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* โปรโมชั่นร้อน */}
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-4">โปรโมชั่นร้อน</h2>
        <div
          className="flex flex-row gap-4 overflow-x-auto pb-2 -mx-4 px-4"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {[
            { id: 1, img: "/8-Home/image 13.png", alt: "โปรโมชั่น 1" },
            { id: 2, img: "/8-Home/image 15.png", alt: "โปรโมชั่น 2" },
          ].map((item) => (
            <div
              key={item.id}
              className="w-[260px]"
              style={{ minWidth: 220, maxWidth: 320 }}
            >
              <div className="mb-3">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={320}
                  height={120}
                  className="object-cover w-full h-[120px] rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* คัดเพื่อคุณ */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">คัดเพื่อคุณ</h2>
          <button className="text-blue-400 text-xs">ดูทั้งหมด</button>
        </div>
        {(() => {
          // เพิ่ม zoom ระดับต่างๆ ต่อรูป
          const products = [
            {
              id: 1,
              img: "/8-Home/01.png",
              alt: "อกไก่นุ๊มมนุ่ม กระตุ้นยอดขาย",
              title: "อกไก่นุ๊มมนุ่ม กระตุ้นยอดขาย",
              zoom: 1.15,
              desc: "ขอเสนอของอร่อยสำหรับคนรักสุขภาพ พร้อมแนะนำ โออิชิ อีทโตะ ชูคุณประโยชน์ของขนมปังแซนด์วิช...",
              href: "https://mgronline.com/business/detail/9630000082249",
            },
            {
              id: 2,
              img: "/8-Home/02.png",
              alt: "คริสตัล - 6 ฉลากใหม่เพลงพิเศษ ",
              title: "คริสตัล - 6 ฉลากใหม่เพลงพิเศษ",
              zoom: 1.25,
              desc: "ผู้นำตลาดน้ำดื่มด้วยยอดขายอันดับ 1 ของไทย เดินหน้าขับเคลื่อนการดำเนินงานด้านความยั่งยืน...",
              href: "https://www.thaibev.com/news/detail/ec4503e38bf6a11d943246e95a3a2e0e",
            },
            {
              id: 3,
              img: "/8-Home/03.png",
              alt: "คริสตัล - 6 ลิตรใหม่เพื่อขอนแก่น",
              title: "เอส ฉลองความสำเร็จแคมเปญ",
              zoom: 1.25,
              desc: "est Cola เดินหน้าต่อยอดความแรง ชูกลยุทธ์มิวสิคมาร์เก็ตติ้ง...",
              href: "https://www.thaibev.com/news/detail/0d883c03c110906482c8c925d3b0e9dd",
            },
          ];
          return (
            <div
              className="flex flex-row gap-4 overflow-x-auto pb-2 -mx-4 px-4"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
                .product-card {
                  transition: box-shadow 0.2s;
                }
                .product-card:hover {
                  box-shadow: 0 4px 16px 0 rgba(0,0,0,0.14);
                }
                .zoom-img {
                  transition: transform 0.3s cubic-bezier(.4,0,.2,1);
                }
                .product-card:hover .zoom-img {
                  transform: scale(1.35) !important;
                }
              `}</style>
              {products.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="product-card bg-white shadow-md rounded-2xl overflow-hidden flex flex-col h-full border border-gray-100"
                  style={{
                    boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
                    minWidth: 240,
                    maxWidth: 240,
                    flex: "0 0 260px",
                    cursor: "pointer"
                  }}
                  tabIndex={0}
                >
                  <div
                    className="w-full aspect-[2.2/1] relative overflow-hidden"
                    style={{
                      borderTopLeftRadius: "1rem",
                      borderTopRightRadius: "1rem",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      className="zoom-img object-cover w-full h-full"
                      style={{
                        transform: `scale(${item.zoom})`,
                        borderTopLeftRadius: "1rem",
                        borderTopRightRadius: "1rem",
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                      }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="mb-1 text-base font-semibold text-black">{item.title}</div>
                    <div className="mb-4 text-gray-400 text-[14px] leading-snug">{item.desc}</div>
                    <div className="flex justify-end mt-auto">
                      <span className="text-black text-sm font-medium flex items-center gap-1 hover:underline">
                        อ่านเพิ่มเติม
                        <span className="ml-1 text-lg">›</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          );
        })()}
      </section>

    </div>
  );
}