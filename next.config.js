/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig : {host: '0.0.0.0'},
    
    images: {
        domains: ['media.licdn.com', 'avatars.githubusercontent.com']
    }
}

module.exports = nextConfig
