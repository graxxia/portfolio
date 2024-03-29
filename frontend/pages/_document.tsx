import Footer from "../components/footer";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { LogoName } from "../components/LogoName";
import Script from "next/script";
import { NavMenu } from "components/nav";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  GTM_KEY = process.env.NEXT_PUBLIC_GOOGLE_GTM;
  GOOGLE_ANALYTICS_KEY = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  logger = () => console.log(this.GTM_KEY, this.GOOGLE_ANALYTICS_KEY, "KEYS");
  render() {
    return (
      <Html data-theme="graciatheme">
        <Head title="Gracia Morales">
          <meta
            name="description"
            content="Gracia Morales Portfolio website, graphic designer and webdesigner"
          ></meta>
          <meta
            name="keywords"
            content="Graphic Designer, 3D, Logo Design, Web Design"
          ></meta>

          <link rel="icon" href="/favicon.ico" />

          <Script
            id={this.GTM_KEY}
            type="text/javascript"
            async
            dangerouslySetInnerHTML={{
              __html: `
              (function(w, d, s, l, i) {
                    w[l] = w[l] || []
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                    const f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != "dataLayer" ? "&l=" + l : ""
                    j.async = true
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
                    f.parentNode.insertBefore(j, f)
                  })(window,document,'script','dataLayer',"${this.GTM_KEY}")`,
            }}
          />
        </Head>

        <body className="items-center justify-center w-full text-center">
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${this.GTM_KEY}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <LogoName />
          <NavMenu />
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
