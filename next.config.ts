import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true, // Ignorera ESLint under build-processen
	  },
};	

export default nextConfig;
