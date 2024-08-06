// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt 3 starter',
      script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
  ssr: true,
  modules: [
    '@pinia/nuxt',
    '@nuxt/devtools'
  ],
  css: [
    '~/assets/styles/css/tailwind.css',
    '~/assets/styles/scss/main.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
