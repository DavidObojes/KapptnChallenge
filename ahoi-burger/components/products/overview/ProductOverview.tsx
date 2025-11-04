import ProductListLarge from "@/components/products/list/ProductListLarge";
import ProductListSmall from "@/components/products/list/ProductListSmall";
import {Products} from "@/types/products";

interface ProductOverviewProps {
  products: Products
}

export default function ProductOverview({products}: ProductOverviewProps) {
  return (<>
        <ProductListLarge products={products.burgers} headline="Burgers"/>
        <ProductListSmall products={products.drinks} headline="Drinks"/>
  </>)
}