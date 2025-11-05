import ProductOverview from "@/components/products/overview/ProductOverview";
import Greeting from "@/components/Greeting";

export default async function Home() {

  return (<>
        <div className="h-screen overflow-hidden flex flex-col font-sans">
          <header className="p-4 shadow-md">
            <Greeting />
          </header>
          <main className="flex flex-col p-4 gap-4 overflow-y-auto overflow-x-hidden">
            <ProductOverview />
          </main>
        </div>
      </>
  );
}
