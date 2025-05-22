'use client';
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import MobileNavbar from "@/components/mobilenavbar";

const mapStyle = [
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#005eb8"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
      {
        "color": "#eef2f4"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#d1e9fe"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  }
];

export default function MapPage() {
  const mapRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(true);

  // โหลด Google Map
  useEffect(() => {
    if (window.google && window.google.maps) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBz4tJlygPDZeTb6_pPnt5IhdPuJcURPl8&libraries=places&callback=initMap`;
      script.async = true;
      window.initMap = initMap;
      document.body.appendChild(script);
    }
    function initMap() {
      if (!mapRef.current) return;
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 16.476, lng: 102.802 }, // Khon Kaen University
        zoom: 15,
        disableDefaultUI: true,
        styles: mapStyle,
      });
      // เพิ่ม marker ตัวอย่าง
      new window.google.maps.Marker({
        position: { lat: 16.476, lng: 102.802 },
        map,
        title: 'Khon Kaen University',
      });
    }
  }, []);

  // ความสูงของ bottom sheet
  const expandedHeight = "min-h-[420px]"; // ปรับตามเนื้อหา
  const collapsedHeight = "min-h-[150px] max-h-[150px]";

  return (
    <div className="relative w-full min-h-screen bg-white font-prompt overflow-hidden">
      <MobileNavbar />
      {/* Google Map: absolute เต็มจอ */}
      <div
        ref={mapRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ minHeight: "100vh" }}
      />

      {/* Top Status Bar: fixed, z-20 */}
      <div className="fixed top-10 left-1/2 -translate-x-1/2 z-20 w-[90vw] max-w-md">
        <div
          className="flex items-center bg-white rounded-3xl shadow px-8"
          style={{ paddingTop: 15, paddingBottom: 15 }}
        >
          <img
            src="/2-Map/truck 1.png"
            alt="truck"
            className="w-8 h-8 rounded-full object-cover mr-2"
          />
          <div className="flex-1 min-w-0">
            <div className="font-normal text-[16px] truncate">หมายเลขทะเบียน กข 1234</div>
            <div className="text-[10px] text-gray-500 truncate">จำหน่ายสินค้าบริเวณอำเภออุบลรัตน์</div>
          </div>
          <div className="text-[#FF9000] font-medium text-[13px] whitespace-nowrap ml-2">
            จะถึงภายใน 15 นาที
          </div>
        </div>
      </div>

      {/* Bottom Sheet: fixed, z-30 */}
      <div
        className={`
          fixed left-0 right-0 bottom-0 z-30
          transition-all duration-500 ease-in-out
          ${isExpanded ? expandedHeight : collapsedHeight}
        `}
        style={{
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
          boxShadow: "0 0 24px 0 rgba(0,0,0,0.08)",
          background: "#fff",
        }}
      >
        {/* Header (clickable area) */}
        <div
          className="cursor-pointer select-none"
          onClick={() => setIsExpanded((v) => !v)}
        >
          <div className="w-20 h-2 bg-gray-200 rounded-full mx-auto mt-2 mb-3" />
          <p className="text-center text-gray-300 text-sm mt-2 mb-2">กดที่นี่เพื่อแสดงแผนที่</p>
          <div className="flex items-center gap-3 px-8 pb-2">
            <img
              src="/2-Map/Group 587.png"
              alt="avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="font-medium text-base">นางสาวส่ง ของไว</div>
              <div className="text-xs text-gray-500">หมายเลขทะเบียน กข 123</div>
            </div>
            <a href="tel:027855555">
              <Image src="/2-Map/Group 585.png" alt="สถานที่" width={40} height={40} />
            </a>
          </div>
        </div>

        {/* Content (show only when expanded) */}
        <div
          className={`
            transition-all duration-500 ease-in-out overflow-hidden
            ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="px-8 pt-2 pb-4">
            {/* Delivery Status */}
            <div className="mt-4 flex flex-col flex-1 justify-between" style={{ minHeight: "260px" }}>
              <div>
                <div className="font-normal text-[18px] mb-2">Delivery Status</div>
                <div className="flex flex-col gap-y-10 relative">
                  {/* Vertical line */}
                  <div
                    className="absolute left-4 top-4 bottom-4 w-0.5 bg-blue-200 z-0"
                    style={{ height: "calc(100% - 32px)" }}
                  />
                  {/* Step 1 */}
                  <div className="flex items-start gap-3 relative z-10">
                    <div className="flex flex-col items-center min-w-[32px]">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="font-normal text-black text-[16px]">พัสดุออกจากศูนย์ขอนแก่น</div>
                        <div className="ml-auto text-gray-400 text-sm font-normal">05.24 น.</div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1 font-normal">บรรจุสินค้า</div>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="flex items-start gap-3 relative z-10 mt-2">
                    <div className="flex flex-col items-center min-w-[32px]">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="font-normal text-black text-[16px]">ร้านขายสินค้าประเวณอำเภอเมือง</div>
                        <div className="ml-auto text-gray-400 text-sm font-normal">10.34 น.</div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1 font-normal">ร้านขายสินค้า</div>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="flex items-start gap-3 relative z-10 mt-2">
                    <div className="flex flex-col items-center min-w-[32px]">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="font-normal text-black text-[16px]">ร้านขายสินค้าประเวณอำเภออุบลรัตน์</div>
                        <div className="ml-auto text-sm font-normal">กำลังดำเนินการ</div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1 font-normal">ร้านขายสินค้า</div>
                    </div>
                  </div>
                  {/* Step 4 */}
                  <div className="flex items-start gap-3 relative z-10 mt-2">
                    <div className="flex flex-col items-center min-w-[32px]">
                      <div className="w-4 h-4 bg-gray-300 rounded-full border-4 border-white shadow" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <div className="font-normal text-gray-400 text-[16px]">ร้านค้าของคุณ</div>
                        <div className="ml-auto text-gray-400 text-sm font-normal">คาดว่าจะถึง 18.30 น.</div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1 font-normal">ร้านขายสินค้า</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Spacer for bottom button */}
              <div className="h-6" />
            </div>
            {/* ปุ่ม */}
            <button className="w-full mt-6 rounded-[30px] bg-[#0066B1] text-white  py-3 font-semibold text-lg">
              รายการสั่งซื้อ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}