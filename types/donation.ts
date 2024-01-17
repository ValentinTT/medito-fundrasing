export type ProgressDonation = {
  currentAmount: number;
  goalAmount: number;
  donationsCount: number;
  currency: string;
};

export type Donour = {
  name: string;
  amount: number;
  currency: string;
  time: Date;
};
