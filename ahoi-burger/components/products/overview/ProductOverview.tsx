import Greeting from "@/components/Greeting";
import ProductListLarge from "@/components/products/list/ProductListLarge";
import ProductListSmall from "@/components/products/list/ProductListSmall";
import {Address} from "@/types/address";

interface ProductOverviewProps {
  address: Address
  name: string
}

export default async function ProductOverview() {
  return (<>
    <ProductListLarge/>
    <ProductListSmall/>
  </>)
}