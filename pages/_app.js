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
          content='Cozy Buddy - Výroba a oprava čalouněného nábytku. Zakázková výroba, renovace starého čalounění a autočalounické práce.'
        />
        <meta
          name='keywords'
          content='čalounictví, čalouněný nábytek, čalounění, nábytek, čalounictví Brno, čalounictví Mikulov'
        ></meta>

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://cozybuddy.cz/' />
        <meta
          property='og:title'
          content='Cozy Buddy - Výroba a oprava čalouněného nábytku'
        />
        <meta
          property='og:description'
          content='Cozy Buddy - Výroba a oprava čalouněného nábytku. Zakázková výroba, renovace starého čalounění a autočalounické práce.'
        />
        <meta property='og:image' content='https://cozybuddy.cz/hero.jpg' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://cozybuddy.cz/' />
        <meta
          property='twitter:title'
          content='Cozy Buddy - Výroba a oprava čalouněného nábytku'
        />
        <meta
          property='twitter:description'
          content='Cozy Buddy - Výroba a oprava čalouněného nábytku. Zakázková výroba, renovace starého čalounění a autočalounické práce.'
        />
        <meta
          property='twitter:image'
          content='https://cozybuddy.cz/hero.jpg'
        />

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
