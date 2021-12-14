import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'
import LogoName from '../components/logoname'





export default function Layout({ children }) {
    return (
      <>
       <Head>
       
        <title>Gracia Morales</title>
        <link rel="icon" href="/favicon.ico" />
        <html data-theme="graciatheme"></html>
        
      </Head>
      <div className="flex mt-3 items-center justify-center  py-1"><div className="avatar"> <img src="/Heart.gif"/></div></div>
      <LogoName></LogoName>
        <Nav/>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">{children}</main>
        <Footer />
      </>
    )
  }