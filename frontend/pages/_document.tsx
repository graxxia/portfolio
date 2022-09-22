import Nav from "../components/nav";
import Footer from "../components/footer";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { LogoName } from "../components/LogoName";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html data-theme="graciatheme">
        <Head />
        <body className="items-center justify-center w-full text-center">
          <LogoName />
          <Nav />
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
