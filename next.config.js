/** @type {import('next').NextConfig} */
const nextConfig = {
    /** This is for allowing private image url **/
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "bytegrad.com",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
}

module.exports = nextConfig
