import Nav from "../components/nav";
import Footer from "../components/footer";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html data-theme="graciatheme">
        <Head />

        <body className="flex flex-col items-center justify-center w-full flex-1 text-center">
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
