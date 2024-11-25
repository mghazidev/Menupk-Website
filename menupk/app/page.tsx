import React from "react";
import Script from "next/script";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <script src="/webflow.js" type="text/javascript"></script>
      </Head>
      {/* <div
        data-animation="default"
        className="navbar w-nav"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll="1"
        data-duration="500"
        data-doc-height="1"
      >
        <div className="container nav-container">
          <div className="nav-menu-container">
            <a
              href="index.html"
              aria-current="page"
              className="brand w-nav-brand w--current"
            >
              <img
                src="/images/M-1-01-1.svg"
                loading="lazy"
                width="Auto"
                alt=""
                className="brand"
              />
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div className="link-container">
                <div className="nav-link">
                  <a
                    href="#More"
                    className="link-block animation-01 w-inline-block"
                  >
                    <div>Features</div>
                    <div className="link-block-underline"></div>
                  </a>
                </div>
                <div className="nav-link">
                  <a
                    href="#Pricing"
                    className="link-block animation-01 w-inline-block"
                  >
                    <div>Pricing</div>
                    <div className="link-block-underline"></div>
                  </a>
                </div>
                <div className="nav-link">
                  <a
                    href="#Help"
                    className="link-block animation-01 w-inline-block"
                  >
                    <div>Help</div>
                    <div className="link-block-underline"></div>
                  </a>
                </div>
              </div>
              <div className="nav-buttons-container">
                <div className="nav-link">
                  <a
                    href="https://beta.menupk.com/signin"
                    className="link-block animation-01 w-inline-block"
                  >
                    <div>Sign in</div>
                    <div className="link-block-underline"></div>
                  </a>
                </div>
                <a href="contact" className="button w-button">
                  Book a Demo
                </a>
              </div>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="center-box">
                <img src="images/menu.svg" loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Navbar />
      <Hero />

      {/* <div className="section overflow-hidden">
        <div className="container">
          <div className="center-text">
            <div className="hero-text-holder">
              <div
                style={{
                  WebkitTransform:
                    "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  opacity: 0,
                }}
                className="animate-on-load-1st"
              >
                <div className="hero-text">
                  <span className="gradient-text">Revitalize</span> your
                  Restaurants Online Presence with Menu Pk.
                </div>
              </div>
              <div
                style={{
                  WebkitTransform:
                    "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  opacity: 0,
                }}
                className="animate-on-load-2st"
              >
                <div className="paragraph-hero">
                  <p>
                    Transform yout restaurant&#x27;s online presence seamlessly
                    with Menu PK, and connect with your customers like never
                    before. Experience hassle-free management with our
                    all-in-one solution designed exclusively for restaurant
                    owners
                  </p>
                </div>
              </div>
              <div
                style={{
                  WebkitTransform:
                    "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  opacity: 0,
                }}
                className="animate-on-load-3rd"
              >
                <div className="hero-button-holder">
                  <a href="contact" className="button arrow w-button">
                    Book a Demo Now
                  </a>
                  <a href="#More" className="gradient-link w-inline-block">
                    <div className="link-gradient-text">Learn More</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              WebkitTransform:
                "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 30%, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0,
            }}
            className="animate-on-load-4rd"
          >
            <div className="app-holder">
              <div className="app-container">
                <div className="app-main-photo">
                  <img
                    src="images/LP-1-.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 89vw, (max-width: 767px) 88vw, (max-width: 991px) 75vw, (max-width: 1439px) 76vw, 1035.1875px"
                    srcSet="images/LP-1--p-500.png 500w, images/LP-1--p-800.png 800w, images/LP-1--p-1080.png 1080w, images/LP-1--p-1600.png 1600w, images/LP-1--p-2000.png 2000w, images/LP-1--p-2600.png 2600w, images/LP-1--p-3200.png 3200w, images/LP-1-.png 3844w"
                    alt=""
                    className="app-photo"
                  />
                </div>
                <div className="app-info-01">
                  <img
                    src="images/Earnings-Image.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 100px, (max-width: 991px) 150px, 250px"
                    srcSet="images/Earnings-Image-p-500.jpeg 500w, images/Earnings-Image-p-800.jpeg 800w, images/Earnings-Image.jpg 952w"
                    alt=""
                    className="_100width"
                  />
                </div>
                <div className="app-info-02">
                  <img
                    src="images/LP-2-.png"
                    loading="lazy"
                    sizes="(max-width: 767px) 180px, (max-width: 991px) 280px, 506px"
                    srcSet="images/LP-2--p-500.png 500w, images/LP-2--p-800.png 800w, images/LP-2--p-1080.png 1080w, images/LP-2-.png 1125w"
                    alt=""
                    className="_100width"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="logo-grid-holder">
            <div className="w-layout-grid logo-grid">
              <div
                id="w-node-ddf35f60-4046-a5dc-8dfc-7a16218a2043-fcf188fa"
                className="logo-small-container"
              >
                <img
                  src="images/Logo01.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-ed6e05a7-8859-5c2e-bfa6-5a34d46c5535-fcf188fa"
                className="logo-small-container"
              >
                <img
                  src="images/Logo02.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-_38e6cc19-86ef-7eaa-1ab1-b4758b264793-fcf188fa"
                className="logo-small-container"
              >
                <img
                  src="images/Logo03.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-_2c5230ad-7a3e-1078-2648-792bc8a3d83f-fcf188fa"
                className="logo-small-container"
              >
                <img
                  src="images/Logo04.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-_4ffe437a-249e-b0bf-4319-d5ced5949c15-fcf188fa"
                className="logo-small-container"
              >
                <img
                  src="images/Logo05.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-a11f21d4-8fb0-6c15-87e3-d6c169a6536f-fcf188fa"
                className="logo-small-container"
              >
                <img
                  src="images/Logo06.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-_209d1c9a-5c8e-b2b8-a90f-cc9d58a26396-fcf188fa"
                className="logo-small-container"
              >
                <img
                  src="images/Logo07.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-_6c110cba-70eb-d829-f5bf-8ff72d91f759-fcf188fa"
                className="logo-small-container"
              >
                <img
                  src="images/Logo08.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-_0d8e1bb2-4dcf-58bc-ddb2-2969473a2235-fcf188fa"
                className="logo-small-container"
              >
                <img
                  src="images/Logo09.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
              <div
                id="w-node-afed102e-1e94-d6d2-0ddb-965b06c57825-fcf188fa"
                className="logo-small-container"
              >
                <img
                  src="images/Logo10.svg"
                  loading="lazy"
                  alt=""
                  className="logo-small"
                />
              </div>
            </div>
            <div className="fade-in-move-on-scroll">
              <p>Trusted by Top-tier product campanies</p>
            </div>
          </div>
        </div>
      </div> */}

      <div id="More" className="section">
        <div className="container _4em">
          <div className="center-text">
            <div className="fade-in-move-on-scroll">
              <h1 className="heading-4">From Menu to Masterpiece</h1>
            </div>
            <div className="paragraph-hero">
              <div className="fade-in-move-on-scroll">
                <p className="paragraph">
                  Instant Online presence, lasting Impression
                </p>
                <div
                  data-w-id="f5d98d6e-72d0-5fbe-f493-0258c8eb9a2c"
                  className="div-block-3"
                >
                  <p className="paragraph-2">Instant Online Presence</p>
                  <p className="paragraph-3">Integrated Order Processing</p>
                  <p className="paragraph-4">Efficient Restaurant Management</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky-slider-section">
            <div className="w-layout-grid sticky-slider-container customer-container-1">
              <div
                id="w-node-e7659bf2-eb7f-8216-03e0-acf8388e62cf-fcf188fa"
                className="sticky-text-container"
              >
                <div className="sticky-text-holder">
                  <div className="fade-in-move-on-scroll">
                    <h2 className="heading">
                      <span className="gradient-text">
                        <strong>AI-Powered </strong>
                      </span>
                      <strong>Perfection for Your Restaurant </strong>
                    </h2>
                  </div>
                  <div className="fade-in-move-on-scroll">
                    <div className="div-block-4">
                      <div
                        data-w-id="bac0c799-1997-59be-2eee-ddaafacfae95"
                        style={{ color: "rgb(255, 255, 255)" }}
                        className="text-block"
                      >
                        Digital Presence with Quick Setup
                      </div>
                      <p className="paragraph-6">
                        Customize your menu with AI tools , update promotional
                        offers in real-time, enhance customer engagement, and
                        manage operations hassle-free to boos your
                        restaurant&#x27;s reach and revenue.
                      </p>
                    </div>
                    <div className="div-block-5">
                      <div
                        data-w-id="3ae203ed-dbab-3795-7a54-919f117b9f9f"
                        style={{ color: "rgb(255, 255, 255)" }}
                        className="text-block"
                      >
                        AI-Powered Social Media Management
                      </div>
                      <p className="paragraph-6">
                        Rationalize your social media marketing with our
                        AI-powered smart management tool. Boost customer
                        engagement with our effortless marketing solutions.
                      </p>
                    </div>
                    <div className="div-block-0">
                      <div
                        data-w-id="3ae203ed-dbab-3795-7a54-919f117b9fa4"
                        style={{ color: "rgb(255, 255, 255)" }}
                        className="text-block"
                      >
                        Integrated QR Code
                      </div>
                      <p className="paragraph-6">
                        Empower your customers with convenience of exploring
                        menu options, leaving reviews, and making digital
                        payments without needing server assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-e7659bf2-eb7f-8216-03e0-acf8388e62eb-fcf188fa"
                className="slider-image-holder"
              >
                <div className="slider-sticky-holder _01">
                  <img
                    src="images/LP-3.png"
                    loading="lazy"
                    alt=""
                    className="feature-image"
                  />
                </div>
                <div className="slider-sticky-holder _02">
                  <img
                    src="images/LP-4.png"
                    loading="lazy"
                    alt=""
                    className="feature-image"
                  />
                </div>
                <div className="slider-sticky-holder _03">
                  <img
                    src="images/LP-5.png"
                    loading="lazy"
                    alt=""
                    className="feature-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="features-container">
            <div className="w-layout-grid grid-6-col extra-grid">
              <div
                id="w-node-_3e5d2762-47b3-db8b-cc0c-4a656fea09c8-fcf188fa"
                className="content"
              >
                <div className="fade-in-move-on-scroll">
                  <h2>
                    <strong>AI-Powered Perfection for Your Restaurant </strong>
                  </h2>
                </div>
                <div className="fade-in-move-on-scroll">
                  <div>
                    <div
                      data-w-id="6c589c6b-9bee-4ad3-8d71-39cee13a8035"
                      style={{ color: "rgb(255, 255, 255)" }}
                      className="text-block"
                    >
                      Digital Presence with Quick Setup
                    </div>
                    <p className="paragraph-6">
                      Customize your menu with AI tools , update promotional
                      offers in real-time, enhance customer engagement, and
                      manage operations hassle-free to boos your
                      restaurant&#x27;s reach and revenue.
                    </p>
                  </div>
                  <div>
                    <div
                      data-w-id="6d35db36-1295-7f9a-4e11-5e75a5840367"
                      style={{ color: "rgb(255, 255, 255)" }}
                      className="text-block"
                    >
                      AI-Powered Social Media Management
                    </div>
                    <p className="paragraph-6">
                      Rationalize your social media marketing with our
                      AI-powered smart management tool. Boost customer
                      engagement with our effortless marketing solutions.
                    </p>
                  </div>
                  <div>
                    <div
                      data-w-id="8be47fe3-f80e-2ffe-cbd4-610783b00f9e"
                      style={{ color: "rgb(255, 255, 255)" }}
                      className="text-block"
                    >
                      Integrated QR Code
                    </div>
                    <p className="paragraph-6">
                      Empower your customers with convenience of exploring menu
                      options, leaving reviews, and making digital payments
                      without needing server assistance.
                    </p>
                  </div>
                  <p className="paragraph-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas massa massa id arcu blandit dignissim contum
                    volutpat dolor fermentum, justo tempor.
                    <br />
                    <br />
                    Vulputate enim ante egestas commodo in.
                  </p>
                </div>
                <div className="list-container">
                  <ul role="list" className="w-list-unstyled">
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="images/Checkmark-Icon_1Checkmark-Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>Lorem ipsum dolor sit amet, consectetur.</div>
                      </div>
                    </li>
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="images/Checkmark-Icon_1Checkmark-Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>Elementum purus ac fermentum</div>
                      </div>
                    </li>
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="images/Checkmark-Icon_1Checkmark-Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>
                          Maecenas massa massa id arcu blandit dignissim
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id="w-node-_003d7288-52d9-6c3b-64c7-0783fd2a1b36-fcf188fa"
                className="image-container"
              >
                <img
                  src="images/Feature-Image-01.svg"
                  loading="lazy"
                  alt=""
                  className="feature-image"
                />
              </div>
            </div>
            <div className="center-text text1">
              <div className="fade-in-move-on-scroll">
                <h2 className="heading">
                  <span className="gradient-text">
                    <strong>Ordering Made Simple: </strong>
                  </span>
                  <strong>
                    Navigate Our Seamless Online System with Ease{" "}
                  </strong>
                </h2>
              </div>
            </div>
            <div
              data-w-id="5865c2f9-085b-8a6d-8622-8912e97a7255"
              className="w-layout-grid grid-6-col grad3"
            >
              <div
                id="w-node-_5865c2f9-085b-8a6d-8622-8912e97a7274-fcf188fa"
                className="image-container"
              >
                <img
                  src="images/LP-6.png"
                  loading="lazy"
                  alt="MenuPk digital menu"
                  className="feature-image image1"
                />
                <img
                  src="images/LP-7.png"
                  loading="lazy"
                  alt="Menupk - set your restaurant pin location"
                  className="feature-image image2"
                />
                <img
                  src="images/LP-8.png"
                  loading="lazy"
                  alt="MenuPk - Live orders board "
                  className="feature-image image3"
                />
              </div>
              <div
                id="w-node-_5865c2f9-085b-8a6d-8622-8912e97a7256-fcf188fa"
                className="content"
              >
                <div className="fade-in-move-on-scroll">
                  <div className="div-block-4">
                    <div
                      data-w-id="3ae203ed-dbab-3795-7a54-919f117b9f9a"
                      style={{ color: "rgb(255, 255, 255)" }}
                      className="text-block heading-1"
                    >
                      Efficient Menu Management
                    </div>
                    <p className="paragraph-6">
                      Boostyour customer satisfaction with our seamless online
                      ordering solution.Customize menus with visually appealing
                      graphics &amp; color themes, enticingdeals, and cohesive
                      dining experience.
                    </p>
                  </div>
                  <div className="div-block-4">
                    <div
                      data-w-id="a1a1098f-3343-67ea-1c9d-a13a9f058c56"
                      style={{ color: "rgb(255, 255, 255)" }}
                      className="text-block heading-2"
                    >
                      Smart Locator and Contact Management
                    </div>
                    <p className="paragraph-6">
                      Navigateeffortlessly with our Smart Locator and Contact
                      Management feature. Streamlineconnections and stay
                      informed with automatic updates.
                    </p>
                  </div>
                  <div className="div-block-4">
                    <div
                      data-w-id="5c4798cc-5190-88c4-99de-da69895bcd84"
                      style={{ color: "rgb(255, 255, 255)" }}
                      className="text-block heading-3"
                    >
                      Real-time Order Status and Tracking
                    </div>
                    <p className="paragraph-6">
                      Buildreal-time connections with your customers by sharing
                      live updates and ordertracking. Excite your customer with
                      live updates from the restaurant’s kitchento customer’s
                      doorstep.{" "}
                    </p>
                  </div>
                </div>
                <div className="list-container">
                  <ul role="list" className="w-list-unstyled">
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="images/Checkmark-Icon_1Checkmark-Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>Lorem ipsum dolor sit amet, consectetur.</div>
                      </div>
                    </li>
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="images/Checkmark-Icon_1Checkmark-Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>Elementum purus ac fermentum</div>
                      </div>
                    </li>
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="images/Checkmark-Icon_1Checkmark-Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>
                          Maecenas massa massa id arcu blandit dignissim
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-layout-grid grid-6-col">
              <div
                id="w-node-d5ddc8cd-8b38-cbf7-10e0-6066f87a2278-fcf188fa"
                className="content"
              >
                <div className="fade-in-move-on-scroll">
                  <div className="div-block-4">
                    <div
                      data-w-id="d5ddc8cd-8b38-cbf7-10e0-6066f87a227b"
                      style={{ color: "rgb(255, 255, 255)" }}
                      className="text-block"
                    >
                      Point of Sale
                    </div>
                    <p className="paragraph-6">
                      Sell in Person, Sales reporting and Analytics more with
                      our flexible point of sale, designed for your business.
                    </p>
                  </div>
                  <div className="div-block-4">
                    <div
                      data-w-id="d5ddc8cd-8b38-cbf7-10e0-6066f87a2280"
                      style={{ color: "rgb(255, 255, 255)" }}
                      className="text-block"
                    >
                      Mobility
                    </div>
                    <p className="paragraph-6">
                      Allows for transactions and management on-the-go with
                      mobile and cloud-base options.
                    </p>
                  </div>
                  <div className="div-block-4">
                    <div
                      data-w-id="d5ddc8cd-8b38-cbf7-10e0-6066f87a2285"
                      style={{ color: "rgb(255, 255, 255)" }}
                      className="text-block"
                    >
                      Customer Management
                    </div>
                    <p className="paragraph-6">
                      Records customer information and purchase history tio
                      enhance marketing efforts and customers services.
                    </p>
                  </div>
                  <div className="div-block-4">
                    <div
                      data-w-id="82992999-2a70-5bc0-a976-81ba45e12e3b"
                      style={{ color: "rgb(255, 255, 255)" }}
                      className="text-block"
                    >
                      Payment Processing
                    </div>
                    <p className="paragraph-6">
                      Facilitates a variety of payment methos including creadit
                      cards, cash, and mobile payments.
                    </p>
                  </div>
                </div>
                <div className="list-container">
                  <ul role="list" className="w-list-unstyled">
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="images/Checkmark-Icon_1Checkmark-Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>Lorem ipsum dolor sit amet, consectetur.</div>
                      </div>
                    </li>
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="images/Checkmark-Icon_1Checkmark-Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>Elementum purus ac fermentum</div>
                      </div>
                    </li>
                    <li>
                      <div className="list-holder">
                        <div className="list-icon-container">
                          <img
                            src="images/Checkmark-Icon_1Checkmark-Icon.png"
                            loading="lazy"
                            alt=""
                            className="_100width"
                          />
                        </div>
                        <div>
                          Maecenas massa massa id arcu blandit dignissim
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id="w-node-d5ddc8cd-8b38-cbf7-10e0-6066f87a2276-fcf188fa"
                className="image-container"
              >
                <img
                  src="images/LP-7.png"
                  loading="lazy"
                  alt="Menupk - set your restaurant pin location"
                  className="feature-image"
                />
              </div>
            </div>
          </div>
          <div className="center-text">
            <div className="fade-in-move-on-scroll">
              <h1 className="heading-4">Integrated Sales Management</h1>
            </div>
          </div>
          <div className="sticky-slider-section custom">
            <div className="w-layout-grid sticky-slider-container customer-container-1 custom1">
              <div
                id="w-node-_3fe0c083-ff78-8271-0c96-d537425dc02b-fcf188fa"
                className="slider-image-holder"
              >
                <div className="slider-sticky-holder _01 c1">
                  <img
                    src="images/LP-9.png"
                    loading="lazy"
                    alt="Menu Pk Dashboard - Deep analysis of your orders and sales"
                    className="feature-image"
                  />
                </div>
                <div className="slider-sticky-holder _02 c2">
                  <img
                    src="images/LP-10.png"
                    loading="lazy"
                    alt="MenuPk PoS - Take order from your mobile"
                    className="feature-image"
                  />
                </div>
                <div className="slider-sticky-holder _03 c3">
                  <img
                    src="images/LP-11.png"
                    loading="lazy"
                    alt="Menupk Online ordering - See exact pin location of your customer"
                    className="feature-image"
                  />
                </div>
                <div className="slider-sticky-holder _03 c4">
                  <img
                    src="images/LP-12.png"
                    loading="lazy"
                    alt="Take order from your mobile device"
                    className="feature-image"
                  />
                </div>
              </div>
              <div
                id="w-node-_3fe0c083-ff78-8271-0c96-d537425dc012-fcf188fa"
                className="sticky-text-container"
              >
                <div className="sticky-text-holder">
                  <div className="fade-in-move-on-scroll">
                    <div className="div-block-4">
                      <div
                        data-w-id="3fe0c083-ff78-8271-0c96-d537425dc01d"
                        style={{ color: "rgb(255, 255, 255)" }}
                        className="text-block"
                      >
                        Point of Sale
                      </div>
                      <p className="paragraph-6">
                        Sell in Person, Sales reporting and Analytics more with
                        our flexible point of sale, designed for your business.
                      </p>
                    </div>
                    <div className="div-block-5">
                      <div
                        data-w-id="3fe0c083-ff78-8271-0c96-d537425dc022"
                        style={{ color: "rgb(255, 255, 255)" }}
                        className="text-block"
                      >
                        Mobility
                      </div>
                      <p className="paragraph-6">
                        Allows for transactions and management on-the-go with
                        mobile and cloud-base options.
                      </p>
                    </div>
                    <div className="div-block-0">
                      <div
                        data-w-id="3fe0c083-ff78-8271-0c96-d537425dc027"
                        style={{ color: "rgb(255, 255, 255)" }}
                        className="text-block"
                      >
                        Customer Management
                      </div>
                      <p className="paragraph-6">
                        Records customer information and purchase history tio
                        enhance marketing efforts and customers services.
                      </p>
                    </div>
                    <div className="div-block-0">
                      <div
                        data-w-id="2222e157-1e7b-ba30-def9-6d66169b6b1e"
                        style={{ color: "rgb(255, 255, 255)" }}
                        className="text-block"
                      >
                        Payment Processing
                      </div>
                      <p className="paragraph-6">
                        Facilitates a variety of payment methods including
                        credit cards, cash, and mobile payments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        data-w-id="3e43162d-984f-8c1f-4e23-d1e996c3b76f"
        className="section scroll"
      >
        <div className="center-text">
          <div className="fade-in-move-on-scroll">
            <h1 className="heading-4">
              Navigate Our Seamless Online System with Ease
            </h1>
          </div>
        </div>
        <div className="camera">
          <div className="frame">
            <div className="item fade-in-move-on-scroll">
              <div className="div-block-11">
                <h1 className="item1-heading">Efficient Menu Management</h1>
                <p className="paragraph-8">
                  Boost your customer satisfaction with our seamless online
                  ordering solution. Customize menus with visually appealing
                  graphics &amp; color themes, enticing deals, and cohesive
                  dining experience.
                </p>
              </div>
              <img
                src="images/LP-6.png"
                loading="lazy"
                sizes="(max-width: 479px) 83vw, (max-width: 767px) 90vw, (max-width: 991px) 46vw, (max-width: 1439px) 42vw, 45vw"
                srcSet="images/LP-6-p-500.png 500w, images/LP-6-p-800.png 800w, images/LP-6.png 1080w"
                alt="MenuPk digital menu"
                className="item-1-image"
              />
            </div>
            <div className="item fade-in-move-on-scroll">
              <div className="div-block-11">
                <h1 className="item1-heading">
                  Smart Locator and Contact Management
                </h1>
                <p className="paragraph-8">
                  Navigate effortlessly with our Smart Locator and Contact
                  Management feature. Streamline connections and stay informed
                  with automatic updates.
                </p>
              </div>
              <img
                src="images/LP-7.png"
                loading="lazy"
                sizes="(max-width: 479px) 83vw, (max-width: 767px) 90vw, (max-width: 991px) 46vw, (max-width: 1439px) 42vw, 45vw"
                srcSet="images/LP-7-p-500.png 500w, images/LP-7-p-800.png 800w, images/LP-7.png 1080w"
                alt="Menupk - set your restaurant pin location"
                className="item-1-image"
              />
            </div>
            <div className="item fade-in-move-on-scroll">
              <div className="div-block-11">
                <h1 className="item1-heading">
                  Real-time order Status and Tracking
                </h1>
                <p className="paragraph-8">
                  Build real-time connections with your customers by sharing
                  live updates and order tracking. Excite your customer with
                  live updates from the restaurant&#x27;s kitchen to
                  customer&#x27;s doorstep.
                </p>
              </div>
              <img
                src="images/LP-8.png"
                loading="lazy"
                sizes="(max-width: 479px) 83vw, (max-width: 767px) 90vw, (max-width: 991px) 46vw, (max-width: 1439px) 42vw, 45vw"
                srcSet="images/LP-8-p-500.png 500w, images/LP-8-p-800.png 800w, images/LP-8.png 1080w"
                alt="MenuPk - Live orders board "
                className="item-1-image"
              />
            </div>
            <div className="item fade-in-move-on-scroll">
              <div className="div-block-11">
                <h1 className="item1-heading">Food Inventory Management</h1>
                <p className="paragraph-8">
                  Features real-time data visualization for orders, inventory,
                  customer interactions and control panel for management.
                </p>
              </div>
              <img
                src="images/iPad-Pro-12.9-inch-Space-Gray-Mockup-1.png"
                loading="lazy"
                sizes="(max-width: 479px) 83vw, (max-width: 767px) 90vw, (max-width: 991px) 46vw, (max-width: 1439px) 42vw, 45vw"
                srcSet="images/iPad-Pro-12.9-inch-Space-Gray-Mockup-1-p-500.png 500w, images/iPad-Pro-12.9-inch-Space-Gray-Mockup-1-p-800.png 800w, images/iPad-Pro-12.9-inch-Space-Gray-Mockup-1.png 1024w"
                alt=""
                className="item-1-image"
              />
            </div>
            <div className="item fade-in-move-on-scroll">
              <div className="div-block-11">
                <h1 className="item1-heading">
                  Convenient Delivery &amp; Payment
                </h1>
                <p className="paragraph-8">
                  Hassle-free delivery to the chosen location, easy COD payment
                  optionfor a seamless transaction and enjoy your favorite
                  dishes anytime, anywhere, with just a few clicks.
                </p>
              </div>
              <img
                src="images/_Mockups--6.png"
                loading="lazy"
                sizes="(max-width: 479px) 83vw, (max-width: 767px) 90vw, (max-width: 991px) 46vw, (max-width: 1439px) 42vw, 45vw"
                srcSet="images/_Mockups--6-p-500.png 500w, images/_Mockups--6-p-800.png 800w, images/_Mockups--6.png 1080w"
                alt=""
                className="item-1-image"
              />
            </div>
          </div>
        </div>
      </div> */}
      <Slider />

      <div id="Features" className="section grey-section">
        <div className="container _6em">
          <div className="center-text">
            <div className="fade-in-move-on-scroll">
              <h1>Industry insights to keep you moving forward</h1>
            </div>
            <div className="paragraph-hero">
              <div className="fade-in-move-on-scroll">
                <p>
                  Get latest updates on future envision to strategize your next
                  move in e-commerce business.
                </p>
              </div>
            </div>
          </div>
          <div className="sticky-slider-section">
            <div className="w-layout-grid sticky-slider-container">
              <div className="sticky-text-container">
                <div className="sticky-text-holder">
                  <div className="fade-in-move-on-scroll">
                    <h2 className="no-margins">Digitize your Future</h2>
                  </div>
                  <div className="fade-in-move-on-scroll">
                    <p>
                      Embark on the journey of digitization with Menu Pk. and
                      take your restaurant, food cart, or home chef business to
                      next level with innovative business solutions and high-end
                      tech features.
                    </p>
                  </div>
                  <div className="list-container">
                    <ul role="list" className="w-list-unstyled">
                      <li>
                        <div className="list-holder">
                          <div className="list-icon-container">
                            <img
                              src="images/Checkmark-Icon_1Checkmark-Icon.png"
                              loading="lazy"
                              alt=""
                              className="_100width"
                            />
                          </div>
                          <div>Easy to use and understand</div>
                        </div>
                      </li>
                      <li>
                        <div className="list-holder">
                          <div className="list-icon-container">
                            <img
                              src="images/Checkmark-Icon_1Checkmark-Icon.png"
                              loading="lazy"
                              alt=""
                              className="_100width"
                            />
                          </div>
                          <div>Accessible from anywhere</div>
                        </div>
                      </li>
                      <li>
                        <div className="list-holder">
                          <div className="list-icon-container">
                            <img
                              src="images/Checkmark-Icon_1Checkmark-Icon.png"
                              loading="lazy"
                              alt=""
                              className="_100width"
                            />
                          </div>
                          <div>
                            Auto sync between devices with the latest data
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_82187d72-78de-76a1-d56b-c9a74902fc66-fcf188fa"
                className="slider-image-holder"
              >
                <div className="slider-sticky-holder _01">
                  <img
                    src="images/LP-13.png"
                    loading="lazy"
                    alt=""
                    className="feature-image"
                  />
                </div>
                <div className="slider-sticky-holder _02">
                  <img
                    src="images/LP-14.png"
                    loading="lazy"
                    alt=""
                    className="feature-image"
                  />
                </div>
                <div className="slider-sticky-holder _03">
                  <img
                    src="images/LP-15.png"
                    loading="lazy"
                    alt=""
                    className="feature-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container _4em">
          <div className="grid-6-col">
            <div
              id="w-node-_9acb6e39-e985-ebce-2ef5-19ba02513fee-fcf188fa"
              className="title-container"
            >
              <div className="fade-in-move-on-scroll">
                <h1>
                  Start your <span className="gradient-text">Restaurant</span>{" "}
                  Journey with Menu Pk.
                </h1>
              </div>
              <div className="fade-in-move-on-scroll">
                <p className="paragraph-white">
                  Menu Pk seamlessly integrates with populaar third-party apps
                  and business solutions. Plus, square APIs let you build custom
                  integrations into your own software.
                </p>
              </div>
              <div className="top-margin-l">
                <div className="fade-in-move-on-scroll">
                  <a href="contact" className="button arrow w-button">
                    Request a demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-grid-holder">
            <div className="w-layout-grid feature-cards">
              <div
                id="w-node-_80744953-1164-62c7-834a-49586763b7b6-fcf188fa"
                className="feature-cards-container"
              >
                <div className="feature-card-paddings">
                  <div className="feature-card-big-app-holder">
                    <div className="relative">
                      <div className="fade-in-move-on-scroll">
                        <h4 className="no-margins">
                          Design with real native elements
                        </h4>
                      </div>
                      <div className="fade-in-move-on-scroll">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="app-gardient-top"></div>
                    <div className="full-app-image-container">
                      <img
                        src="images/20.png"
                        loading="lazy"
                        alt="Admin Dashboard for Online Ordering - Comprehensive Order and Sales Overview in Karachi, Pakistan"
                        className="full-app-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_5db75681-33d3-b0fb-2e77-0a4c1ef35b70-fcf188fa"
                className="feature-cards-container _02"
              >
                <div className="feature-card-paddings">
                  <div className="feature-card-big-app-holder _02">
                    <div className="relative">
                      <div className="fade-in-move-on-scroll">
                        <h4 className="no-margins">Real Time Data</h4>
                      </div>
                      <div className="fade-in-move-on-scroll">
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <div className="app-gardient-bot"></div>
                    <div className="app-gardient-top"></div>
                    <div className="phone-container">
                      <div className="phone-image-container">
                        <img
                          src="images/17.png"
                          loading="lazy"
                          alt=""
                          className="iphone-image"
                        />
                      </div>
                      <div className="iphone-screen-image-container">
                        <img
                          src="images/Iphone-App-Image.jpg"
                          loading="lazy"
                          sizes="100vw"
                          srcSet="images/Iphone-App-Image-p-500.jpeg 500w, images/Iphone-App-Image.jpg 704w"
                          alt=""
                          className="iphone-screen-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-grid feature-cards">
              <div
                id="w-node-_6eda20d0-05fc-a501-ad3d-6ae5e36c303e-fcf188fa"
                className="feature-cards-container _02"
              >
                <div className="feature-card-paddings">
                  <div className="feature-card-big-app-holder _02">
                    <div className="relative">
                      <div className="fade-in-move-on-scroll">
                        <h4 className="no-margins">Quick overview</h4>
                      </div>
                      <div className="fade-in-move-on-scroll">
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <div className="app-gardient-bot"></div>
                    <div className="app-gardient-top"></div>
                    <div className="phone-container _02">
                      <div className="phone-image-container">
                        <img
                          src="images/18.png"
                          loading="lazy"
                          alt=""
                          className="iphone-image"
                        />
                      </div>
                      <div className="iphone-screen-image-container">
                        <img
                          src="images/Iphone-App-Image.jpg"
                          loading="lazy"
                          sizes="100vw"
                          srcSet="images/Iphone-App-Image-p-500.jpeg 500w, images/Iphone-App-Image.jpg 704w"
                          alt=""
                          className="iphone-screen-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_6eda20d0-05fc-a501-ad3d-6ae5e36c3031-fcf188fa"
                className="feature-cards-container"
              >
                <div className="feature-card-paddings">
                  <div className="feature-card-big-app-holder">
                    <div className="relative">
                      <div className="fade-in-move-on-scroll">
                        <h4 className="no-margins">
                          Don&#x27;t miss anything important
                        </h4>
                      </div>
                      <div className="fade-in-move-on-scroll">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="full-app-image-container _02">
                      <img
                        src="images/LP-19.png"
                        loading="lazy"
                        alt="Restaurant Sales overview &amp; analytics "
                        className="full-app-image"
                      />
                    </div>
                    <div className="app-gardient-bot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Pricing" className="section">
        <div className="container _6em">
          <div className="center-text">
            <div className="fade-in-move-on-scroll">
              <h1>Our payment plan is easy to understand</h1>
            </div>
          </div>
          <div className="payment-holder">
            <div
              data-current="Tab 2"
              data-easing="ease"
              data-duration-in="300"
              data-duration-out="100"
              className="tabs w-tabs"
            >
              <div className="tabs-menu w-tab-menu">
                <a
                  data-w-tab="Tab 1"
                  className="tab-link right-side w-inline-block w-tab-link"
                >
                  <div className="tab-text">Try Basic</div>
                </a>
                <a
                  data-w-tab="Tab 2"
                  className="tab-link w-inline-block w-tab-link w--current"
                >
                  <div className="tab-text">Try Pro</div>
                </a>
              </div>
              <div className="tabs-content w-tab-content">
                <div data-w-tab="Tab 1" className="w-tab-pane">
                  <div className="tab-grid">
                    <div
                      id="w-node-_55eeaba3-9b54-f591-debf-2f656f5641f6-fcf188fa"
                      className="payment-tab-holder"
                    >
                      <div className="payment-padding">
                        <div className="fade-in-move-on-scroll">
                          <h1 className="no-margins">Basic</h1>
                        </div>
                        <div className="fade-in-move-on-scroll">
                          <div className="center-text">
                            <div className="payment-number-holder">
                              <h1 className="no-margins">pkr</h1>
                              <div className="payment-number-container">
                                <div className="plan-number">2</div>
                                <h1 className="no-margins">,999</h1>
                              </div>
                            </div>
                            <p>Per month</p>
                          </div>
                        </div>
                        <div className="fade-in-move-on-scroll _100width">
                          <div className="top-margin-l _100width">
                            <div className="payment-button-holder">
                              <a
                                href="https://beta.menupk.com/onboardrestaurant/register"
                                className="button w-button"
                              >
                                Start Free Trail
                              </a>
                              <a
                                href="https://beta.menupk.com/signin"
                                className="gradient-link w-inline-block"
                              >
                                <div className="link-gradient-text grey-full">
                                  Sing in &amp; manage your account
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-bbe64543-f8b8-e245-b98f-f12add5ba78e-fcf188fa"
                      className="content"
                    >
                      <div className="tab-text-holder">
                        <div className="fade-in-move-on-scroll">
                          <h2 className="no-margins">
                            Try Our product for free for 7 days
                          </h2>
                        </div>
                        <div className="fade-in-move-on-scroll">
                          <p className="paragraph-9">
                            No credit card is required, start for free, and pick
                            a plan later. You can cancel anytime.
                          </p>
                        </div>
                        <div className="fade-in-move-on-scroll">
                          <div className="w-layout-grid grid-list">
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Digital Menu</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Feedback form</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Exact pin location</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Social media links</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Youtube videos</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Facebook videos</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Tiktok videos</div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                  <div className="tab-grid">
                    <div
                      id="w-node-_21ad6684-3158-f9d9-417c-29f08a721e3e-fcf188fa"
                      className="payment-tab-holder"
                    >
                      <div className="payment-padding">
                        <div className="fade-in-move-on-scroll">
                          <h1 className="no-margins">Pro</h1>
                        </div>
                        <div className="fade-in-move-on-scroll">
                          <div className="center-text">
                            <div className="payment-number-holder">
                              <h1 className="no-margins">pkr</h1>
                              <div className="payment-number-container">
                                <div className="plan-number">9</div>
                                <h1 className="no-margins">,999</h1>
                              </div>
                            </div>
                            <p>Per month</p>
                          </div>
                        </div>
                        <div className="fade-in-move-on-scroll _100width">
                          <div className="top-margin-l _100width">
                            <div className="payment-button-holder">
                              <a
                                href="https://beta.menupk.com/onboardrestaurant/register"
                                className="button w-button"
                              >
                                Start Free Trail
                              </a>
                              <a
                                href="https://beta.menupk.com/signin"
                                className="gradient-link w-inline-block"
                              >
                                <div className="link-gradient-text grey-full">
                                  Sing in &amp; manage your account
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_21ad6684-3158-f9d9-417c-29f08a721e57-fcf188fa"
                      className="content"
                    >
                      <div className="tab-text-holder">
                        <div className="fade-in-move-on-scroll">
                          <h2 className="no-margins">
                            Try Our product for free for 7 days
                          </h2>
                        </div>
                        <div className="fade-in-move-on-scroll">
                          <p>
                            No credit card is required, start for free, and pick
                            a plan later. You can cancel anytime.
                          </p>
                        </div>
                        <div className="fade-in-move-on-scroll">
                          <div className="w-layout-grid grid-list">
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Online Ordering Portal</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Dashboard</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Sales Report</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Live Order Update</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Qr code generation</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Custom Domain</div>
                                </div>
                              </li>
                            </ul>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Reviews Management</div>
                                </div>
                              </li>
                            </ul>
                            <ul
                              id="w-node-ad9d8c2a-e638-45f4-0645-3e1e5420f152-fcf188fa"
                              role="list"
                              className="w-list-unstyled"
                            >
                              <li>
                                <div className="list-holder">
                                  <div className="list-icon-container">
                                    <img
                                      alt=""
                                      loading="lazy"
                                      src="images/Checkmark-Icon_1Checkmark-Icon.png"
                                      className="_100width"
                                    />
                                  </div>
                                  <div>Analytics</div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container _6em">
          <div className="center-text">
            <div className="fade-in-move-on-scroll">
              <h1>Connect to what you actually need</h1>
            </div>
          </div>
          <div className="connect-section-container">
            <div className="w-layout-grid connect-grid-container">
              <div
                id="w-node-d008f252-532e-9d09-d9c2-0bb50db72bc3-fcf188fa"
                className="company-avatar-container"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _01"
                >
                  <img
                    src="images/Company-Avatar-02.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-_6b36a120-b831-13db-9104-e521eb83e706-fcf188fa"
                className="company-avatar-container"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _02"
                >
                  <img
                    src="images/Company-Avatar-05.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-_8689b8b6-e83a-0577-b4e9-43bb27f11736-fcf188fa"
                className="company-avatar-container bot"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _03"
                >
                  <img
                    src="images/Company-Avatar-06.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-_4f1d5286-8618-b7c4-8f9b-154d93084005-fcf188fa"
                className="company-avatar-container up"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _04"
                >
                  <img
                    src="images/Company-Avatar-01.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-_52b3093c-671c-ec38-a078-3b81fa20f408-fcf188fa"
                className="company-avatar-container"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _05"
                >
                  <img
                    src="images/Company-Avatar-07.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-e3acfc95-87cd-c92c-4015-0873834ac1d1-fcf188fa"
                className="company-avatar-container random"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _06"
                >
                  <img
                    src="images/Company-Avatar-04.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-ab6fd3a9-0145-6a3e-94fc-91330bb0f431-fcf188fa"
                className="company-avatar-container random"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _07"
                >
                  <img
                    src="images/Company-Avatar-03.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-_2bb55183-bd7a-9bae-a4c9-ae37c11720c5-fcf188fa"
                className="company-avatar-container bot"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _08"
                >
                  <img
                    src="images/Company-Avatar-08.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-_05e15299-d605-b9eb-85f8-c9e4e84a86e4-fcf188fa"
                className="company-avatar-container bot"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _09"
                >
                  <img
                    src="images/Company-Avatar-15.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-a9b6046f-debb-78ae-3ea8-b3631ff554a0-fcf188fa"
                className="company-avatar-container up hide"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _10"
                >
                  <img
                    src="images/Company-Avatar-18.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
            </div>
            <div className="w-layout-grid connect-grid-container">
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2dd-fcf188fa"
                className="company-avatar-container"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _11"
                >
                  <img
                    src="images/Company-Avatar-17.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2e2-fcf188fa"
                className="company-avatar-container bot"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _12"
                >
                  <img
                    src="images/Company-Avatar-18.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2e7-fcf188fa"
                className="company-avatar-container bot"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _13"
                >
                  <img
                    src="images/Company-Avatar-19.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2ec-fcf188fa"
                className="company-avatar-container up"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _14"
                >
                  <img
                    src="images/Company-Avatar-20.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2f1-fcf188fa"
                className="company-avatar-container"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _15"
                >
                  <img
                    src="images/Company-Avatar-09.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2f6-fcf188fa"
                className="company-avatar-container"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _16"
                >
                  <img
                    src="images/Company-Avatar-10.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff2fb-fcf188fa"
                className="company-avatar-container random"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _17"
                >
                  <img
                    src="images/Company-Avatar-11.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff300-fcf188fa"
                className="company-avatar-container"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _18"
                >
                  <img
                    src="images/Company-Avatar-12.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff305-fcf188fa"
                className="company-avatar-container"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _19"
                >
                  <img
                    src="images/Company-Avatar-14.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
              <div
                id="w-node-bf08120b-cc2a-e2f0-94fd-84a0476ff30a-fcf188fa"
                className="company-avatar-container up hide"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="company-avatar-circle _20"
                >
                  <img
                    src="images/Company-Avatar-13.svg"
                    loading="lazy"
                    alt=""
                    className="company-avatar"
                  />
                </div>
                <div className="grey-circle-holder">
                  <div className="gray-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Help" className="section">
        <div className="container _4em">
          <div className="quick-access">
            <div className="quick-access-grid">
              <a
                href="#"
                className="quick-access-card-holder extraclassName w-inline-block"
              >
                <div className="quick-access-card">
                  <h1>Help</h1>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="arrow-holder-container">
                  <img
                    src="images/Arrow-Gradient.svg"
                    loading="lazy"
                    alt=""
                    className="_100width"
                  />
                </div>
                <div className="grey-border"></div>
              </a>
              <div
                id="w-node-bcfa0579-6986-668e-09cb-5d36b8f087e7-b8f087d1"
                className="quick-access-card-holder less-padding"
              >
                <div className="quick-access-card spacing">
                  <h1>Get to know us</h1>
                  <div className="w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      method="get"
                      className="form"
                      data-wf-page-id="66b5afa073aba93efcf188fa"
                      data-wf-element-id="bcfa0579-6986-668e-09cb-5d36b8f087ec"
                    >
                      <div className="form-container">
                        <div className="submit-button">
                          <input
                            type="submit"
                            data-wait="Please wait..."
                            className="link-gradient-text grey w-button"
                            value="Submit"
                          />
                        </div>
                        <input
                          className="quick-accesss-input w-input"
                          maxLength={256}
                          name="name-2"
                          data-name="Name 2"
                          placeholder="Your Email"
                          type="text"
                          id="name-2"
                        />
                        <div className="form-gradient"></div>
                      </div>
                    </form>
                    <div className="success-message-toast w-form-done">
                      <div className="success-message-text">
                        <span className="text-span">
                          <strong>Thank you!</strong>
                        </span>
                        <strong> </strong>Your submission has been received!
                      </div>
                    </div>
                    <div className="error-message w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grey-border"></div>
              </div>
              <a
                href="mailto:info@devsquarepk.com"
                className="quick-access-card-holder w-inline-block"
              >
                <div className="quick-access-card">
                  <h1>Contact</h1>
                  <p>info@devsquarepk.com</p>
                </div>
                <div className="arrow-holder-container">
                  <img
                    src="images/Arrow-Gradient.svg"
                    loading="lazy"
                    alt=""
                    className="_100width"
                  />
                </div>
                <div className="grey-border"></div>
              </a>
              <a
                href="mailto:info@devsqaurepk.com"
                className="quick-access-card-holder extraclassName w-inline-block"
              >
                <div className="quick-access-card">
                  <h1>Security</h1>
                  <p>info@devsquarepk.com</p>
                </div>
                <div className="arrow-holder-container">
                  <img
                    src="images/Arrow-Gradient.svg"
                    loading="lazy"
                    alt=""
                    className="_100width"
                  />
                </div>
                <div className="grey-border"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="w-layout-grid grid-8-col">
            <div
              id="w-node-_8b3914f6-0a6d-8c3b-f9b8-6366871866d8-0a144c54"
              className="fade-in-move-on-scroll"
            >
              <h1 className="no-margins">
                Don’t miss the chance get a demo from our team
              </h1>
            </div>
            <div
              id="w-node-_177ad39d-ec13-3434-08d3-899b73ba7d6c-0a144c54"
              className="veritcal-direction-spacing"
            >
              <div className="fade-in-move-on-scroll">
                <p className="paragraph-white">
                  Savor the Future of Restaurant Management with Menu Pk.
                </p>
              </div>
              <div className="fade-in-move-on-scroll">
                <a href="contact" className="button arrow w-button">
                  Request a demo
                </a>
              </div>
            </div>
          </div>
          <div className="footer-flex-container">
            <a href="#" className="footer-logo-link">
              <img src="images/M-1-01-1.svg" alt="" className="footer-image" />
            </a>
            <a
              href="mailto:hello@mycompanyemail.com"
              className="w-inline-block"
            >
              <h5>devsquarepk@gmail.com</h5>
            </a>
          </div>
          <div className="footer-line"></div>
          <div className="copy-right-section">
            <p className="copyright-text">
              Created by GhaziZaidi | All rights reserved by MENUPK
            </p>
            <img src="images/M-1-01-1.svg" loading="lazy" alt="" />
            <div className="footer-link-holder">
              <div className="fade-in-move-on-scroll">
                <a
                  href="template/licensing.html"
                  className="link-block animation-01 w-inline-block"
                >
                  <div>Licensing</div>
                  <div className="link-block-underline"></div>
                </a>
              </div>
              <div className="fade-in-move-on-scroll">
                <a
                  href="template/style-guide.html"
                  className="link-block animation-01 w-inline-block"
                >
                  <div>Style Guide</div>
                  <div className="link-block-underline"></div>
                </a>
              </div>
              <div className="fade-in-move-on-scroll">
                <a
                  href="template/change-log.html"
                  className="link-block animation-01 w-inline-block"
                >
                  <div>Change Log</div>
                  <div className="link-block-underline"></div>
                </a>
              </div>
              <div className="fade-in-move-on-scroll">
                <a
                  href="template/instructions.html"
                  className="link-block animation-01 w-inline-block"
                >
                  <div>Help Center</div>
                  <div className="link-block-underline"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66b5afa073aba93efcf1888f"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />

      <Script
        src="https://smartarget.online/loader.js?type=int&u=50485570ca99da6aba6c6a665db5b46981620559&source=webflow_whatsapp"
        strategy="lazyOnload"
      />

      <Script src="/webflow.js" strategy="lazyOnload" />
    </div>
  );
}
