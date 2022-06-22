import Head from "next/head";
import Layout from "@/components/layout/layout";

import "@/styles/globals.scss";
import "lightgallery/scss/lightgallery.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Cozy Buddy - Výroba a oprava čalouněného nábytku</title>
        <meta name='title' content='Výroba a oprava čalouněného nábytku' />
        <meta
          name='description'
          content='Cozy Buddy - čalounictví a nábytek. Zakázková výroba, oprava nábytku a automotive potahů.'
        />
        <meta
          property='og:title'
          content='Cozy Buddy - Výroba a oprava čalouněného nábytku'
        />
        <meta property='og:image' content='https://cozybuddy.cz/hero.jpg' />
        <meta property='og:url' content='https://cozybuddy.cz' />
        <meta httpEquiv='content-language' content='cs' />
        <meta name='robots' content='index,follow' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossorigin
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
