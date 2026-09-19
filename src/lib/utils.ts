import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Renders tenure from a start date so it never goes stale.
 * e.g. "4.5 years", "3 years", "8 months"
 */
export function formatTenure(
  startDate: string,
  now: Date = new Date()
): string {
  const start = new Date(startDate);
  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  months = Math.max(months, 0);

  if (months < 12) {
    return `${months} month${months === 1 ? '' : 's'}`;
  }

  const years = Math.floor(months / 12);
  const remainder = months % 12;
  // Round to the nearest half-year: 4y5m reads as "4.5 years".
  const half = remainder >= 9 ? 1 : remainder >= 3 ? 0.5 : 0;
  const value = years + half;
  return `${value} year${value === 1 ? '' : 's'}`;
}
