/**
 * Merge class names, filtering out falsy values.
 * Lightweight alternative to clsx — just template-literal friendly.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a raw phone number string (digits only) into a tel: URI.
 * Example: "8504962984" -> "tel:+18504962984"
 */
export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  return `tel:+1${digits}`;
}
