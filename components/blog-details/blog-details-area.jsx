import BlogSidebar from "../common/blog/blog-sidebar";
import { blogs } from "../../data";
import BlogForm from "../common/form/blog-form";
import Link from "next/link";

const reviews = [
  {
    img: "/assets/img/blog/comments/avater-1.png",
    name: "Siarhei Dzenisenka",
    time: "3 Months Ago",
    rating: 4,
  },
  {
    img: "/assets/img/blog/comments/avater-2.png",
    name: "Julias Roy",
    time: "6 Months Ago",
    rating: 4,
    children: true,
  },
  {
    img: "/assets/img/blog/comments/avater-3.png",
    name: "Arista Williamson",
    time: "6 Months Ago",
    rating: 4,
  },
];

const BlogDetailsArea = ({ item }) => {
  return (
    <>
      <section className="blog__area pt-55">
        <div className="container">
          <div className="row">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12">
                <h1>
                  <Link href={"/blog"}>
                    <a>{item.title}</a>
                  </Link>
                </h1>
                <div className="blog__meta">
                  <span>
                    By <a href="#">{item.author}</a>
                  </span>
                  <span>/ {item.date}</span>
                </div>
              </div>
              <div className="postbox__thumb w-img">
                <img src={item.img} alt="" />
              </div>
              <div className="postbox__wrapper mb-70">
                <div className="postbox__text mt-65">
                  <p>{item.fulldesc1}</p>
                </div>
                <div className="postbox__text">
                  <p>{item.fulldesc2}</p>
                </div>
                <article className="postbox format-quote mt-45 mb-50">
                  <div className="postbox__quote">
                    <blockquote>
                      <p>
                        {" "}
                        <i className="fas fa-quote-right"></i>
                        {item.quote}{" "}
                      </p>
                    </blockquote>
                  </div>
                </article>
                <div className="postbox__details-img w-img mb-60">
                  <img src={item.img2} alt="" />
                </div>
                <div className="postbox__text">
                  <p>{item.fulldesc3}</p>
                </div>
                <div className="postbox__text">
                  <p>{item.fulldesc4}</p>
                </div>
              </div>
              <div className="postbox__share mb-95">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="postbox__social">
                      <span>Share:</span>
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
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    {/* <div className="postbox__tag f-right">
                      <span>Tags :</span>
                      <a href="#">Furniture,</a>
                      <a href="#">Erentheme,</a>
                      <a href="#">Chair, </a>
                      <a href="#">Decor</a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="postbox__related-title">
                <h3>Other Blog Posts</h3>
              </div>
              <div className="postbox__related-item">
                <div className="row">
                  {blogs.slice(0, 2).map((blog, index) => (
                    <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                      <div className="blog__item mb-30">
                        <div className="blog__thumb fix">
                          <Link href={`/blog-details/${blog.id}`}>
                            <a className="w-img">
                              <img src={blog.img} alt="blog" />
                            </a>
                          </Link>
                        </div>
                        <div className="blog__content">
                          <h4>
                            <Link href={`/blog-details/${blog.id}`}>
                              <a>{blog.title}</a>
                            </Link>
                          </h4>
                          <div className="blog__meta">
                            <span>
                              By <a href="#">{blog.auhtor}</a>
                            </span>
                            <span>/ {blog.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="postbox__line mt-65"></div>
              {/* <div className="postbox__comments pt-90">
                <div className="postbox__comment-title mb-30">
                  <h3>Comments (32)</h3>
                </div>
                <div className="latest-comments mb-30">
                  <ul>
                    {reviews.map((review, index) => (
                      <li key={index} className={review.children ? 'children' : ''}>
                        <div className="comments-box">
                          <div className="comments-avatar">
                            <img src={review.img} alt="" />
                          </div>
                          <div className="comments-text">
                            <div className="avatar-name">
                              <h5>{review.name}</h5>
                              <span> - {review.time} </span>
                              <a className="reply" href="#">Leave Reply</a>
                            </div>
                            <div className="user-rating">
                              <ul>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fal fa-star"></i></a></li>
                              </ul>
                            </div>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for <span>“lorem ipsum”</span> will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
              {/* <div className="postbox__line mb-95"></div>
              <div className="post-comments-form mb-100">
                <div className="post-comments-title mb-30">
                  <h3>Leave A Reply</h3>
                </div>
                <BlogForm />
              </div> */}
            </div>
            {/* <div className="col-xl-3 col-lg-4">
              <BlogSidebar />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsArea;
