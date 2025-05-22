import Link from "next/link";
import Image from "next/image";

export default function RoleSelect() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 font-prompt">
      <h1 className="text-2xl font-bold mb-8">เลือกบทบาทของคุณ</h1>
      <div className="flex gap-8">
        <Link href="/driver/home" className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 hover:bg-blue-50 transition">
          <Image src="/customer.svg" width={80} height={80} alt="Driver" />
          <span className="mt-4 text-lg font-medium text-blue-700">พขร.</span>
        </Link>
        <Link href="/customer/home" className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 hover:bg-green-50 transition">
          <Image src="/customer.svg" width={80} height={80} alt="Customer" />
          <span className="mt-4 text-lg font-medium text-blue-400">ลูกค้า</span>
        </Link>
      </div>
    </div>
  );
}
