'use client';
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import MobileNavbar from "@/components/mobilenavbar";
import Link from "next/link";

const mapStyle = [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#005eb8" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#eef2f4" } ] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [ { "color": "#d1e9fe" } ] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [ { "color": "#ffffff" } ] } ];

export default function MapPage() {
  const mapRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false); // เริ่มต้นแบบย่อ

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
        center: { lat: 16.476, lng: 102.802 },
        zoom: 15,
        disableDefaultUI: true,
        styles: mapStyle,
      });
      new window.google.maps.Marker({
        position: { lat: 16.476, lng: 102.802 },
        map,
        title: 'Khon Kaen University',
      });
    }
  }, []);

  const expandedHeight = "min-h-[340px]";
  const collapsedHeight = "min-h-[60px] max-h-[60px]";

  return (
    <div className="relative w-full min-h-screen bg-white font-prompt overflow-hidden">
      <MobileNavbar />
      {/* Google Map */}
      <div
        ref={mapRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ minHeight: "100vh" }}
      />
      {/* Top Status Bar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-20 w-[92vw] max-w-sm">
        <div
          className="flex items-center bg-white rounded-2xl shadow px-4 py-2"
        >
          <img
            src="/2-Map/truck 1.png"
            alt="truck"
            className="w-6 h-6 rounded-full object-cover mr-2"
          />
          <div className="flex-1 min-w-0">
            <div className="font-normal text-[13px] truncate">หมายเลขทะเบียน กข 1234</div>
            <div className="text-xs text-gray-500 truncate">จำหน่ายสินค้าบริเวณอำเภออุบลรัตน์</div>
          </div>
          <div className="text-[#FF9000] font-medium text-xs whitespace-nowrap ml-1">
            จะถึงใน 15 นาที
          </div>
        </div>
      </div>
      {/* Bottom Sheet: ปรับขนาดเล็กลง */}
      <div
        className={`fixed left-0 right-0 bottom-0 z-30 transition-all duration-500 ease-in-out 
          ${isExpanded ? expandedHeight : collapsedHeight}`}
        style={{
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          boxShadow: "0 0 16px 0 rgba(0,0,0,0.07)",
          background: "#fff",
        }}
      >
        {/* Header (clickable area) */}
        <div className="cursor-pointer select-none" onClick={() => setIsExpanded((v) => !v)}>
          <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mt-2 mb-1" />
          <p className="text-center text-gray-300 text-xs mb-1">กดเพื่อแสดงหรือย่อข้อมูล</p>
          <p className="ml-4 font-medium text-base mb-0.5 tracking-tight">รถที่ปฏิบัติงาน</p>
        </div>
        {/* ข้อมูลคนขับ */}
        <div className="flex items-center gap-2 px-4 pb-1">
          <img
            src="/2-Map/Group 587.png"
            alt="avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="font-medium text-sm truncate">นางสาวส่ง ของไว</div>
            <div className="text-xs text-gray-400 truncate">ทะเบียน กข 123</div>
          </div>
          <a href="tel:027855555">
            <Image src="/2-Map/Group 585.png" alt="สถานที่" width={28} height={28} />
          </a>
        </div>
        {/* Content (เฉพาะตอนขยาย) */}
        <div
          className={`
            transition-all duration-500 ease-in-out overflow-hidden
            ${isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="px-4 pt-1 pb-3">
            {/* Delivery Status */}
            <div className="flex flex-col pt-2 gap-y-6" style={{ minHeight: "140px" }}>
              <div>
                <div className="font-normal text-base mb-1">สถานะการส่ง</div>
                <div className="flex flex-col gap-y-5 relative">
                  <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-blue-100 z-0" style={{ height: "calc(100% - 24px)" }} />
                  {/* Step */}
                  {[
                    { label: "พัสดุออกจากศูนย์ขอนแก่น", sub: "บรรจุสินค้า", time: "05.24 น.", done: true },
                    { label: "ร้านขายสินค้าประเวณอำเภอเมือง", sub: "ร้านขายสินค้า", time: "10.34 น.", done: true },
                    { label: "ร้านขายสินค้าประเวณอำเภออุบลรัตน์", sub: "ร้านขายสินค้า", time: "ตำแหน่งปัจจุบัน", done: true },
                    { label: "ร้านค้าของคุณ", sub: "ร้านขายสินค้า", time: "คาดว่า 18.30 น.", done: false },
                  ].map((step, i) => (
                    <div key={i} className={`flex items-start gap-2 relative z-10 ${i > 0 && "mt-0.5"}`}>
                      <div className="flex flex-col items-center min-w-[24px]">
                        <div className={`w-3 h-3 ${step.done ? "bg-blue-500" : "bg-gray-300"} rounded-full border-2 border-white shadow`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          <div className={`font-normal text-[13px] ${!step.done ? "text-gray-400" : "text-black"}`}>{step.label}</div>
                          <div className={`ml-auto text-xs font-normal ${!step.done ? "text-gray-400" : "text-gray-400"}`}>{step.time}</div>
                        </div>
                        <div className="text-xs text-gray-400">{step.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Spacer for bottom button */}
              <div className="h-1" />
            </div>
            {/* ปุ่ม */}
            <Link href="/customer/order">
              <button className="w-full mt-3 rounded-xl bg-[#0066B1] text-white py-2 font-medium text-base" type="button">
                รายการสั่งซื้อ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}