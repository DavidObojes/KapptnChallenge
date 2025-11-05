import Image from "next/image";
import Link from "next/link";

interface ProductCardProperties {
  name?: string,
  price?: number
  price_usd?: number,
  weight_grams?: number,
  img?: string;
  info?: {
    img?: string
    in_stock?: boolean
  };
}

export default function ProductCardLarge<T>({product}: { product: ProductCardProperties }) {

  //Fallbacks if any information is missing
  const imgSrc = product.info?.img ?? product.img ?? "/placeholder.png";
  const altText = product.name ?? "Product Image";
  const name = product.name ?? "Product"
  const price = product.price ?? product.price_usd ?? "On Request"
  const inStock = product.info?.in_stock ?? false;

  //Slug for Calling the Detail Page
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (<>
    <Link
        href={`/product/${slug}`}
        className={`${!inStock ? 'pointer-events-none' : ''}`}
    >
      <div
          className="group rounded-2xl shadow-md flex flex-col overflow-hidden border-2 border-transparent hover:border-[#02C2FF]"
      >

        <div className="h-25 sm:h-40 relative overflow-hidden">
          <Image
              src={imgSrc}
              alt={altText}
              width={600}
              height={400}
              className={`${!inStock ? 'grayscale-95 group-hover:cursor-not-allowed' : ''} h-full w-full object-cover group-hover:scale-125 transition duration-300 ease-in-out `}
          />
          {!inStock ?
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                text-black text-sm px-3 py-1 bg-white rounded-full font-medium text-center min-w-[200px]">
                Currently Not Available
              </div>
              :
              <div
                  className="absolute bottom-2 right-2 text-white px-3 py-1
                bg-[#02C2FF] rounded-full font-semibold">
                {price} USD
              </div>}
        </div>
        <div className="flex p-4 justify-between">
        <span className={`text-md font-semibold ${!inStock ? 'line-through' : ''}`}>
          {name}
        </span>
          <span className={`text-sm text-gray-500 ${!inStock ? 'line-through' : ''}`}>
          {product.weight_grams &&
              product.weight_grams + " g"
          }
        </span>
        </div>
      </div>
    </Link>
  </>)
}