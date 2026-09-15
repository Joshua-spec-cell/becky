// When deployed to a GitHub Pages project site the app lives at
// https://user.github.io/repo-name/ , so raw asset URLs need that prefix.
// Set NEXT_PUBLIC_BASE_PATH in .env.production (see README).
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function asset(path) {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}
