import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names and merges Tailwind CSS classes to avoid specificity conflicts
 * @param inputs Any number of class names or conditional class name objects
 * @returns Merged class names as a string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number with thousands separators
 * @param num The number to format
 * @returns Formatted number string
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

/**
 * Truncates a string to a specified length and adds ellipsis if needed
 * @param text The string to truncate
 * @param maxLength Maximum length before truncation
 * @returns Truncated string
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * Debounces a function call
 * @param fn Function to debounce
 * @param ms Milliseconds to delay
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, ms);
  };
}

/**
 * Creates an array of numbers in a given range
 * @param start Starting number (inclusive)
 * @param end Ending number (inclusive)
 * @returns Array of numbers
 */
export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

/**
 * Generates a unique ID string
 * @returns Unique ID string
 */
export function uniqueId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}