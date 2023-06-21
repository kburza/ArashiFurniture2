import React from "react";
import Footer from "../../layout/footers/footer";
import Header from "../../layout/headers/header";
import BreadcrumbShop from "../common/breadcrumbshop";
import ShopProduct from "../common/product/shop-product";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbShop
          title={"Shop"}
          subtitle={"Shop"}
          img="/assets/img/page-title/page-title-2.jpg"
        />
        <ShopProduct />
      </main>
      <Footer />
    </>
  );
};

export default index;
