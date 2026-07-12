import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'www.willenskraft.co.at',
            },
            {
                protocol: 'https',
                hostname: 'www.bellerei-shop.com',
            },
        ],
    },
};

export default nextConfig;
