import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bravado Test</title>
      </Head>

      <main>
        <Component {...pageProps} /> 
      </main>
    </>
    
  )
  
}

export default MyApp
