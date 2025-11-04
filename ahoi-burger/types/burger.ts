type Allergens = "rr" | "xx" | "mm" | "bb" | "zz" | "ll" | "vv";
type BurgerTags = "bacon" | "tomatoes" | "chicken" | "salad" | "tofu" | "fish"

type BurgerInformation = {
  in_stock: boolean
  vegetarian: boolean
  allergens_contained_in : Allergens
  availableSince? : number
  img : string
}

export type Burger = {
  name: string
  description: string
  weight_grams: number
  price_usd: number
  info : BurgerInformation
  tags : BurgerTags
}