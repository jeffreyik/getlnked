import Layout from '@/components/Layout'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
