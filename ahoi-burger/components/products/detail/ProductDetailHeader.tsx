"use client";
import {useRouter} from "next/navigation";

export default function ProductDetailHeader({name} : {name:string}) {

  const router = useRouter();

  return (<>
    <button
        onClick={() => router.back()}
        className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
    >
      ← Back
    </button>
    {name}
  </>)
}