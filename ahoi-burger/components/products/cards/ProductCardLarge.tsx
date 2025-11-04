import Image from "next/image";

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

  return (<>
    <div className="rounded-2xl shadow-md flex flex-col overflow-hidden">

      <div className="h-25 sm:h-40 relative">
        <Image
            src={imgSrc}
            alt={altText}
            width={600}
            height={400}
            className={`h-full w-full object-cover ${!inStock ? 'grayscale-95' : ''}`}
        />
        {!inStock ?
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                text-black px-3 py-1 bg-white rounded-full font-medium text-center min-w-[200px]">
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
  </>)
}