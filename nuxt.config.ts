// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui'
  ]
})