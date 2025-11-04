import {Burger} from "@/types/burger";
import {Drink} from "@/types/drink";

export type Products = {
  burgers : Burger[]
  drinks : Drink[]
}

//useful for mixed lists
export type Product = Burger | Drink;