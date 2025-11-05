import Image from "next/image";
import Link from "next/link";

interface ProductCardProperties {
  name?: string,
  img?: string;
}

export default function ProductCardSmall<T>({product}: { product: ProductCardProperties }) {

  //Fallbacks if any Information is missing
  const imgSrc = product.img ?? "/placeholder.jpeg";
  const altText = product.name ?? "Product Image";
  const name = product.name ?? "Product"

  //Slug for Calling the Detail Page
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (<>
    <Link href={`/product/${slug}`}>
      <div className="flex flex-col group">
        <div className="h-25 sm:h-40 relative rounded-2xl overflow-hidden min-w-[120px] min-h-[120px]">
          <Image
              src={imgSrc}
              alt={altText}
              width={400}
              height={400}
              className={`h-full w-full object-cover group-hover:scale-125 transition duration-300 ease-in-out`}
          />
        </div>
        <div className="flex py-2 justify-between">
        <span className={`text-xs sm:text-sm font-semibold`}>
          {name}
        </span>
        </div>
      </div>
    </Link>
  </>)
}