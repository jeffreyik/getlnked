import Layout from '@/components/Layout'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

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
      <Head>
        <title>getlnked | Create a Stunning Portfolio Site with Ease 🚀</title>
        <meta name="description" content="Create a professional portfolio or personal website with just a few clicks that showcases your work and tells your story in a way that's uniquely you." />
      </Head>

  
       { getLayout(<Component {...pageProps} />) }
    </main>
  )
}
