import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function currencyFormatter(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
}
export function formatSocialMediaNumber(number: number): string {
  const abbreviations = ["", "k", "M", "B", "T"];
  if (number === 0) return `${number}`;

  const index = Math.floor(Math.log10(Math.abs(number)) / 3);
  if (index === 0) return `${number}`;

  const abbreviatedValue = (number / Math.pow(1000, index)).toFixed(1);

  return `${abbreviatedValue}${abbreviations[index]}`;
}
