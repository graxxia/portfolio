import "../styles/globals.css";
import "../components/nav";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../util/gtag";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Gracia Morales</title>
        <meta
          name="description"
          content="Gracia Morales Portfolio website, graphic designer and webdesigner"
        ></meta>
        <meta
          name="keywords"
          content="Graphic Designer, 3D, Logo Design, Web Design"
        ></meta>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
