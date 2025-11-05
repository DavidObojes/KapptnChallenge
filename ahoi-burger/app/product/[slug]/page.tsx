import ProductDetail from "@/components/products/detail/ProductDetail";

type PageProps = {
  params: Promise<{ slug: string }>,
}

export default async function ProductDetailPage({params} : PageProps) {

  const data = await params
  const slug = data.slug


  return (<>
        <div className="h-screen overflow-hidden flex flex-col font-sans">
          <main className="flex flex-col gap-4 overflow-y-auto overflow-x-hidden">
            <ProductDetail slug={slug}/>
          </main>
        </div>
      </>
  );
}
