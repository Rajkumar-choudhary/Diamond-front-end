import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-12 col-md-2">
            <nav className="site-footer__item-inner site-footer__item-inner--link_list" aria-label="Footer Navigation">
              <p className="footer-nav__title acc-title text-white">Company</p>
              <ul className="site-footer__linklist acc-content p-0 list-unstyled">
                <li className="site-footer__linklist-item">
                  <a href="about.html" className="text-white">About</a>
                </li>
                <li className="site-footer__linklist-item">
                  <a href="contact.html" className="text-white">Contact us</a>
                </li>
                <li className="site-footer__linklist-item">
                  <a href="#" className="text-white">Press</a>
                </li>
                <li className="site-footer__linklist-item">
                  <a href="#" className="text-white">Reviews</a>
                </li>
                <li className="site-footer__linklist-item">
                  <a href="#" className="text-white">Radiance Rewards</a>
                </li>
                <li className="site-footer__linklist-item">
                  <a href="#" className="text-white">Home Preview FAQs</a>
                </li>
                <li className="site-footer__linklist-item">
                  <a href="#" className="text-white">Monthly Payment Option</a>
                </li>
                <li className="site-footer__linklist-item">
                  <a href="#" className="text-white">Affiliate Program</a>
                </li>
                <li className="site-footer__linklist-item">
                  <a href="terms-conditions.html" className="text-white">Terms of Use</a>
                </li>
                <li className="site-footer__linklist-item">
                  <a href="policy.html" className="text-white">Privacy Policy</a>
                </li>
                <li className="site-footer__linklist-item">
                  <a href="#" className="text-white">Site Map</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-2">
  <div className="site-footer__item-inner site-footer__item-inner--link_list">
    <p className="footer-nav__title acc-title text-white">Education</p>
    <ul className="site-footer__linklist p-0 acc-content">
      <li id="footer-link_diamonds" className="site-footer__linklist-item">
        <a href="">Diamonds</a>
      </li>
      <li id="footer-link_engagement" className="site-footer__linklist-item">
        <a href="">Engagement</a>
      </li>
      <li id="footer-link_wedding-bands" className="site-footer__linklist-item">
        <a href="">Wedding bands</a>
      </li>
      <li id="footer-link_gemstones" className="site-footer__linklist-item">
        <a href="">Gemstones</a>
      </li>
      <li id="footer-link_jewelry" className="site-footer__linklist-item">
        <a href="">Jewelry</a>
      </li>
      <li id="footer-link_conflict-diamond-policy" className="site-footer__linklist-item">
        <a href="">Conflict diamond policy</a>
      </li>
      <li id="footer-link_lab-grown-diamonds" className="site-footer__linklist-item">
        <a href="">Lab grown diamonds</a>
      </li>
      <li id="footer-link_metals" className="site-footer__linklist-item">
        <a href="">Metals</a>
      </li>
      <li id="footer-link_blog" className="site-footer__linklist-item">
        <a href="">Blog</a>
      </li>
    </ul>
  </div>
</div>

          <div className="col-2">
  <div className="site-footer__item-inner site-footer__item-inner--link_list">
    <p className="footer-nav__title acc-title text-white">Shop</p>
    <ul className="site-footer__linklist acc-content p-0">
      {[
        "Diamonds",
        "Engagement rings",
        "Bands for him",
        "Bands for her",
        "Home preview",
        "Gemstone rings",
        "Preset rings",
        "Custom rings",
        "Fine jewelry",
      ].map((item, i) => (
        <li key={i} className="site-footer__linklist-item">
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  </div>
</div>

<div className="col-2">
  <div className="site-footer__item-inner site-footer__item-inner--link_list">
    <p className="footer-nav__title acc-title text-white">Customer care</p>
    <ul className="site-footer__linklist acc-content p-0">
      {[
        "Schedule an appointment",
        "Free shipping",
        "Free Returns",
        "Extended warranty",
        "Lifetime warranty",
        "Financing",
        "Insurance",
        "ID.me",
        "Accessibilty",
      ].map((item, i) => (
        <li key={i} className="site-footer__linklist-item">
          <a href="#" id={item === "Accessibilty" ? "click_userway" : undefined}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>

<div className="col-3">
  <div className="site-footer__item-inner site-footer__item-inner--newsletter ">
    <div className="site-footer__logo text-center">
      <a className="site-footer__logo-link" href="/">AOD</a>
    </div>
    <div className="newsletter-title">
      <h3 className="footer-newsletter__title text-white text-center">
        Elevate Your <i>Everyday</i>.
      </h3>
      <p className="text-white text-center">
        Sign up for <strong>$100 OFF</strong> your first purchase
      </p>
    </div>

    <div className="site-footer__newsletter">
      <form
        className="klaviyo-form"
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#000",
          padding: 0,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}>
            <div style={{ flex: 1, backgroundColor: "#000" }}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
                required
                style={{
                  boxSizing: "border-box",
                  borderRadius: "2px",
                  padding: "0 0 0 28px",
                  height: "35px",
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  fontSize: "16px",
            
                }}
              />
            </div>
            <div style={{ margin: "0 auto" }}>
              <button
                type="submit"
                style={{
                  background: "#14344A",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "3px",
                  height: "35px",
                  padding: "0 10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <input type="submit" style={{ display: "none" }} aria-hidden="true" />
      </form>
    </div>

    <div className="social-icons_wrapper small--hide text-center">
  <ul className="gap-5 d-flex justify-content-center mt-5 p-0 list--inline site-footer__social-icons social-icons site-footer__icon-list justify-content_center">
    <li className="social-icons__item">
      <a
        className="social-icons__link"
        href="https://www.instagram.com/withclarityofficial/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-2x fa-instagram icon icon-instagram"></i>
      </a>
    </li>
    <li className="social-icons__item">
      <a
        className="social-icons__link"
        href="https://www.tiktok.com/@withclarityofficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-2x fa-tiktok icon icon-tiktok"></i>
      </a>
    </li>
    <li className="social-icons__item">
      <a
        className="social-icons__link"
        href="https://www.facebook.com/withclarityofficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-2x fa-facebook-f icon icon-facebook"></i>
      </a>
    </li>
    <li className="social-icons__item">
      <a
        className="social-icons__link"
        href="https://twitter.com/withclarity"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-2x fa-twitter icon icon-twitter"></i>
      </a>
    </li>
    <li className="social-icons__item">
      <a
        className="social-icons__link"
        href="https://www.youtube.com/withclarityofficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-2x fa-youtube icon icon-youtube"></i>
      </a>
    </li>
    <li className="social-icons__item">
      <a
        className="social-icons__link"
        href="https://www.pinterest.com/withclarityofficial/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-2x fa-pinterest-p icon icon-pinterest"></i>
      </a>
    </li>
  </ul>
</div>

  </div>
</div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
