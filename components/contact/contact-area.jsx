import ContactForm from "../common/form/contact-form";

const contactInfo = [
  {
    icon: "fal fa-map-marker-alt",
    title: "Location:",
    subtitle: "Mississauga, Ontario, Canada",
  },
  {
    icon: "fal fa-envelope-open-text",
    title: "Email:",
    subtitle: "arashiartdecor@gmail.com",
  },
  {
    icon: "fal fa-phone-alt",
    title: "Phone #:",
    subtitle: "(416) 994 9291",
  },
];

const ContactArea = () => {
  return (
    <>
      <section className="contact__area pb-100 pt-95">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="contact__info">
                <h3>Find us here.</h3>
                <ul className="mb-55">
                  {contactInfo.map((item) => (
                    <li key={item.title} className="d-flex mb-35">
                      <div className="contact__info-icon mr-20">
                        <i className={item.icon}></i>
                      </div>
                      <div className="contact__info-content">
                        <h6>{item.title}</h6>
                        <span>{item.subtitle}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p>
                  Connect with Arashi Furniture and embark on a journey towards
                  owning a truly bespoke piece of artisan luxury. We specialize
                  in creating custom tables designed to your exact
                  specifications. Our team is eager to answer your questions,
                  collaborate on your vision, and craft the perfect table or
                  accessory that reflects your unique style and preferences.
                  Whether you have a specific design in mind or want to explore
                  creative possibilities, we're here to help. Contact us today,
                  and together, let's turn your dream furniture into a reality.
                </p>

                <div className="contact__social">
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
                        href="https://twitter.com/arashiartdecor"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
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
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="contact__form">
                <h3>Contact Us.</h3>
                {/* contact form stat */}
                <ContactForm />
                {/* contact form stat */}
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
