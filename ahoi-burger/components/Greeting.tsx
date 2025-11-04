import {Address} from "@/types/address";

interface GreetingProps {
  address: Address
  name: string
}

export default function Greeting({ address, name }: GreetingProps) {
  return(<>
    <h1>{name}</h1>
    <p>{address.street}, {address.city}, {address.country.name}</p>
  </>)
}