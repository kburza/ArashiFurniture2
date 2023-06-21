import React from "react";
import Footer from "../../layout/footers/footer";
import Header from "../../layout/headers/header";
import BreadcrumbContact from "../common/breadcrumbcontact";
import SubscribeArea from "../common/subscribe-area";
import ContactArea from "./contact-area";
import ContactMap from "./contact-map";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbContact
          style={{ color: "#ffffff !important" }}
          img="/assets/img/page-title/page-title-2.jpg"
          title={"Contact Us"}
          subtitle={"Contact"}
        />

        <ContactArea />
        <ContactMap />
        {/* <SubscribeArea /> */}
      </main>
      <Footer />
    </>
  );
};

export default index;
