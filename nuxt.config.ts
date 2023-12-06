// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // デプロイ設定
  // 1. CSR
    devtools: { enabled: true },
    ssr: false,
    spaLoadingTemplate: true, 
  // 2. Serverless on lambda
  /*
  nitro: {
    preset: 'aws-lambda',
    serveStatic: true,
  },
  */
})
