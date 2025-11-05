"use client"

import ProductDetailHeader from "@/components/products/detail/ProductDetailHeader";
import ProductDetailContent from "@/components/products/detail/ProductDetailContent";
import {useRestaurant} from "@/context/RestaurantContext";
import {Product} from "@/types/products";


export default function ProductDetail({slug} : {slug: string}) {

  const {products} = useRestaurant();

  const allProducts : Product[] = [...products.burgers,...products.drinks]
  const product : Product | undefined = allProducts.find(p => slug === p.name.toLowerCase().replace(/\s+/g, "-"))
  const name : string = product!.name

  if (!product) {
    return <div>Product not found</div>;
  }

  return (<>
      <ProductDetailHeader name={name} />
      <ProductDetailContent product={product} />
  </>)
}