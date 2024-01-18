export type ProgressDonation = {
  currentAmount: number;
  goalAmount: number;
  donationsCount: number;
  currency: string;
};

export type Donor = {
  name: string;
  amount: number;
  currency: string;
  time: string;
};
