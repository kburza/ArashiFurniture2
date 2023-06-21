import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/img/logo/logo-2.png";

const footerWidget = [
  {
    id: 1,
    title: "information",
    footer__links: [{ list: "About" }, { list: "Blog" }],
  },
  {
    id: 2,
    title: "Customer Service",
    footer__links: [{ list: "Shipping Policy" }, { list: "Contact Us" }],
  },
];

const Footer = ({ df }) => {
  return (
    <>
      <section className={`footer__area footer-bg ${df ? "box-m-15" : ""}`}>
        <div className="footer__top pt-100 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="footer__widget mb-30">
                  <div className="footer__widget-title mb-25">
                    <Link href="/">
                      <a>
                        <Image src={logo} alt="logo" />
                      </a>
                    </Link>
                  </div>
                  <div className="footer__widget-content">
                    <p>
                      Arashi Furniture merges art and luxury, crafting unique,
                      high-quality wooden and resin tables that transform spaces
                      and tell stories of nature's beauty.
                    </p>
                    <div className="footer__contact">
                      <ul>
                        <li>
                          <div className="icon">
                            <i className="fal fa-map-marker-alt"></i>
                          </div>
                          <div className="text">
                            <span>Ontario, Canada</span>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fal fa-envelope-open-text"></i>
                          </div>
                          <div className="text">
                            <span>arashiartdecor@gmail.com</span>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fal fa-phone-alt"></i>
                          </div>
                          <div className="text">
                            <span>(416) 994 9291</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {footerWidget.map((item) => (
                <div
                  key={item.id}
                  className="col-xl-3 col-lg-3 col-md-3 col-12"
                >
                  <div className="footer__widget mb-30">
                    <div
                      className={`footer__widget-title ${
                        item.id === 2 ? "mb-25" : ""
                      }`}
                    >
                      <h5>{item.title}</h5>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links">
                        <ul>
                          {item.footer__links.map((link, index) => (
                            <li key={index}>
                              <a href="#">{link.list}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="footer__copyright">
                  <p>
                    Copyright ©{" "}
                    <Link href="/">
                      <a>Arashi </a>
                    </Link>
                    all rights reserved. Powered by
                    <Link href="/">
                      <a> Theme_pure</a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="footer__social f-right">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/people/Arashi-Art/pfbid02BVniveuPwKeZpfdgXhZqd4iotSQFa1wkTEUmDWigVy7FhPujzmZ2i2TPQv7vvNJul/"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/arashiartdecor/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/arashiartdecor/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@arashiartdecor"
                        target="_blank"
                      >
                        <i className="fab fa-tiktok"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/arashiartdecor"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
