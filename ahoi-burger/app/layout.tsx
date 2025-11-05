import type { Metadata } from "next";
import "./globals.scss";
import {AhoiBurgerAPIResponse} from "@/types/api";
import {RestaurantProvider} from "@/context/RestaurantContext";

export const metadata: Metadata = {
  title: "Ahoi Burger",
  description: "Tasty Burger for everyone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch Data
  const data = await fetch(
    "https://ahoi-production-bucket-public.s3.eu-central-1.amazonaws.com/challenge/assets/restaurant.json"
  );
  const res: AhoiBurgerAPIResponse = await data.json();

  // Prepare the data for the provider
  const restaurantData = {
    name: res.name,
    address: res.address,
    products: {
      burgers: res.offered_burgers,
      drinks: res.offered_drinks,
    },
  };

  return (
    <html lang="en">
      <body>
        <RestaurantProvider data={restaurantData}>
          {children}
        </RestaurantProvider>
      </body>
    </html>
  );
}
