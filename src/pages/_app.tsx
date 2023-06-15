import Layout from '@/components/Layout'
import { Inter, Poppins } from 'next/font/google'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode, useState } from 'react'
import { AuthProvider } from '@/context/AuthContext'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { AppProvider } from '@/context/AppContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout<p = {}> = AppProps & {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout<{initialSession: Session}>) {
  const getLayout = Component.getLayout ?? ((page) => page) 
  const [supabaseClient] = useState(() => createPagesBrowserClient())

  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
        <AuthProvider>
          <AppProvider>
                {getLayout(
                  <main className={`${inter.variable} font-sans`}>
                      <Component {...pageProps} />
                  </main>
                ) }
          </AppProvider>
        </AuthProvider> 
       </SessionContextProvider>
  )
}
