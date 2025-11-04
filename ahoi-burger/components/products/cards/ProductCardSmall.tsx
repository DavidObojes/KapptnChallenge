import Image from "next/image";

interface ProductCardProperties {
  name?: string,
  price?: number,
  weight_grams?: number,
  img?: string;            // top-level image
  info?: { img?: string }; // nested image
}

export default function ProductCardSmall<T>({product} : {product : ProductCardProperties}) {

  const imgSrc = product.info?.img ?? product.img ?? "/placeholder.png";
  const altText = product.name ?? "product image";

  return(<>

    {product.name}

      <Image
        src={imgSrc}
        alt={altText}
        width={400}
        height={400}
      />
  </>)
}