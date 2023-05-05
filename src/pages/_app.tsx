import Layout from '@/components/Layout'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Head>
        <title>getlnked | Create a Stunning Portfolio Site with Ease 🚀</title>
        <meta name="description" content="Create a professional portfolio or personal website with just a few clicks that showcases your work and tells your story in a way that's uniquely you." />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
