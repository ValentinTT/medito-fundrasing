import { ProgressDonation } from "@/types/donation";

const mockProgress: ProgressDonation = {
  currentAmount: 679000,
  goalAmount: 1000000,
  donationsCount: 30000,
  currency: "USD",
};

export async function GET() {
  //Api call to stripe...

  return Response.json({ ...mockProgress });
}
