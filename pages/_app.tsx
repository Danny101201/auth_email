import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
const Navbar = dynamic(import('components/Navbar'))
import { SessionProvider } from "next-auth/react"
import 'components/Navbar.css'
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />

    </SessionProvider>
  )
}

export default MyApp
