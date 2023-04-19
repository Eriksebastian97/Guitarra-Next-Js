import Head from "next/head"
import Header from "./header"
import Footer from "./footer"


// layout es el componente que se va a renderizar en todas las paginas
export default function Layout({children,title = "",description=""}) {
  return (
    <>

    <Head>
        <title>{`GuitarraLa - ${title}`}</title>
        <meta name="description" content={description}/>
    </Head>

    <Header />
    
    {children}

    <Footer />
    </>
  )
}
