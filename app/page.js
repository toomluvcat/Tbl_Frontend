import Link from "next/link";
import Image from "next/image";

export default function RoleSelect() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white font-prompt px-4">
      <div className=" flex flex-col justify-center items-center ">
        <h1 className="text-2xl font-bold mb-10 text-[#222]">เลือกบทบาทของคุณ</h1>
        <div className="flex gap-8 mb-10">
          <Link href="/driver/home" className="flex flex-col items-center group">
            <div className="w-28 h-28 rounded-full bg-[#F5F7FA] flex items-center justify-center transition-transform group-hover:scale-105">
              <Image src="/customer.svg" width={80} height={80} alt="Driver" />
            </div>
            <span className="mt-4 text-lg font-medium text-[#0070C0] group-hover:underline">พขร.</span>
          </Link>
          <Link href="/customer/home" className="flex flex-col items-center group">
            <div className="w-28 h-28 rounded-full bg-[#F5F7FA] flex items-center justify-center transition-transform group-hover:scale-105">
              <Image src="/shopping.svg" width={800} height={800} alt="Customer" />
            </div>
            <span className="mt-4 text-lg font-medium text-[#22B573] group-hover:underline">ลูกค้า</span>
          </Link>
        </div>
      </div>
      <div className="mb-2">
        <Image src="/logo.png" width={200} height={200} alt="logo" className="opacity-80" />
      </div>
    </div>
  );
}
