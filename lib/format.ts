// Dates in frontmatter are plain strings like 2026-09-26. Treat date-only values as UTC midnight
// so the day never shifts with the reader's time zone.
export function parseDate(value: string | Date): Date {
  if (value instanceof Date) return value;
  const text = String(value);
  return new Date(/^\d{4}-\d{2}-\d{2}$/.test(text) ? `${text}T00:00:00Z` : text);
}

// "Sep 26, 2026"
export function formatDate(value: string | Date, month: 'short' | 'long' = 'short'): string {
  return parseDate(value).toLocaleDateString('en-US', { month, day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

// "Sep 2026"
export function formatMonth(value: string | Date): string {
  return parseDate(value).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}
