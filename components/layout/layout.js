import { Fragment } from "react";
import MainHeader from "./main-header";
import MainFooter from "./main-footer";
import Router from "next/router";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

function Layout(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <Fragment>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9WB66F"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
      <MainHeader />
      {loading ? <Loader /> : <main>{props.children}</main>}
      <MainFooter />
    </Fragment>
  );
}

export default Layout;
