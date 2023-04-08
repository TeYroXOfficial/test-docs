const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en'
  }
})
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // Register custom components here
    // Here, we're registering a component called 'youtube' that uses our custom YouTubeComponent
    components: {
      youtube: './components/YouTube',
    },
  },
});

module.exports = withMDX();