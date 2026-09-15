/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// CHANGE THIS to your GitHub repository name (leave "" for a user/org site
// like username.github.io, or for Netlify/Vercel).
const repo = "becky-birthday";

const nextConfig = {
  output: "export",              // static export for GitHub Pages
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd && repo ? `/${repo}` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd && repo ? `/${repo}` : "",
  },
};

export default nextConfig;
