import Head from "next/head";
import Layout from "@/components/layout/layout";
import { AuthProvider } from "@/context/AuthContext";

import "@/styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Head>
          <title>Cozy Buddy</title>
          <meta
            name='description'
            content='Cozy Buddy - čalounictví a nábytek. Zakázková výroba, oprava nábytku a automotive potahů.'
          />
          <meta httpEquiv='content-language' content='cs' />
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
    </AuthProvider>
  );
}

export default MyApp;
