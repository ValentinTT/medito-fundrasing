import { delay, shuffle } from "@/lib/utils";
import { Donor } from "@/types/donation";

const donors: Donor[] = [
  {
    name: "Anonymous",
    amount: 500,
    currency: "USD",
    time: "2023-12-15T12:30:00",
  },
  {
    name: "Alice Smith",
    amount: 1000,
    currency: "EUR",
    time: "2023-12-20T14:45:00",
  },
  {
    name: "Anonymous",
    amount: 750,
    currency: "GBP",
    time: "2023-01-10T10:15:00",
  },
  {
    name: "John Doe",
    amount: 1200,
    currency: "CAD",
    time: "2023-02-05T08:00:00",
  },
  {
    name: "Eva Johnson",
    amount: 800,
    currency: "USD",
    time: "2023-03-03T18:30:00",
  },
];

export async function GET() {
  //Api call to stripe...

  await delay(1000);
  return Response.json({ donors: shuffle(donors) });
}
