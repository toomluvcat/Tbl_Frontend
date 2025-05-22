// app/page.js
"use client"
import MobileNavbar from '@/components/mobilenavbar';
import RecommendedSection from '@/components/recommededsection';
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Html5QrcodeScanner } from 'html5-qrcode';

export default function Home() {
  const router = useRouter();
  const promoScrollRef = useRef(null);
  const [showQRScanner, setShowQRScanner] = useState(false);

  const onScanSuccess = (decodedText) => {
    setShowQRScanner(false);
    const orderId = decodedText.trim();
    if (orderId.startsWith('http://') || orderId.startsWith('https://')) {
      window.location.href = orderId;
    } else if (orderId) {
      router.push(`/customer/order/${orderId}`);
    }
  };

  const onScanFailure = (error) => {
    console.warn(`QR Code scan failed: ${error}`);
  };

  useEffect(() => {
    let scanner = null;
    
    if (showQRScanner) {
      scanner = new Html5QrcodeScanner(
        "qr-reader",
        { 
          fps: 10,
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1.0
        },
        false
      );
      
      scanner.render(onScanSuccess, onScanFailure);
    }

    return () => {
      if (scanner) {
        scanner.clear().catch(error => {
          console.error("Failed to clear scanner", error);
        });
      }
    };
  }, [showQRScanner]);

  return (
    <div className="font-prompt min-h-screen">
      {/* Header */}
      <header className="p-4 md:p-5 bg-white">
        <MobileNavbar />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p className="text-[#B3B3B3] text-sm md:text-base">เฮียซ้ง เจริญโภคภัณฑ์</p>
            <p className="text-blue-700 text-sm md:text-base font-medium flex items-center">
              23 หมู่ 8 อำเภอเมืองขอนแก่น
            </p>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="mx-auto mb-6 px-4 md:px-6 lg:px-8 max-w-7xl pt-4">
        <div className="relative rounded-xl overflow-hidden">
          <Image 
            src="/8-Home/a.png" 
            width={1200} 
            height={300} 
            alt="Hero Banner" 
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        </div>
      </div>

      {/* Function Categories */}
      <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
        <h3 className="text-lg md:text-xl font-medium mb-4 md:mb-6">หมวดหมูฟังก์ชั่น</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
          {[
            {
              href: "/customer/map",
              img: { src: "/8-Home/Group 581.png", width: 64, height: 60, alt: "สถานะสินค้า" },
              label: "สถานะสินค้า"
            },
            {
              href: "/customer/history",
              img: { src: "/8-Home/calendar_3d 1.png", width: 60, height: 60, alt: "รายการย้อนหลัง" },
              label: "รายการย้อนหลัง"
            },
            {
              href: "https://www.shopteenee.com/marketplace/seller/collection/shop/home-office-delivery/",
              img: { src: "/8-Home/admission tickets_3d 1.png", width: 60, height: 60, alt: "โปรโมชั่น" },
              label: "โปรโมชั่น"
            },
            {
              href: "#",
              img: { src: "/8-Home/Group 582.png", width: 60, height: 60, alt: "แสกน" },
              label: "แสกน",
              onClick: () => setShowQRScanner(true)
            },
            {
              href: "/statement",
              img: { src: "/8-Home/Group 583.png", width: 64, height: 60, alt: "ขอ statement" },
              label: "ขอ statement"
            },
            {
              href: "#",
              img: { src: "/8-Home/Group 584.png", width: 64, height: 60, alt: "รายงานปัญหา" },
              label: "รายงานปัญหา"
            }
          ].map((item, idx) => (
            <a 
              href={item.href} 
              className="text-center block flex flex-col items-center p-2 md:p-3 rounded-lg hover:bg-blue-50 transition duration-300"
              key={idx}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                }
              }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-2 md:mb-3">
                <Image
                  src={item.img.src}
                  width={item.img.width}
                  height={item.img.height}
                  alt={item.img.alt}
                  className="w-full h-auto max-h-full object-contain"
                />
              </div>
              <p className="text-xs md:text-sm lg:text-base font-medium leading-tight">{item.label}</p>
            </a>
          ))}
        </div>
      </div>

      {/* QR Scanner Modal */}
      {showQRScanner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">สแกน QR Code</h3>
              <button 
                onClick={() => setShowQRScanner(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div id="qr-reader" className="w-full"></div>
          </div>
        </div>
      )}

      {/* Hot Promotions */}
      <div className="p-4 md:p-6 lg:p-8 mb-2 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-medium">โปรโมชั่นร้อน</h3>
        </div>
        
        <div 
          ref={promoScrollRef}
          className="flex overflow-x-auto gap-2 pb-4" 
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <style jsx global>{`
            div[data-promo-scroll]::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          <div className="rounded-lg overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]" data-promo-scroll>
            <Image
              src="/8-Home/image 13.png"
              alt="โปรโมชั่นร้อน 1"
              width={600}
              height={338}
              className="w-60 h-auto object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]" data-promo-scroll>
            <Image
              src="/8-Home/image 15.png"
              alt="โปรโมชั่นร้อน 2"
              width={600}
              height={338}
              className="w-60 h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <RecommendedSection />

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-50 md:p-4"
        aria-label="กลับขึ้นด้านบน"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}