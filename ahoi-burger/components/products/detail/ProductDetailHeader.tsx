"use client";
import {useRouter} from "next/navigation";
import {ChevronLeft} from "lucide-react";

export default function ProductDetailHeader({name}: { name: string }) {

  const router = useRouter();

  return (<>
    <div className="flex items-center border-b p-4 border-gray-300">
      <div className="flex-1 text-left">
      <button
          onClick={() => router.back()}
          className="hover:text-[#02C2FF] transition"
      >
        <ChevronLeft /> Ahoi Burger!
      </button>
      </div>
      <div className="flex-1 text-center text-lg font-bold">{name}</div>
      <div className="flex-1"></div>
    </div>
  </>)
}