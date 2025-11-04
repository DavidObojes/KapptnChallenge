import Image from "next/image";

export default function ProductCardLarge() {

  const imageUrl = '#'
  const altText = 'dummy text'

  return(<>
      <Image
        src={imageUrl}
        alt={altText}
        width={400}
        height={400}
      />
  </>)
}