import React, { useState,useEffect } from 'react';
import "./index.css"
    export default function Engagement() {

        const ringTypes = [
            "Solitaire",
            "Halo",
            "Vintage",
            "Side Stone",
            "Three Stone",
            "Pave",
            "Hidden Halo",
          ];
        
          const [activeRing, setActiveRing] = useState("Solitaire");
          const [animateImage, setAnimateImage] = useState(false);
        
          const handleRingClick = (type) => {
            if (type !== activeRing) {
              setActiveRing(type);
              setAnimateImage(true);
            }
          };
        
          useEffect(() => {
            if (animateImage) {
              const timeout = setTimeout(() => setAnimateImage(false), 600);
              return () => clearTimeout(timeout);
            }
          }, [animateImage]);
        
        const [activeTab, setActiveTab] = useState("natural");
       
        const handleTabChange = (tab) => {
          if (tab !== activeTab) {
            setActiveTab(tab);
            setAnimateImage(true);
          }
        };
      
        // Remove animation class after 600ms
        useEffect(() => {
          if (animateImage) {
            const timeout = setTimeout(() => setAnimateImage(false), 600);
            return () => clearTimeout(timeout);
          }
        }, [animateImage]);
      
        const imageClass = `img-fluid transition-image ${animateImage ? 'image-hover' : ''}`;
      

  return (
<>
    <section className="hero_section_wrapper">
  <div className="container-fluid p-0 position-relative">
    <img
      src="images/engagement-rings-banner.webp"
      alt=""
      className="img-fluid w-100"
    />
    <div className="wrapper position-absolute text-center w-100 mb-5">
      <h2 className="fs-1 slide-title text-white">Engagement Rings</h2>
      <div className="content">
        <p className="text-white">
          Discover our treasure trove of unique engagement rings that will
          forever symbolize your love story.
        </p>
      </div>
      <div className="slide-btn-wrapper justify-content-center align-items-center gap-5">
        <a
          title="SHOP ENGAGEMENT RINGS"
          href="#"
          className="text-white btn border-button border my-2 p-2 rounded-0 fw-bold border-white"
        >
          SHOP ENGAGEMENT RINGS
        </a>
      </div>
    </div>
  </div>
</section>
  <section className="build_engagement_wrapper engagement-bulid-your-ring py-5">
    <div className="container">
      <div className="row">
        <div className="col-12 mb-4">
          <div className="section-heading text-center">
            <h2 className="section-header-sm section-header-reverse section-header-sb">
              2 EASY WAYS TO SHOP ENGAGEMENT RINGS
            </h2>
          </div>
        </div>
  
        <div className="col-12">
          <div className="row align-items-start">
            <div className="col-6 content">
              <h2 className="section-header mb-2">
                <span>1</span> Build Your Engagement Ring
              </h2>
              <ul className="mb-0">
                <li>
                  <span>1. CHOOSE A SETTING</span>
                  <p>Select your engagement ring metal and style.</p>
                </li>
                <li>
                  <span>2. CHOOSE A DIAMOND</span>
                  <p>
                    Select either a natural or lab certified diamond in your
                    preferred shape &amp; size.
                  </p>
                </li>
                <li>
                  <span>3. COMPLETE YOUR RING</span>
                  <p>Fill in your size and complimentary engraving.</p>
                </li>
              </ul>
              <a
                title="SHOP ENGAGEMENT RINGS"
                href="#"
                className="btn border-button border my-2 p-2 rounded-0 fw-bold border-dark ms-5 mt-0 mb-2"
              >
                Build Your Ring
              </a>
            </div>
            <div className="col-6">
              <img
                src="images/build-your-engagement-ring.webp"
                alt=""
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
  
        <div className="col-12">
          <div className="row align-items-start">
            <div className="col-6">
              <img
                src="images/preset-engagement-ring.webp"
                alt=""
                className="img-fluid w-100"
              />
            </div>
            <div className="col-6">
              <div className="content">
                <h2 className="section-header">
                  <span>2</span> Preset Lab Grown Engagement Ring
                </h2>
                <ul>
                  <li>
                    <span>1. SELECT A RING</span>
                    <p>
                      Browse our curated collection of over 300 styles, selected
                      by our designers and ready to ship.
                    </p>
                  </li>
                  <li>
                    <span>2. CHOOSE A LAB DIAMOND</span>
                    <p>
                      Select your shape and size of the center stone, previously
                      paired by our in-house gemologists.
                    </p>
                  </li>
                  <li>
                    <span>3. COMPLETE YOUR RING</span>
                    <p>Fill in your ring size and get ready to be wowed.</p>
                  </li>
                </ul>
                <a
                  title="SHOP ENGAGEMENT RINGS"
                  href="#"
                  className="btn border-button border my-2 p-2 rounded-0 fw-bold border-dark ms-5 mt-0"
                >
                  EXPLORE LAB DIAMOND RINGS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="customize-engagement-ring hero_section_wrapper p-5">
  <div className="container position-relative">
    <img
      src="images/customize-engagement-ring.webp"
      alt=""
      className="img-fluid w-100"
    />
    <div className="wrapper position-absolute text-start w-50 mb-3 ps-5">
      <div className="content-inner medium-up--one-half">
        <div className="section-heading">
          <p className="sub-title text-white m-0">BECOME THE DESIGNER</p>
          <h2 className="text-white mb-5">Customize Your Engagement Ring</h2>
        </div>
        <p className="text-white">
          We offer fully customized engagement rings to give you more choice and the
          ability to express your individuality. Work exclusively with our in-house
          gemologists who will help you create a truly customized engagement ring.
        </p>
        <a
          title="SHOP ENGAGEMENT RINGS"
          href="#"
          className="text-white btn border-button border my-2 p-2 rounded-0 fw-bold border-white"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>

<section className="creste-your-own">
  <div className="container pb-5 px-5">
    <div className="row align-items-center mx-5">
      <div className="col-6">
        <img
          src="images/create-your-unique-ring_640x.webp"
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="col-6 ps-5">
        <div className="grid__item medium-up--one-half grid__item-content">
          <div className="content medium-up--text-left small--text-center">
            <h2 className="section-header-sm section-header-reverse section-header-sb">
              SEE OUR DESIGN PROCESS
            </h2>
            <h2 className="section-header">Create Your Unique Engagement Ring</h2>
            <p>
              We proudly specialize in designing and creating unique diamond engagement
              rings. Our team of in-house gemologists and designers adhere to the
              strictest quality control and attention to precise detail to ensure your
              dream ring becomes a reality.
            </p>
            <div className="btn-wrapper flex flex-wrap justify-content_center">
              <a
                title="SHOP ENGAGEMENT RINGS"
                href="#"
                className="text-dark btn border-button border my-2 p-2 rounded-0 fw-bold border-dark"
              >
                Start with a setting
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="Ring-collection pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <div className="section-heading text-center">
              <h2 className="section-header-sm section-header-reverse section-header-sb">
                RING COLLECTIONS
              </h2>
            </div>
          </div>

          <div className="col-12">
            <div className="main">
              {/* Filter Buttons with Separators */}
              <div className="d-flex justify-content-center flex-wrap mb-4">
                {ringTypes.map((type, index) => (
                  <React.Fragment key={type}>
                    <button
                      className={`btn border-0 fw-bold text-uppercase bg-transparent ${
                        activeRing === type ? "text-dark" : "text-muted"
                      }`}
                      onClick={() => handleRingClick(type)}
                    >
                      {type}
                    </button>
                    {index < ringTypes.length - 1 && (
                      <span className="text-muted mx-2">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Ring Content */}
              <div className="slider slider-for px-5 mx-5">
                {ringTypes.map((type, index) => (
                  <div key={index}>
                    {activeRing === type && (
                      <div className="row align-items-center">
                        <div className="col-6">
                          <div className="medium-up--one-half block-content medium-up--text-left">
                            <h3 className="section-header-sm mb-5">{type}</h3>
                            <p>
                              Discover the captivating allure of {type.toLowerCase()} engagement rings, the epitome
                              of classic beauty. These engagement rings for women feature a single diamond
                              that effortlessly sparkles on its own, drawing all eyes to its mesmerizing
                              brilliance. The simplicity of the {type.toLowerCase()} setting allows the diamond to
                              take center stage, showcasing its exquisite cut, clarity and carat weight.
                            </p>
                            <a
                              title="SHOP ENGAGEMENT RINGS"
                              href="#"
                              className="btn border-button border my-2 p-2 rounded-0 fw-bold border-dark mt-0"
                            >
                              EXPLORE LAB DIAMOND RINGS
                            </a>
                          </div>
                        </div>
                        <div className="col-6">
                          <img
                            src="images/solitaire_540x.webp"
                            alt={`${type} Ring`}
                            className="img-fluid hover-zoom"
                            style={{
                              transition: "transform 0.3s ease-in-out",
                              transform:
                                activeRing === type ? "scale(1.05)" : "scale(1)",
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<section className="home-preview">
  <div className="container pb-5">
    <div className="row engagement-bulid-your-ring align-items-center">
      <div className="col-8 p-0">
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="vedio/home-preview.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="col-4 ps-5">
        <div className="grid__content medium-up--one-half small--text-center">
          <p className="section-sub-title m-0">TRY BEFORE YOU BUY</p>
          <h2 className="section-header-lg fst-italic">Home Preview</h2>
          <div className="content">
            <p>Seeking love at first sight? Try two rings at home &amp; find the right one for you.</p>
            <ul className="features p-0">
              <li>3D PRINTED</li>
              <li>FINELY CRAFTED</li>
              <li>CUSTOM REPLICA</li>
              <li>COMPLIMENTARY CONSULTATION</li>
            </ul>
          </div>
          <a
            title="SHOP ENGAGEMENT RINGS"
            href="#"
            className="btn border-button border my-2 p-2 rounded-0 fw-bold border-dark mt-0"
            tabIndex="0"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="creste-your-own py-5">
      <div className="container px-5">
        <div className="text-center mb-4">
          <h2 className="section-header">DIAMOND EDUCATION</h2>
          <div className="d-flex justify-content-center gap-4 mt-3">
            <button
              className={`text-uppercase border-0 bg-transparent fw-bold ${
                activeTab === "natural" ? "text-dark" : "text-muted"
              }`}
              onClick={() => handleTabChange("natural")}
            >
              NATURAL DIAMOND
            </button>
            <span className="text-muted">|</span>
            <button
              className={`text-uppercase border-0 bg-transparent fw-bold ${
                activeTab === "lab" ? "text-dark" : "text-muted"
              }`}
              onClick={() => handleTabChange("lab")}
            >
              LAB DIAMOND
            </button>
          </div>
        </div>

        {activeTab === "natural" && (
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="fw-bold mb-3 fst-italic">Natural Diamond</h3>
              <p>
                Natural Diamonds are exquisite gemstones that form deep within the Earth’s mantle under immense pressure and heat over millions of years. These mined diamonds possess unparalleled beauty, durability and rarity. Their unique geological origin and natural formation process make them highly coveted in the world of luxury jewelry. Explore our collection of natural diamonds and adorn yourself with a timeless testament of nature’s brilliance.
              </p>
              <a
                href="#"
                className="btn border border-dark rounded-0 fw-bold mt-3 px-3 py-2"
              >
                Shop Now
              </a>
            </div>
            <div className="col-md-6">
              <img
                src="images/solitaire_540x.webp"
                alt="Natural Diamond"
                className={imageClass}
              />
            </div>
          </div>
        )}

        {activeTab === "lab" && (
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="fw-bold mb-3 fst-italic">Lab Grown Diamond</h3>
              <p>
                Lab-grown diamonds possess the same physical and chemical properties as natural diamonds except they are created through advanced technology that replicate the conditions found in the Earth. Lab-created diamonds offer a sustainable and ethical alternative to mined diamonds. With their exceptional brilliance, durability and affordability, lab diamonds are a popular choice for conscious consumers seeking exquisite jewelry without compromising on quality or environmental impact.
              </p>
              <a
                href="#"
                className="btn border border-dark rounded-0 fw-bold mt-3 px-3 py-2"
              >
                Shop Now
              </a>
            </div>
            <div className="col-md-6">
              <img
                src="images/solitaire_540x.webp"
                alt="Lab Diamond"
                className={imageClass}
              />
            </div>
          </div>
        )}
      </div>
    </section>

<section className="accordian_class">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-header-sm section-header-reverse section-header-sb mb-5">
            WE’VE GOT ANSWERS TO YOUR QUESTIONS
          </h2>
        </div>
        <div className="accordion mx-5 pb-5 px-5" id="accordionExample">
          {/* Accordion Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How do I choose a unique diamond for an engagement ring?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="m-0">
                  To choose a unique diamond for an engagement ring, consider factors like shape, cut, color, clarity, carat weight, and certification. Look for a shape that reflects your style, an excellent cut for maximum sparkle, and a color and clarity grade that suits your preferences...
                </p>
              </div>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What ring setting makes diamond look the biggest?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="m-0">
                  If you're looking to make your diamond appear larger, consider a halo setting, which surrounds the center diamond with smaller diamonds or gemstones...
                </p>
              </div>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Is $3000 cheap for an engagement ring?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="m-0">
                  Determining the affordability of an engagement ring is influenced by factors like personal preferences, budget, and individual financial circumstances...
                </p>
              </div>
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How do I determine right engagement ring size?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="m-0">
                  To determine the right engagement ring size, consider the width of the ring and potential finger fluctuations due to factors like temperature and humidity...<br />
                  To measure ring size at home, you can try using a few methods. One option is to use a piece of string or a thin strip of paper...
                  <br />
                  Keep in mind that these at-home methods may not be as accurate as professional measurements...
                </p>
              </div>
            </div>
          </div>

          {/* Accordion Item 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Can I design my own engagement ring?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="m-0">
                  Absolutely! You have the opportunity to design your own engagement ring. You can begin the process by selecting the setting that appeals to you...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </>
  )
}


