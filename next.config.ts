import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Both pages were live before their content moved onto the home page.
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/partners", destination: "/#partners", permanent: true },
    ];
  },
};

export default nextConfig;
