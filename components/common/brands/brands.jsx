import Slider from "react-slick";

const settings = {
  autoplay: false,
  autoplaySpeed: 10000,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true, // Added to center the logo
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Brands = ({ df, h4 }) => {
  return (
    <>
      <section className={`client__area ${df ? "" : "pt-15 pb-140"}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {/* Added section title */}
              <div
                className={`section__title-wrapper text-center mb-55 ${
                  h4 ? "p-relative" : ""
                }`}
              >
                <div className="section__title mb-10">
                  <h2>Partners</h2>
                </div>
                <Slider {...settings}>
                  <div className="client__thumb">
                    <a
                      href="https://sawmillsid.ca/"
                      target="_blank"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/assets/img/client/client-1.jpg" alt="client" />
                    </a>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
