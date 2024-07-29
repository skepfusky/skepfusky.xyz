import rss from "@astrojs/rss"
import type { APIRoute } from "astro"

export const GET: APIRoute = (ctx: any) => {
  return rss({
    title: "Kuro's Dream Journal",
    description: "Why tf would you add this to your feed",
    site: ctx.site,
    trailingSlash: false,
    items: [],
    customData: `<language>en-us</language>`
  })
}