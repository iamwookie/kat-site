/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "cdn.discordapp.com",
            "i.scdn.co",
        ]
    },
    async redirects() {
        return [
            {
                source: "/invite",
                destination: "/api/invite",
                permanent: true,
            },
            {
                source: "/support",
                destination: "/api/support",
                permanent: true,
            }
        ];
    }
};

module.exports = nextConfig;
