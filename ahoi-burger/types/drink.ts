type Allergens = "rr" | "oo"

export type Drink = {
  name: string
  description: string
  price: number
  allergens?: Allergens
  img: string
}