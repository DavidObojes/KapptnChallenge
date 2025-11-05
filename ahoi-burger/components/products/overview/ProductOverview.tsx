"use client"

import ProductListLarge from "@/components/products/list/ProductListLarge";
import ProductListSmall from "@/components/products/list/ProductListSmall";
import {useRestaurant} from "@/context/RestaurantContext";

export default function ProductOverview() {

  const {products} = useRestaurant();

  return (<>
    <ProductListLarge products={products.burgers} headline="Burgers"/>

    <div className="flex flex-col w-full gap-4">
      <ProductListSmall products={products.drinks} headline="Drinks"/>
    </div>
  </>)
}