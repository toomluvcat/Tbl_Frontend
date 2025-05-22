'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // เพิ่ม useEffect เพื่อ log pathname เมื่อเปลี่ยน
  useEffect(() => {
    console.log("Pathname changed:", pathname);
  }, [pathname]);

  // เมนูสำหรับลูกค้า
  const customerNavs = [
    { name: "หน้าหลัก", href: "/customer/home" },
    { name: "แผนที่", href: "/customer/map" },
    { name: "คำสั่งซื้อ", href: "/customer/order" },
    { name: "รายงาน", href: "/statement" },
    {name:"ประวัติการสั่งซื้อ",href:"/customer/history"}
  ];

  // เมนูสำหรับคนขับ
  const driverNavs = [
    { name: "หน้าหลัก", href: "/driver/home" },
    { name: "จัดการรถ", href: "/driver/map" },
    { name: "เส้นทาง", href: "/driver/route" },
  ];

  // ฟังก์ชันเช็คว่า path ปัจจุบันตรงกับ nav item หรือไม่
  const isActive = (href) => {
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-6 left-4 z-40 bg-white rounded-full p-2.5 shadow-sm"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <IoMenu size={22} className="text-gray-800" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide Drawer */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-md
          transform transition-transform duration-200 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-5 flex justify-between items-center border-b">
            <h2 className="font-medium text-gray-800">เมนู</h2>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-1"
            >
              <IoClose size={22} className="text-gray-600" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 pt-2">
            {/* เมนูลูกค้า */}
            <div className="px-4 py-2">
              <h3 className="text-sm font-medium text-gray-500 mb-2">ลูกค้า</h3>
              <ul className="space-y-1">
                {customerNavs.map((nav) => (
                  <li key={nav.href}>
                    <Link
                      href={nav.href}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive(nav.href)
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* เมนูคนขับ */}
            <div className="px-4 py-2 border-t">
              <h3 className="text-sm font-medium text-gray-500 mb-2">คนขับ</h3>
              <ul className="space-y-1">
                {driverNavs.map((nav) => (
                  <li key={nav.href}>
                    <Link
                      href={nav.href}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive(nav.href)
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}