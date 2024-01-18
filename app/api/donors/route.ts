import { Donor } from "@/types/donation";

const donors: Donor[] = [
  {
    name: "Anonymous",
    amount: 500,
    currency: "USD",
    time: new Date("2023-12-15T12:30:00"),
  },
  {
    name: "Alice Smith",
    amount: 1000,
    currency: "EUR",
    time: new Date("2023-12-20T14:45:00"),
  },
  {
    name: "Anonymous",
    amount: 750,
    currency: "GBP",
    time: new Date("2023-01-10T10:15:00"),
  },
  // Add more donors as needed
];

export async function GET() {
  //Api call to stripe...

  return Response.json({ donors });
}
