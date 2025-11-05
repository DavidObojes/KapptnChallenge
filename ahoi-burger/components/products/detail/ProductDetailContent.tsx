"use client"

import Image from "next/image";
import {BurgerTag} from "@/types/burger";
import {Allergen} from "@/types/allergen";

interface ProductDetailProperties {
  name?: string
  description: string
  price?: number
  price_usd?: number
  weight_grams?: number
  img?: string
  tags?: BurgerTag[]
  allergens?: Allergen[]
  info?: {
    vegetarian?: boolean
    img?: string
    allergens_contained_in?: Allergen[]
  };
}

export default function ProductDetailContent({product}: { product: ProductDetailProperties }) {

  //Fallbacks if any information is missing
  const imgSrc = product.info?.img ?? product.img ?? "/placeholder.png";
  const altText = product.name ?? "Product Image";
  const price = product.price ?? product.price_usd ?? "On Request"
  const allergens = product.allergens ?? product.info?.allergens_contained_in

  console.log("Product Tags:", product.tags)

  return (<>
    <div className="flex flex-col p-4 gap-4 w-full max-w-[600px] mx-auto">
      <Image
          src={imgSrc}
          alt={altText}
          width={600}
          height={400}
          className="h-60 w-full object-cover rounded-xl"
      />
      <div className="flex justify-between text-center pb-4 border-b border-gray-300">
        <div className="text-xl font-bold">
          {price} USD
          <span className="product-detail-label">Price</span>
        </div>

        {/* Weight */}
        {product.weight_grams &&
            <div className="text-xl font-bold">
              {product.weight_grams + " g"}
              <span className="product-detail-label">Weight</span>
            </div>
        }

        {/* Vegetarian */}
        {product.info?.vegetarian != null ?
            <div className="text-xl font-bold">
              {product.info?.vegetarian === true ? "Yes" : "No"}
              <span className="product-detail-label">Vegetarian</span>
            </div>
            : ""
        }
      </div>

      {/* Description */}
      <div className="text-lg">
        {product.description}
      </div>

      {/* Tags */}
      {product.tags?.length ? (
          <div className="text-lg">
            <span className="product-detail-label">Special Ingredients</span>{" "}
            {product.tags.join(", ")}
          </div>
      ) : null}

      {/* Allergens */}
      {allergens?.length ? (
          <div className="text-lg">
            <span className="product-detail-label mb-2">Allergens</span>
            <div className="bg-[#feeed7] px-4 py-2 rounded-xl">
              {allergens.join(", ")}
            </div>
          </div>
          ) : null
      }
    </div>
  </>)
}