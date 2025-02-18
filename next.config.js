/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public'
  })

// module.exports = withPWA({
//   // next.js config
// })
const nextConfig={}

module.exports = process.env.NODE_ENV==="production" ? withPWA(nextConfig) : nextConfig;