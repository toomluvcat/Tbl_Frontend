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

  const navs = [
    { name: "Home", href: "/customer/home" },
    { name: "Map", href: "/customer/map" },
    { name: "Order", href: "/customer/order" },
  ];

  // ฟังก์ชันเช็คว่า path ปัจจุบันตรงกับ nav item หรือไม่
  const isActive = (href) => {
    // ถ้าเป็นหน้า order ให้เช็คแค่ /customer/order
    if (href === "/customer/order") {
      return pathname === "/customer/order";
    }
    // หน้าอื่นๆ ให้เช็คด้วย startsWith
    return pathname.startsWith(href);
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
          <div className="p-5 flex justify-end">
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
            <ul className="space-y-1 px-3">
              {navs.map((nav) => (
                <li key={nav.href}>
                  <Link
                    href={nav.href}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive(nav.href)
                        ? "bg-gray-100 text-gray-900 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}