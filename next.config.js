/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
        ignoreDuringBuilds: true,
          },


          images: {
            remotePatterns: [
              {
                protocol: 'https',
                hostname: 'i.imgur.com',
               
              },
            ],
          },
}

module.exports = nextConfig
