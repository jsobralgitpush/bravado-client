/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const apiConfig = {
  images: {
    domain: ['localhost']
  }, 
  env: {
    apiUrl: 'http://localhost:3000'
  }
}

module.exports = {nextConfig, apiConfig}
