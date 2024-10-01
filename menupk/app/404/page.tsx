import React from "react";
import Head from "next/head";
import Script from "next/script";

export default function Error404() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Vancouver - Webflow HTML website template</title>
        <meta
          content="Vancouver - Webflow HTML website template"
          name="description"
        />
        <meta
          content="Vancouver - Webflow HTML website template"
          property="og:title"
        />
        <meta
          content="Vancouver - Webflow HTML website template"
          property="og:description"
        />
        <meta
          content="Vancouver - Webflow HTML website template"
          property="twitter:title"
        />
        <meta
          content="Vancouver - Webflow HTML website template"
          property="twitter:description"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link href="css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="css/webflow.css" rel="stylesheet" type="text/css" />
        <link
          href="css/razas-menupk-site.webflow.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          type="text/javascript"
        ></script>
        <script type="text/javascript">
          {`WebFont.load({
            google: {
              families: [
                "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic",
                "Outfit:100,200,300,regular,500,600,700,800,900"
              ]
            }
          });`}
        </script>
        <script type="text/javascript">
          {`!function(o,c){var n=c.documentElement,t=" w-mod-";n.classNameName+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.classNameName+=t+"touch")}(window,document);`}
        </script>
        <link
          href="images/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="images/webclip.png" rel="apple-touch-icon" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1WV9QVQZBZ"
        ></script>
        <script type="text/javascript">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('set', 'developer_id.dZGVlNj', true);
          gtag('config', 'G-1WV9QVQZBZ');`}
        </script>
        <script
          src="https://www.google.com/recaptcha/api.js"
          type="text/javascript"
        ></script>
        <script type="text/javascript">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.agent='plwebflow';n.queue=[];
          t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '491629466952475');
          fbq('track', 'PageView');`}
        </script>
        <style>
          {`
            ::-webkit-scrollbar {
              width: 15px;
            }
            ::-webkit-scrollbar-track {
              background-color: rgba(0, 0, 0, 0.05);
              border-radius: 20px;
            }
            ::-webkit-scrollbar-thumb {
              border-radius: 20px;
              background: rgb(54, 49, 49);
            }
          `}
        </style>
      </Head>

      <div
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
            <a href="index.html" className="brand w-nav-brand">
              <img
                src="images/M-1-01-1.svg"
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
                    href="#"
                    className="link-block animation-01 w-inline-block"
                  >
                    <div>Features</div>
                    <div className="link-block-underline"></div>
                  </a>
                </div>
                <div className="nav-link">
                  <a
                    href="#"
                    className="link-block animation-01 w-inline-block"
                  >
                    <div>Pricing</div>
                    <div className="link-block-underline"></div>
                  </a>
                </div>
                <div className="nav-link">
                  <a
                    href="#"
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
                <a href="contact.html" className="button w-button">
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
      </div>
      <div className="utility-page-wrap">
        <div className="utility-page-content w-form">
          <h2 className="white-text">Page Not Found</h2>
          <div className="grey-text">
            The page you are looking for doesn&#x27;t exist or has been moved
          </div>
          <a href="index.html" className="button big top-margin-l w-button">
            Back to home
          </a>
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
                <a href="contact.html" className="button arrow w-button">
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
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      />
      <Script src="/webflow.js" strategy="lazyOnload" />
      <Script
        type="text/javascript"
        src="https://smartarget.online/loader.js?type=int&u=50485570ca99da6aba6c6a665db5b46981620559&source=webflow_whatsapp"
      />
    </>
  );
}
