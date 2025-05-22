"use client";

import { useState, useEffect, useRef } from 'react';
import PDF from 'react-pdf-js';
import MobileNavbar from '@/components/mobilenavbar';
        

export default function PdfViewer() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);
  const [scale, setScale] = useState(1.0);
  const containerRef = useRef(null);

  useEffect(() => {
    // ฟังก์ชันปรับขนาดตามความกว้างของ container
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        // ลบขอบซ้ายและขวา (padding, margin) ประมาณ 40px
        const availableWidth = containerWidth - 40;
        // ปรับสเกลให้พอดีกับความกว้างที่มี (A4 มีความกว้างประมาณ 595px ที่ 72dpi)
        const newScale = availableWidth / 595;
        setScale(newScale);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentComplete = (numPages) => {
    setPages(numPages);
  };

  const handlePrevious = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const renderPagination = (page, pages) => {
    if (!pages) return null;
    
    return (
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevious}
          disabled={page <= 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          หน้า ⬅
        </button>

        <span className="text-gray-600 text-sm">
          หน้า {page} จาก {pages}
        </span>

        <button
          onClick={handleNext}
          disabled={page >= pages}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          ➡ หน้า
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <MobileNavbar />
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          ใบจัดส่งสินค้า
        </h1>
        
        <div 
          ref={containerRef}
          className="flex justify-center border rounded overflow-auto p-4"
        >
          {/* แสดง PDF โดยใช้ scale ที่คำนวณอัตโนมัติ */}
          <PDF
            file="/KFCDN25-0036222_1.pdf"
            onDocumentComplete={onDocumentComplete}
            page={page}
            scale={scale}
            className="shadow-md"
          />
        </div>
        
        {renderPagination(page, pages)}
      </div>
    </div>
  );
}