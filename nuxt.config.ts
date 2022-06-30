import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
  },
  meta: {
    link: [
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
      },
    ],
  },
  css: ["/assets/global.scss", "@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/strapi"],
  webpack: {
    optimizeCSS: true,
  },
  //
  //  @nuxtjs/tailwindcss config
  //
  tailwindcss: {
    viewer: false,
  },
  //
  // @nuxtjs/strapi config
  //
  strapi: {
    prefix: "/api",
    url: "http://localhost:1337",
    version: "v4",
    cookie: {},
  },
});
