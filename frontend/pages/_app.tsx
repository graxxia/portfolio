/* eslint-disable @next/next/no-script-component-in-head */
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as ga from "../lib/ga";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const GTM_KEY = process.env.NEXT_PUBLIC_GOOGLE_GTM;
  const GOOGLE_ANALYTICS_KEY = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  console.log(GTM_KEY, GOOGLE_ANALYTICS_KEY, "KEYS");
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_KEY}`}
        strategy="afterInteractive"
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GOOGLE_ANALYTICS_KEY}');
      `,
        }}
      />

      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_KEY}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
