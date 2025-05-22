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

// ข้อมูลตำแหน่งจริงของสถานที่ต่างๆ
const LOCATIONS = {
    "ป่าแดง": { lat: 16.4719, lng: 102.8260 },
    "ตลาดต้นตาล": { lat: 16.4320, lng: 102.8280 },
    "บิ๊กซี ขอนแก่น": { lat: 16.4420, lng: 102.8350 },
    "โลตัส มข.": { lat: 16.4650, lng: 102.8150 },
    "เซเว่น ป่าแดง": { lat: 16.4750, lng: 102.8200 },
    "ตลาดต้นตาล": { lat: 16.4300, lng: 102.8300 },
    "เซเว่น มข.": { lat: 16.4680, lng: 102.8180 },
    "ร้านเฮียต่อ": { lat: 16.4580, lng: 102.8220 }
};

// เพิ่ม array drivers ให้ตรงกับลำดับ trucks
const drivers = [
    {
        avatar: "/2-Map/Group 587.png",
        name: "นางสาวส่ง ของไว",
        location: "ถนนหมายเลข 1254 มีนบุรี",
        phone: "027855555",
    },
    {
        avatar: "/11-Driver/1.png",
        name: "นายขับไว ใจดี",
        location: "ถนนมิตรภาพ 1234 ขอนแก่น",
        phone: "027855555",
    },
    {
        avatar: "/11-Driver/2.png",
        name: "นายขยัน ขนส่ง",
        location: "ถนนประชาราษฎร์ 5678 อุดร",
        phone: "027855555",
    },
    {
        avatar: "/11-Driver/3.png",
        name: "นายเร็ว แรงดี",
        location: "ถนนรามอินทรา 9999 กรุงเทพ",
        phone: "027855555",
    },
];

