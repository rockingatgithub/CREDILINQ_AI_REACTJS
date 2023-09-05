import type { AppProps } from 'next/app'
import './style.css'
 
// ================= App tsx to customize body, and to load global CSS ===================
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}