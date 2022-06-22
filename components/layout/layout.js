import { Fragment } from "react";
import MainHeader from "./main-header";
import MainFooter from "./main-footer";

function Layout(props) {
  return (
    <Fragment>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9WB66F"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
      <MainHeader />
      <main>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
}

export default Layout;
