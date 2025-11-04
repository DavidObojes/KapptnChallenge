import Image from "next/image";
import ProductOverview from "@/components/products/overview/ProductOverview";
import Greeting from "@/components/Greeting";

export default async function Home() {

  //Greeting Data
  let address;
  let name;

  //Food Data
  let burgers

  //Drinks Data
  let drinks


  try {
    const data = await fetch("https://ahoi-production-bucket-public.s3.eu-central-1.amazonaws.com/challenge/assets/restaurant.json")
    const res = await data.json()
    //console.log("Response:", res)

    name = res.name
    address = res.address
    burgers = res.offered_burgers
    drinks = res.offered_drinks

    console.log("Burgers:", burgers)
    console.log("Drinks:", drinks)

  } catch (err) {
    console.log(err)
  }

  return (<>
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start">
        <Greeting address={address} name={name} />
        <ProductOverview burgers={burgers} drinks={drinks}/>
      </main>
    </div>
    </>
  );
}
