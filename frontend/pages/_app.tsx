import '../styles/globals.css'
import '../components/nav'
import MainLayout from '../layout/MainLayout'
import { SWRConfig } from 'swr'
import fetchJson from "lib/fetchJson";

function MyApp({ Component, pageProps }) {
  return <SWRConfig
  value={{
    fetcher: fetchJson,
    onError: (err) => {
      console.error(err);
    },
  }}
><MainLayout><Component {...pageProps} /></MainLayout></SWRConfig>
 
}

export default MyApp
