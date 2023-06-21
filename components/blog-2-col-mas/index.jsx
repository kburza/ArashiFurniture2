import Footer from "../../layout/footers/footer";
import Header from "../../layout/headers/header";
import BreadcrumbBlog from "../common/breadcrumbblog";
import BlogTwoCalMas from "./blog-2-col-mas";

const index = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbBlog
          title={"News & Blog"}
          subtitle={"Blog"}
          img="/assets/img/page-title/page-title-2.jpg"
        />
        <BlogTwoCalMas />
      </main>
      <Footer />
    </>
  );
};

export default index;
