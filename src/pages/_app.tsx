import Layout from '@/components/Layout'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import Script from 'next/script'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page) 

  return (
    <main className={poppins.className}>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
       { getLayout(<Component {...pageProps} />) }
    </main>
  )
}
