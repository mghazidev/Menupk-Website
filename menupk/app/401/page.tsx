import React from "react";
import Head from "next/head";

export default function Error401() {
  React.useEffect(() => {
    const handlePasswordPageOnload = () => {
      const errorElement = document.querySelector(
        ".w-password-page.w-form-fail"
      );
      if (errorElement) {
        if (/[?&]e=1(&|$)/.test(document.location.search)) {
          (errorElement as HTMLElement).style.display = "block";
        }
      }
    };

    handlePasswordPageOnload();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Vancouver - Webflow HTML website template</title>
        <meta
          name="description"
          content="Vancouver - Webflow HTML website template"
        />
        <meta
          property="og:title"
          content="Vancouver - Webflow HTML website template"
        />
        <meta
          property="og:description"
          content="Vancouver - Webflow HTML website template"
        />
        <meta
          property="twitter:title"
          content="Vancouver - Webflow HTML website template"
        />
        <meta
          property="twitter:description"
          content="Vancouver - Webflow HTML website template"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
        <link
          href="/css/razas-menupk-site.webflow.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <link
          href="/images/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="/images/webclip.png" rel="apple-touch-icon" />
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
        <div className="utility-page-content w-password-page w-form">
          <form
            action="/.wf_auth"
            method="post"
            id="email-form"
            name="email-form"
            data-name="Email Form"
            className="utility-page-form w-password-page"
            data-wf-page-id="66b5afa073aba93efcf188fb"
            data-wf-element-id="61a78268b9eb307096471f5400000000000c"
          >
            <h2 className="white-text">Protected Page</h2>
            <div>
              <label htmlFor="pass" className="field-label">
                Password
              </label>
              <input
                className="text-field w-password-page w-input"
                autoFocus={true}
                maxLength={256}
                name="pass"
                data-name="field"
                placeholder="Enter your password"
                type="password"
                id="pass"
              />
            </div>
            <input
              type="submit"
              data-wait="Please wait..."
              className="button big w-password-page w-button"
              value="Submit"
            />
            <div className="w-password-page w-form-fail">
              <div>Incorrect password. Please try again.</div>
            </div>
            <div
              style={{ display: "none" }}
              className="w-password-page w-embed w-script"
            >
              <input type="hidden" name="path" value="<%WF_FORM_VALUE_PATH%>" />
              <input type="hidden" name="page" value="<%WF_FORM_VALUE_PAGE%>" />
            </div>
          </form>
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
    </>
  );
}
