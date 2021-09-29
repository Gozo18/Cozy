import Head from "next/head";
import Layout from "../components/layout/layout";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Cozy Buddy</title>
        <meta
          name="description"
          content="Cozy Buddy - čalounictví a nábytek. Zakázková výroba, oprava nábytku a automotive potahů."
        />
        <meta http-equiv="content-language" content="cs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
