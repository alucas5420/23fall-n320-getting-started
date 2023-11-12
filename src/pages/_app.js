import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  // console.count("App Loaded")
  return (
    <>
    <Component {...pageProps} />
    </>
  )
}
