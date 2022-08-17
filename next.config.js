require('dotenv').config()
const path = require('path')



module.exports = {
  reactStrictMode: true,
  env: {
    FRONTEND_PORT: process.env.FRONTEND_PORT,
    FRONTEND_PORT_HTTPS: process.env.FRONTEND_PORT_HTTPS,
    NEXT_PUBLIC_SITE_PROTOCOL: process.env.NEXT_PUBLIC_SITE_PROTOCOL,
    NEXT_PUBLIC_SITE_DOMAIN: process.env.NEXT_PUBLIC_SITE_DOMAIN,
    NEXT_PUBLIC_BACKEND_DOMAIN: process.env.NEXT_PUBLIC_BACKEND_DOMAIN,
    API_VERSION: process.env.API_VERSION,
    BACKEND_API: process.env.BACKEND_DOMAIN_NEW_API
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets')],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.BACKEND_DOMAIN_NEW_API}${process.env.API_VERSION}/:path*` // Proxy to Backend
      }
    ]
  }
}
