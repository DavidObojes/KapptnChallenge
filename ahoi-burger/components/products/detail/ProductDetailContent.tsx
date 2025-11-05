"use client"

import Image from "next/image";

interface ProductDetailProperties {
  name? : string
  description: string,
  price?: number
  price_usd?: number,
  weight_grams?: number,
  img?: string;
  info?: {
    vegetarian? : boolean
    img?: string
  };
}

export default function ProductDetailContent({product} : {product : ProductDetailProperties} ) {

  //Fallbacks if any information is missing
  const imgSrc = product.info?.img ?? product.img ?? "/placeholder.png";
  const altText = product.name ?? "Product Image";
  const price = product.price ?? product.price_usd ?? "On Request"

  console.log("Product:",product)

  return (<>

    <Image
        src={imgSrc}
        alt={altText}
        width={600}
        height={400}
        className={`h-60 w-full object-cover rounded-xl`}
    />
    <div className="flex p-4 justify-between">
        <span className={`text-md font-semibold`}>
          {price} USD
        </span>
        <span className={`text-sm`}>
          {product.weight_grams &&
              product.weight_grams + " g"
          }
        </span>
        <span className={`text-sm`}>
          {product.info!.vegetarian}
        </span>
      </div>
      <div>
        {product.description}
      </div>
  </>)
}