////
///
// next.config.js

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: '@mdx-js/react',
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: [
      'resources',
      'scripts',
      'server',
      'src',
      'types',
      'utils',
    ],
    ignoreDuringBuilds: true,
  },
  pageExtensions: [
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    'page.mdx',
    'api.tsx',
    'api.ts',
    'api.jsx',
    'api.js',
  ],
  reactStrictMode: true,
  
  webpack: (config) => {

    // Add TypeScript loader
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    })

    // Resolve .ts and .tsx extensions
    config.resolve.extensions.push('.ts', '.tsx')

    config.resolve.fallback = { // eslint-disable-line no-param-reassign
      crypto: require.resolve('crypto-browserify'),
      process: 'process/browser',
      stream: require.resolve('stream-browserify'),
    }
    
    return config
  },
}

module.exports = withMDX(nextConfig)
