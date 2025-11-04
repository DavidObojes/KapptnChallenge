//Generic Product List
import ProductCardSmall from "@/components/products/cards/ProductCardSmall";

export default function ProductListSmall({products, headline}: { products: any[], headline: string }) {
  return (<>
    <h2>{headline}</h2>
    <div className="flex flex-row">
      {products.map(p => <ProductCardSmall key={p.name} product={p}/>)}
    </div>
  </>)
}