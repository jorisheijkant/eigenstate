// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/styles/style.scss'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
  ],
  runtimeConfig: {
    strapiToken: process.env.STRAPI_TOKEN, // server-only
    public: {
      strapiUrl: process.env.STRAPI_URL || 'http://localhost:1337',
    }
  }
})
