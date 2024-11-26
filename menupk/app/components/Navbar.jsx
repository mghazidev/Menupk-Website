"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const homeclick = () => {
    router.push("/");
  };

  return (
    <div>
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
            {/* <a
              href="index.html"
              aria-current="page"
              // className="brand w-nav-brand w--current"
            > */}
            <div onClick={homeclick} style={{ cursor: "pointer" }}>
              <img
                className="brand  w-nav-brand w--current object-contain "
                src="images/M-1-01-1.png"
                loading="lazy"
                width="Auto"
                alt=""
              />
            </div>
            {/* </a> */}
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
                <a href="/contact" className="button w-button">
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
    </div>
  );
};

export default Navbar;
