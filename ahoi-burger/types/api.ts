// types/api.ts (mirrors the actual API Structure)
import { Burger } from "./burger";
import { Drink } from "./drink";
import {Address} from "@/types/address";

export interface AhoiBurgerAPIResponse {
  name: string;
  address: Address;
  offered_burgers: Burger[];
  offered_drinks: Drink[];
}