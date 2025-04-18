// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  components: true,
  css: [
    "./assets/css/main.css",
    "@fortawesome/fontawesome-free/css/all.min.css",
  ],
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxt/icon", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700, 800],
    },
    display: 'swap'
  },

  app: {
    head: {
      title: "My Nuxt App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },

  // vite: {
  //   plugins: [tailwindcss()],
  // },
});
