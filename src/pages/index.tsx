import { useState } from "react";
import hero1 from "../../public/images/hero-1.jpeg";
import hero2 from "../../public/images/hero-2.jpeg";
import navLogoLight from "../../public/logos/nav-logo-light.png";
import instaIcon from "../../public/logos/instagram.svg";
import snapIcon from "../../public/logos/snapchat.svg";
import facebookIcon from "../../public/logos/facebook.svg";

import Link from "next/link";
import Head from "next/head";

const Home = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Head>
        <title>ARUN | HOME</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* sets the nav bar color on iphone */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="theme-color" content="#000000" />

        {/* sets the color of the address bar on chrome */}
        <meta name="theme-color" content="#000000" />

        {/* sets the color of the address bar on mobile safari */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Head>

      <div className="flex flex-col bg-green-600 font-sans">
        <div className="relative grid h-screen grid-cols-2 gap-2">
          <div
            className="relative col-span-2 bg-cover bg-center lg:col-span-1"
            style={{
              backgroundImage: `url(${hero1.src})`,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 25% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div
            className="relative col-span-1 hidden bg-cover bg-center lg:block"
            style={{
              backgroundImage: `url(${hero2.src})`,
              clipPath: "polygon(75% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="absolute w-full">
            <nav className="container mx-auto flex items-center justify-between p-3 sm:p-6">
              <a href="#">
                <img
                  src={navLogoLight.src}
                  alt="logo"
                  className="w-14 md:w-20"
                />
              </a>
              <div className="hidden items-center space-x-10 text-lg font-bold uppercase text-white md:flex">
                <Link
                  href="#services"
                  scroll={false}
                  className="border-b-2 border-transparent pb-2 transition duration-300 hover:border-green-500"
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  scroll={false}
                  className="border-b-2 border-transparent pb-2 transition duration-300 hover:border-green-500"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  scroll={false}
                  className="border-b-2 border-transparent pb-2 transition duration-300 hover:border-green-500"
                >
                  Contact
                </Link>
              </div>

              <button className="flex md:hidden" onClick={toggleMenu}>
                <svg
                  className="h-8 w-8 text-white transition duration-300 hover:text-green-500"
                  x-show="!showMenu"
                  fill="white"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  viewBox="0 0 24 24"
                  x-cloak=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>

              {showMenu && (
                <div className="fixed left-0 top-0 z-20 h-full w-full bg-black bg-opacity-50">
                  <div className="fixed right-0 top-0 z-30 h-full w-64 bg-black">
                    <button
                      onClick={toggleMenu}
                      className="flex w-full items-center justify-end bg-green-500 p-3 pr-4"
                    >
                      <svg
                        className="h-6 w-6 text-white transition duration-300 hover:text-green-500"
                        x-show="showMenu"
                        fill="white"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        viewBox="0 0 24 24"
                        x-cloak=""
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                    <div className="flex flex-col">
                      <Link
                        href="#about"
                        scroll={false}
                        className="border-b border-gray-600 p-3 pr-6  font-bold uppercase italic tracking-tight text-white transition duration-300 hover:text-green-500"
                        onClick={toggleMenu}
                      >
                        About
                      </Link>

                      <Link
                        href="#services"
                        scroll={false}
                        className="border-b border-gray-600 p-3 pr-6  font-bold uppercase italic tracking-tight text-white transition duration-300 hover:text-green-500"
                        onClick={toggleMenu}
                      >
                        Services
                      </Link>
                      <Link
                        href="#contact"
                        scroll={false}
                        className="border-b border-gray-600 p-3 pr-6  font-bold uppercase italic tracking-tight text-white transition duration-300 hover:text-green-500"
                        onClick={toggleMenu}
                      >
                        Contact
                      </Link>
                    </div>

                    <div className="mt-4 px-4">
                      <h3 className="text-lg font-bold uppercase italic tracking-tight text-white">
                        Find us on
                      </h3>

                      <div className="flex items-center">
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 font-semibold text-white transition duration-300 hover:text-green-500"
                        >
                          <img
                            src={instaIcon.src}
                            alt="instagram"
                            className="h-9 w-9"
                          />
                          <span>@Synergizedtraining</span>
                        </a>
                      </div>
                      <div className="flex items-center">
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 font-semibold text-white transition duration-300 hover:text-green-500"
                        >
                          <img
                            src={snapIcon.src}
                            alt="instagram"
                            className="h-9 w-9"
                          />
                          <span>@SomeSnap</span>
                        </a>
                      </div>
                      <div className="flex items-center">
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 font-semibold text-white transition duration-300 hover:text-green-500"
                        >
                          <img
                            src={facebookIcon.src}
                            alt="instagram"
                            className="h-9 w-9"
                          />
                          <span>@HereThere</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </nav>
            <div className="flex flex-col items-center justify-center p-6 pt-32">
              <h1 className="text-center text-3xl font-bold uppercase italic tracking-tight text-white sm:text-5xl">
                Synergized Training
              </h1>
              <p className="mt-2 max-w-md text-center text-lg font-semibold leading-5 tracking-wide text-white  sm:mt-4 sm:max-w-2xl sm:text-xl md:text-2xl md:leading-7">
                Achieve your running goals with our personalized programs,
                improving form, speed, and endurance for all levels.
              </p>
              <Link href="#about" scroll={false}>
                <button className="mt-4 rounded-md border-2 border-green-500 bg-black px-8 py-3 font-bold text-green-500 shadow-lg hover:bg-green-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 sm:mt-6 sm:rounded-lg sm:text-xl">
                  What we&apos;re about
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Other sections */}

        {/* banner style */}
        <div className="bg-black py-20" id="about">
          <div className="container mx-auto flex h-full max-w-6xl flex-col items-start justify-center">
            <h1 className="text-5xl font-semibold uppercase italic tracking-tight text-white sm:text-5xl">
              About Us
            </h1>
            <p className="mt-4 max-w-2xl text-2xl font-semibold leading-7 tracking-wide text-white">
              {/* a description for an in person, very personal running training, very motivational and miltary style with 2 trainers */}
              We are here to help you achieve your running goals. Whether you
              are a beginner or a seasoned runner, we can help you improve your
              running form, speed, and endurance. We offer a variety of services
              to help you achieve your goals.
            </p>
          </div>
        </div>

        {/* Footer */}
        {/* ... */}
      </div>
    </>
  );
};

export default Home;