export default function MapPage() {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const markersRef = useRef([]);
    const directionsRenderer = useRef(null);
    const directionsService = useRef(null);
    
    const [isExpanded, setIsExpanded] = useState(true);
    const [selected, setSelected] = useState(0); // default รถคันแรก

    // สุ่มข้อมูลปลายทาง ระยะทาง เวลา
    const DESTINATIONS = [
        "เซเว่น ป่าแดง", "ตลาดต้นตาล", "บิ๊กซี ขอนแก่น", "โลตัส มข.", "เซเว่น มข.", "ร้านเฮียต่อ"
    ];
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function getRandomFloat(min, max, decimals = 1) {
        return (Math.random() * (max - min) + min).toFixed(decimals);
    }
    
    const trucks = [
        { id: "พฒ 8717", icon: "/11-Driver/delivery truck_3d 3.png", origin: "ป่าแดง" },
        { id: "ฐต 9984", icon: "/11-Driver/articulated lorry_3d 2.png", origin: "ตลาดต้นตาล" },
        { id: "ศส 4421", icon: "/11-Driver/delivery truck_3d 3.png", origin: "บิ๊กซี ขอนแก่น" },
        { id: "ชธ 6934", icon: "/11-Driver/delivery truck_3d 3.png", origin: "โลตัส มข." },
    ].map(truck => ({
        ...truck,
        destination: DESTINATIONS[getRandomInt(0, DESTINATIONS.length - 1)],
        distance: getRandomFloat(8, 25, 1),
        time: getRandomInt(12, 45),
    }));

    // ฟังก์ชันล้าง markers และ routes เดิม
    const clearMapElements = () => {
        // ล้าง markers เดิม
        markersRef.current.forEach(marker => marker.setMap(null));
        markersRef.current = [];
        
        // ล้าง route เดิม
        if (directionsRenderer.current) {
            directionsRenderer.current.setMap(null);
        }
    };

    // ฟังก์ชันแสดง route ระหว่างต้นทางและปลายทาง
    const showRoute = (originKey, destinationKey) => {
        if (!mapInstance.current || !directionsService.current) return;

        const origin = LOCATIONS[originKey];
        const destination = LOCATIONS[destinationKey];
        
        if (!origin || !destination) return;

        // ล้าง elements เดิม
        clearMapElements();

        // เลื่อนแผนที่ไปที่ต้นทางทันที
        mapInstance.current.setCenter(origin);
        mapInstance.current.setZoom(15);

        // สร้าง DirectionsRenderer ใหม่
        directionsRenderer.current = new window.google.maps.DirectionsRenderer({
            map: mapInstance.current,
            suppressMarkers: true,
            polylineOptions: {
                strokeColor: '#005eb8',
                strokeWeight: 4,
                strokeOpacity: 0.8
            }
        });

        // สร้าง custom markers แบบโมเดิร์น
        const originMarker = new window.google.maps.Marker({
            position: origin,
            map: mapInstance.current,
            title: `ต้นทาง: ${originKey}`,
            icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                fillColor: '#10B981',
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 3,
                scale: 12
            }
        });

        const destinationMarker = new window.google.maps.Marker({
            position: destination,
            map: mapInstance.current,
            title: `ปลายทาง: ${destinationKey}`,
            icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                fillColor: '#EF4444',
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 3,
                scale: 12
            }
        });

        markersRef.current.push(originMarker, destinationMarker);

        // สร้าง route
        const request = {
            origin: origin,
            destination: destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
        };

        directionsService.current.route(request, (result, status) => {
            if (status === 'OK') {
                directionsRenderer.current.setDirections(result);
            } else {
                console.error('Directions request failed due to ' + status);
            }
        });
    };

    // Load Google Map
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
            
            mapInstance.current = new window.google.maps.Map(mapRef.current, {
                center: { lat: 16.476, lng: 102.802 }, // Khon Kaen University
                zoom: 30,
                disableDefaultUI: true,
                styles: mapStyle,
            });

            // สร้าง DirectionsService
            directionsService.current = new window.google.maps.DirectionsService();
            
            // แสดง route ของรถคันแรกทันที
            if (trucks.length > 0) {
                showRoute(trucks[0].origin, trucks[0].destination);
            }
        }
    }, []);

    // เมื่อเปลี่ยนรถที่เลือก ให้แสดง route ใหม่
    useEffect(() => {
        if (mapInstance.current && trucks[selected]) {
            showRoute(trucks[selected].origin, trucks[selected].destination);
        }
    }, [selected]);

    const handleTruckSelect = (idx) => {
        setSelected(idx);
    };

    const expandedHeight = "min-h-[420px]"; // Adjust based on content
    const collapsedHeight = "min-h-[150px] max-h-[150px]";

    return (
        <div className="relative w-full min-h-screen bg-white font-prompt overflow-hidden">
            <MobileNavbar />
            {/* Google Map: absolute full screen */}
            <div
                ref={mapRef}
                className="absolute inset-0 w-full h-full z-0"
                style={{ minHeight: "100vh" }}
            />

            {/* Bottom Sheet: fixed, z-30 */}
            <div
                className={`
          fixed left-0 right-0 bottom-0 z-30
          transition-all duration-500 ease-in-out
          ${isExpanded ? expandedHeight : collapsedHeight}
        `}
                style={{
                    background: "#fff",
                }}
            >
                {/* Header (clickable area) */}
                <div className="cursor-pointer select-none p-4">
                    <div onClick={() => setIsExpanded((v) => !v)}>
                        <div className="w-20 h-2 bg-gray-200 rounded-full mx-auto mt-2 mb-3" />
                        <p className="text-center text-gray-300 text-sm mt-2 mb-2">กดที่นี่เพื่อแสดงแผนที่</p>
                        <p className="ml-6 font-medium text-[18px]">รถที่กำลังปฏิบัติงาน</p>
                    </div>
                    <div className="space-y-2">
                        {trucks.map((truck, idx) => (
                            <div
                                key={truck.id}
                                className={`flex px-6 items-center justify-between px-4 py-3 bg-white rounded-xl my-2 ${idx !== trucks.length - 1 ? "mb-2" : ""} ${selected === idx ? "ring-2 ring-blue-400" : ""}`}
                                onClick={() => handleTruckSelect(idx)}
                                style={{ cursor: "pointer", transition: "box-shadow 0.2s" }}
                            >
                                {/* Left: icon + info */}
                                <div className="flex items-center gap-3 min-w-0">
                                    <img src={truck.icon} alt="truck" className="w-12 h-12" />
                                    <div>
                                        <div className="mb-[8px] text-[18px] text-[#222] leading-tight">
                                            ทะเบียน {truck.id}
                                        </div>
                                        <div className="text-[12px] ml-1 text-[#888] leading-tight">
                                            ต้นทาง: {truck.origin}
                                        </div>
                                        <div className="text-[12px] ml-1 text-[#888] leading-tight">
                                            ปลายทาง: {truck.destination}
                                        </div>
                                    </div>
                                </div>
                                {/* Right: distance/time */}
                                <div className="flex flex-col items-end min-w-[110px]">
                                    <div className="text-[10px] text-[#888]">รวมระยะทาง {truck.distance} กม.</div>
                                    <div className="text-[10px] text-[#888]">ใช้เวลา {truck.time} นาที</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* คนขับ (เปลี่ยนตาม selected) */}
                    <div className="flex items-center gap-3 border-t py-4 border-gray-200 px-4 pb-2">
                        <img
                            src={drivers[selected].avatar}
                            alt="avatar"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                            <div className="font-medium text-base">{drivers[selected].name}</div>
                            <div className="text-xs text-gray-500">{drivers[selected].location}</div>
                        </div>
                        <a href={`tel:${drivers[selected].phone}`}>
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
                    </div>
                </div>
            </div>
        </div>
    );
}