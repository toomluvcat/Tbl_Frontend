'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const customerNavs = [
    { name: "หน้าหลัก", href: "/customer/home" },
    { name: "แผนที่", href: "/customer/map" },
    { name: "คำสั่งซื้อ", href: "/customer/order" },
    { name: "รายงาน", href: "/statement" },
    { name: "ประวัติการสั่งซื้อ", href: "/customer/history" }
  ];
  const driverNavs = [
    { name: "หน้าหลัก", href: "/driver/home" },
    { name: "จัดการรถ", href: "/driver/map" },
    { name: "เส้นทาง", href: "/driver/route" },
  ];

  const isActive = (href) => pathname === href || pathname.startsWith(href);

  return (
    <>
      {/* Hamburger Button (เล็กเรียบ) */}
      <button
        className="fixed top-5 left-3 z-40 bg-white border border-gray-200 rounded px-3 py-2 shadow-none active:scale-95 transition"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <IoMenu size={20} className="text-gray-600" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/10 z-50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide Drawer */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-60 bg-white z-50
          transition-transform duration-200
          ${open ? "translate-x-0" : "-translate-x-full"}
          border-r border-gray-100
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header (เรียบ ๆ) */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <span className="text-base font-normal text-gray-700 tracking-tight">เมนู</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-1 rounded hover:bg-gray-100 transition"
            >
              <IoClose size={20} className="text-gray-500" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-3">
            {/* หมวดลูกค้า */}
            <div className="px-5">
              <h3 className="text-xs font-semibold text-gray-400 mb-1">ลูกค้า</h3>
              <ul>
                {customerNavs.map((nav) => (
                  <li key={nav.href}>
                    <Link
                      href={nav.href}
                      className={`block px-2 py-2 rounded transition-colors
                        ${isActive(nav.href)
                          ? "bg-gray-100 text-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                        }`}
                      onClick={() => setOpen(false)}
                    >
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* หมวดคนขับ */}
            <div className="px-5 mt-6">
              <h3 className="text-xs font-semibold text-gray-400 mb-1">คนขับ</h3>
              <ul>
                {driverNavs.map((nav) => (
                  <li key={nav.href}>
                    <Link
                      href={nav.href}
                      className={`block px-2 py-2 rounded transition-colors
                        ${isActive(nav.href)
                          ? "bg-gray-100 text-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
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
      </aside>
    </>
  );
}