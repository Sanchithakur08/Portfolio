/**
 * Values that still contain template text (e.g. "your-github-username",
 * "you@example.com", "YYYY") are treated as "not set". Unset links and
 * details are hidden in production builds, so nothing fake ever ships.
 */
const PLACEHOLDER_PATTERN = /your[-_.]|your-domain|example\.com|YYYY|University Name|College Name/i;

export function isSet(value: string | undefined | null): value is string {
  return Boolean(value && value.trim() && !PLACEHOLDER_PATTERN.test(value));
}

export const isDev = import.meta.env.DEV;
