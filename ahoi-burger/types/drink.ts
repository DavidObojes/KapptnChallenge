import {Allergen} from "@/types/allergen";

export type Drink = {
  name: string
  description: string
  price: number
  allergens?: Allergen[]
  img: string
}