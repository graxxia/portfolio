import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'
import LogoName from '../components/logoname'





export default function Layout({ children }) {
    return (
      <>
       <Head>
       
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <html data-theme="graciatheme"></html>
        
      </Head>
      <LogoName></LogoName>
        <Nav/>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">{children}</main>
        <Footer />
      </>
    )
  }