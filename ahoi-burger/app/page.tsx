import Image from "next/image";
import ProductOverview from "@/components/products/overview/ProductOverview";
import Greeting from "@/components/Greeting";
import {Products} from "@/types/products";
import {AhoiBurgerAPIResponse} from "@/types/api";

export default async function Home() {

  //Greeting Data
  let address: any;
  let name: any;

  //Product Data Type
  let products: Products = {
    burgers: [],
    drinks: [],
  };

  try {
    const data = await fetch("https://ahoi-production-bucket-public.s3.eu-central-1.amazonaws.com/challenge/assets/restaurant.json")
    const res: AhoiBurgerAPIResponse = await data.json()

    //Assign Greeting Data
    name = res.name
    address = res.address

    //Assign Product Data
    products.burgers = res.offered_burgers
    products.drinks = res.offered_drinks

  } catch (err) {
    console.log(err)
  }

  return (<>
        <div className="h-screen overflow-hidden flex flex-col font-sans">
          {/* Obere Begrüßung */}
          <header className="p-4 shadow-md">
            <Greeting address={address} name={name}/>
          </header>

          <main className="flex flex-col p-4 gap-4 overflow-y-auto">
            <ProductOverview products={products}/>
          </main>
        </div>
      </>
  );
}
