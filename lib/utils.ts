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

export function formatDateDifference(startDate: Date, endDate: Date): string {
  const millisecondsPerSecond = 1000;
  const millisecondsPerMinute = 60 * millisecondsPerSecond;
  const millisecondsPerHour = 60 * millisecondsPerMinute;
  const millisecondsPerDay = 24 * millisecondsPerHour;
  const millisecondsPerMonth = 30 * millisecondsPerDay;
  const millisecondsPerYear = 365 * millisecondsPerDay;

  const elapsedMilliseconds = Math.abs(endDate.getTime() - startDate.getTime());

  if (elapsedMilliseconds < millisecondsPerMinute) {
    const seconds = Math.round(elapsedMilliseconds / millisecondsPerSecond);
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  } else if (elapsedMilliseconds < millisecondsPerHour) {
    const minutes = Math.round(elapsedMilliseconds / millisecondsPerMinute);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (elapsedMilliseconds < millisecondsPerDay) {
    const hours = Math.round(elapsedMilliseconds / millisecondsPerHour);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (elapsedMilliseconds < millisecondsPerMonth) {
    const days = Math.round(elapsedMilliseconds / millisecondsPerDay);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (elapsedMilliseconds < millisecondsPerYear) {
    const months = Math.round(elapsedMilliseconds / millisecondsPerMonth);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years = Math.round(elapsedMilliseconds / millisecondsPerYear);
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  }
}

export function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}
