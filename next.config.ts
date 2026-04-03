import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ബിൽഡ് ചെയ്യുമ്പോൾ ESLint എററുകൾ നോക്കണ്ട എന്ന് വെക്കുന്നു
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
