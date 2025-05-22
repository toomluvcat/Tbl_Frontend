// app/page.js
import RecommendedSection from '@/components/recommededsection';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="font-prompt min-h-screen">
      <header className="p-5">
        <div>
          <div className="text-left text-center">
            <p className="text-gray-[#B3B3B3] text-center">เฮียซ้ง เจริญโภคภัณฑ์</p>
            <p className="text-blue-700 text-center">23 หมู่ 8 อำเภอเมืองขอนแก่น</p>
          </div>
        </div>
      </header>

      <div className="mx-auto mb-2 px-6">
        <Image src="/8-Home/a.png" width={500} height={100} alt="24H" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">หมวดหมูฟังก์ชั่น</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              href: "#",
              img: { src: "/8-Home/Group 581.png", width: 64, height: 60, alt: "สถานะสินค้า" },
              label: "สถานะสินค้า"
            },
            {
              href: "#",
              img: { src: "/8-Home/calendar_3d 1.png", width: 60, height: 60, alt: "รายการย้อนหลัง" },
              label: "รายการย้อนหลัง"
            },
            {
              href: "#",
              img: { src: "/8-Home/admission tickets_3d 1.png", width: 60, height: 60, alt: "โปรโมชั่น" },
              label: "โปรโมชั่น"
            },
            {
              href: "#",
              img: { src: "/8-Home/Group 582.png", width: 60, height: 60, alt: "แสกน" },
              label: "แสกน"
            },
            {
              href: "#",
              img: { src: "/8-Home/Group 583.png", width: 64, height: 60, alt: "ขอ statement" },
              label: "ขอ statement"
            },
            {
              href: "#",
              img: { src: "/8-Home/Group 584.png", width: 64, height: 60, alt: "รายงานปัญหา" },
              label: "รายงานปัญหา"
            }
          ].map((item, idx) => (
            <a href={item.href} className="text-center block flex flex-col items-center" key={idx}>
              <Image
                src={item.img.src}
                width={item.img.width}
                height={item.img.height}
                alt={item.img.alt}
                className="mx-auto mb-2"
              />
              <p className="text-base font-medium leading-tight">{item.label}</p>
            </a>
          ))}
          
        </div>
      </div>

      <div className="p-4 mb-6" >
        <h3 className="text-lg font-semibold mb-4">โปรโมชั่นร้อน</h3>
        <div className="flex gap-4">
          <div className="rounded-lg overflow-hidden transform  duration-500 aspect-[16/9]">
            <Image
              src="/8-Home/image 13.png"
              alt="โปรโมชั่นร้อน 1"
              width={600}
              height={338}
              className="w-full h-full "
            />
          </div>
          <div className="rounded-lg overflow-hidden duration-500 aspect-[16/9]">
            <Image
              src="/8-Home/image 15.png"
              alt="โปรโมชั่นร้อน 2"
              width={600}
              height={338}
              className="w-full h-full "
            />
          </div>
        </div>
      </div>

      <RecommendedSection  />

    </div>
  )
}