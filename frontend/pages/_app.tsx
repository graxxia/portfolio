import "../styles/globals.css";
import "../components/nav";
import { SWRConfig } from "swr";
import fetchJson from "lib/fetchJson";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <Head>
        <title>Gracia Morales</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
