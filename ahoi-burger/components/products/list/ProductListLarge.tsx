//Generic Product List
import ProductCardLarge from "@/components/products/cards/ProductCardLarge";

export default function ProductListLarge({products, headline}: { products: any[], headline: string }) {
  return (<>
    <h2>{headline}</h2>
    <div className="flex flex-wrap flex-col sm:flex-row gap-4 sm:gap-10">
      {products.map(p => <ProductCardLarge key={p.name} product={p}/>)}
    </div>
  </>)
}