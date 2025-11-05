"use client";

import { createContext, useContext } from "react";
import { Products } from "@/types/products";
import { Address } from "@/types/address";

export interface RestaurantData {
  name: string;
  address: Address;
  products: Products;
}

const RestaurantContext = createContext<RestaurantData | null>(null);

export const RestaurantProvider = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: RestaurantData;
}) => {
  return (
    <RestaurantContext.Provider value={data}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => {
  const ctx = useContext(RestaurantContext);
  if (!ctx) throw new Error("useRestaurant must be used inside RestaurantProvider");
  return ctx;
};
