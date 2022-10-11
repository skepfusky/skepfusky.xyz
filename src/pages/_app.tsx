import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import Layout from "@/components/Base"
import Head from "next/head"
import Script from "next/script"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { ParallaxProvider } from "react-scroll-parallax"
import NextNProgress from "nextjs-progressbar"
import { MDXProvider } from "@mdx-js/react"
import Notification from "@/components/Notification"
import { useRouter } from "next/router"
import { useEffect } from "react"
import * as ga from "@/utils/ga"

config.autoAddCss = false

export default function ShootMe({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const routeChange = (url: string) => ga.pageView(url)

    router.events.on("routeChangeComplete", routeChange)
    return () => router.events.off("routeChangeComplete", routeChange)
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextNProgress color="#9427E7" options={{ showSpinner: false }} />
      <Notification
        heading="Website under construction"
        content={
          <>
            Most of the content is either missing or incomplete, and is
            currently in the process of being added!
          </>
        }
      />
      <ParallaxProvider>
        <MDXProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ParallaxProvider>
    </>
  )
}
