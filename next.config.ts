import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
  async redirects() {
    return [
      {
        source: '/aib-camera',
        destination: '/camera',
        permanent: true,
      },
      {
        source: '/aib-camera/:path*',
        destination: '/camera/:path*',
        permanent: true,
      },
      {
        source: '/aib-sitac',
        destination: '/sitac',
        permanent: true,
      },
      {
        source: '/aib-sitac/:path*',
        destination: '/sitac/:path*',
        permanent: true,
      },
      {
        source: '/camera/guida',
        destination: '/camera/guide',
        permanent: true,
      },
      {
        source: '/camera/novita',
        destination: '/camera/changelog',
        permanent: true,
      },
      {
        source: '/aib-assets/:path*',
        destination: '/camera/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
