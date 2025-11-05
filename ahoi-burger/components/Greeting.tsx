"use client"

import {useRestaurant} from "@/context/RestaurantContext";

export default function Greeting() {

  const { name, address } = useRestaurant();

  return(<>
    <h1>{name}</h1>
    <p>{address.street}, {address.city}, {address.country.name}</p>
  </>)
}