'use client';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useRouter } from 'next/navigation';

export default function OrderHistoryPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [showDateFilter, setShowDateFilter] = useState(false);
  const dateFilterRef = useRef(null);

  const [orders, setOrders] = useState([
    { 
      orderId: "TBL5242-7", 
      status: "คาดว่าจะได้รับภายใน 7.14 ชั่วโมง", 
      actionLabel: "เช็คสถานะ", 
      actionClass: "bg-[#FFCFBF] text-black",
      statusType: "pending"
    },
    { 
      orderId: "TBL5454-8", 
      status: "ได้รับแล้ว 6 พ.ค. 2568", 
      actionLabel: "รายละเอียด", 
      actionClass: "bg-white border border-gray-300 text-black",
      statusType: "completed"
    },
    { 
      orderId: "TBL1445-1", 
      status: "ได้รับแล้ว 4 พ.ค. 2568", 
      actionLabel: "รายละเอียด", 
      actionClass: "bg-white border border-gray-300 text-black",
      statusType: "completed"
    },
    { 
      orderId: "TBL6879-6", 
      status: "ได้รับแล้ว 3 พ.ค. 2568", 
      actionLabel: "รายละเอียด", 
      actionClass: "bg-white border border-gray-300 text-black",
      statusType: "completed"
    },
  ]);

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.orderId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || order.statusType === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const onScanSuccess = (decodedText) => {
    setSearchTerm(decodedText);
    setShowQRScanner(false);

    const orderId = decodedText.trim();
    if (orderId.startsWith('http://') || orderId.startsWith('https://')) {
      // redirect ไป URL เต็ม
      window.location.href = orderId;
    } else if (orderId) {
      // redirect ไปหน้ารายละเอียดออเดอร์
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

  // ตัวเลือกสำหรับ dropdown
  const filterOptions = [
    { label: "ทั้งหมด", value: "all" },
    { label: "กำลังดำเนินการ", value: "pending" },
    { label: "เสร็จสิ้น", value: "completed" }
  ];

  // ปิด dropdown เมื่อคลิกนอก
  useEffect(() => {
    function handleClickOutside(event) {
      if (dateFilterRef.current && !dateFilterRef.current.contains(event.target)) {
        setShowDateFilter(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Head>
        <title>รายการย้อนหลัง</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google font Prompt */}
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <main className="bg-white min-h-screen" style={{ fontFamily: `'Prompt', sans-serif` }}>
        <div className="max-w-md mx-auto bg-white min-h-screen">
          {/* Header */}
          <header className="flex justify-center items-center py-4 px-6">
           
            <h1 className="text-xl ">รายการย้อนหลัง</h1>
            
          </header>

          {/* Search Bar */}
          <div className="px-4 mb-4">
            <div className="bg-gray-100 rounded-xl flex items-center">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="ค้นหาจากเลขออเดอร์"
                  className="w-full py-3 pl-12 pr-4 bg-transparent focus:outline-none text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '12px center',
                    backgroundSize: '20px',
                  }}
                />
              </div>
              <button 
                className="p-3 mr-1"
                onClick={() => setShowQRScanner(true)}
              >
                <Image src="/9-History/QR.svg" alt="สแกน QR Code" width={20} height={20} />
              </button>
            </div>
          </div>

          {/* QR Scanner Modal */}
          {showQRScanner && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg w-[90%] max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">สแกน QR Code</h3>
                  <button 
                    onClick={() => setShowQRScanner(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div id="qr-reader" className="w-full"></div>
              </div>
            </div>
          )}

          {/* Main Order Card - Pixel Perfect */}
        <Image src="/9-History/Frame 2.png" alt="รายการย้อนหลัง" className=' mx-auto' width={420} height={420}></Image>

          {/* Order History Section */}
          <div className="px-4 mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">ประวัติรายการ</h3>
              
              {/* Filter Dropdown */}
              <div className="relative" ref={dateFilterRef}>
                <button 
                  onClick={() => setShowDateFilter(!showDateFilter)}
                  className="flex items-center px-3 py-2 rounded-[9px] border border-gray-300 text-sm hover:bg-gray-50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {filterOptions.find(opt => opt.value === filterStatus)?.label || "ทั้งหมด"}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 ml-2 transition-transform ${showDateFilter ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {showDateFilter && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                    {filterOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setFilterStatus(option.value);
                          setShowDateFilter(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                          filterStatus === option.value 
                            ? 'bg-gray-50 text-[#FF725E] font-medium' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Render Filtered Order List */}
            {filteredOrders.map((order, index) => (
              <OrderItem
                key={index}
                orderId={order.orderId}
                status={order.status}
                actionLabel={order.actionLabel}
                actionClass={order.actionClass}
              />
            ))}
          </div>
          <div className="h-12"></div>
        </div>
      </main>
    </>
  );
}

// สร้าง sub-component สำหรับ Order Item
function OrderItem({ orderId, status, actionLabel, actionClass }) {
  return (
    <div className="flex items-center justify-between py-4 ">
      <div className="flex items-center">
        <div className="bg-[#f5f5f5] rounded-full flex items-center justify-center mr-4 w-14 h-14 flex-shrink-0">
        <Image src="/9-History/package_3d 1.png" alt="รายการย้อนหลัง" width={50} height={50} className='w-8 h-8'></Image>
        </div>
        <div>
          <p className="font-medium"># {orderId}</p>
          <p className="text-sm text-gray-500">{status}</p>
        </div>
      </div>
      <button className={`rounded-full px-4 py-2 text-sm ${actionClass}`}>{actionLabel}</button>
    </div>
  );
}