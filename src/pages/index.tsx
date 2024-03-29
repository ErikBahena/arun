import { useState } from "react";
import hero1 from "../../public/images/hero-1.jpeg";
import hero2 from "../../public/images/hero-2.jpeg";
import pt1 from "../../public/images/PT_1.jpg";
import pt2 from "../../public/images/PT_2.jpeg";
import navLogoLight from "../../public/logos/nav-logo-light.png";
import instaIcon from "../../public/logos/instagram.svg";
import snapIcon from "../../public/logos/snapchat.svg";
import facebookIcon from "../../public/logos/facebook.svg";

import Link from "next/link";
import Head from "next/head";

// const benefits = [
//   {
//     title: "Personalized Coaching",
//     description:
//       "Receive one-on-one guidance from experienced coaches tailored to your needs and goals.",
//     icon: instaIcon.src,
//   },
//   {
//     title: "Custom Training Plans",
//     description:
//       "Get bespoke training plans designed to help you improve your running form, speed, and endurance.",
//     icon: snapIcon.src,
//   },
//   {
//     title: "Supportive Community",
//     description:
//       "Join a network of passionate runners who share your love for the sport and will support you every step of the way.",
//     icon: facebookIcon.src,
//   },
// ];

const Home = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  //   const [screenWidth, setScreenWidth] = useState<number>(0);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   useEffect(() => {
  //     setScreenWidth(window.innerWidth);
  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  return (
    <>
      <Head>
        <title>ARUN</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* sets the nav bar color on iphone */}
        {/* if green it would be rgb (22, 163, 74) */}
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <meta name="theme-color" content="#000000" />
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
                  fill="white"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
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
              <p className="mt-2 max-w-md text-center text-xl font-bold leading-6 tracking-wide text-white  sm:mt-4 sm:max-w-2xl sm:text-xl md:text-2xl md:leading-7">
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

        <section id="about">
          <div className="px-4 py-8 sm:py-20">
            <h1 className="mb-3 sm:mb-6 text-center text-2xl font-bold uppercase italic tracking-tight text-white sm:text-4xl md:text-5xl">
              Our Video
            </h1>
            <div className="container mx-auto aspect-video max-w-6xl overflow-hidden rounded-lg">
              <iframe
                src="https://www.youtube.com/embed/RXGekk4pfbU"
                title="Video Title"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              ></iframe>
            </div>
          </div>

          <div className="bg-black px-4 py-8 sm:py-20">
            <div className="container mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-4 sm:px-0">
              <h1 className="text-2xl font-bold uppercase italic tracking-tight text-white sm:text-4xl md:text-5xl">
                Our <span className="text-green-500">Mission</span>
              </h1>
              <p className="mt-1.5 max-w-2xl text-xl font-bold leading-6 text-white sm:mt-4 sm:text-2xl sm:leading-7 sm:tracking-wide">
                Empowering individuals to reach their full potential in running
                by providing personalized coaching, tailored training programs,
                and unwavering support for athletes of all levels
                <span className="text-green-500">.</span>
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-gray-100 px-4 py-8 sm:py-20">
            <div className="container mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 sm:px-0">
              <h1 className="text-2xl font-bold uppercase italic tracking-tight text-black sm:text-4xl md:text-5xl">
                Our <span className="text-green-500">Team</span>
              </h1>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:mt-7 sm:grid-cols-2">
                <div
                  className="flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-md transition duration-300 hover:scale-105
                  hover:shadow-lg md:p-10"
                >
                  <img
                    src={pt1.src}
                    alt="Team member photo"
                    className="mb-4 h-32 w-32 rounded-full border-4 border-green-500 object-cover"
                  />
                  <h2 className="text-lg font-bold text-gray-800">
                    Jonas Kavali
                  </h2>
                  <p className="text-center text-gray-500">Personal Trainer</p>
                </div>

                <div
                  className="flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-md transition duration-300 hover:scale-105
                  hover:shadow-lg md:p-10"
                >
                  <img
                    src={pt2.src}
                    alt="Team member photo"
                    className="mb-4 h-32 w-32 rounded-full border-4 border-green-500 object-cover"
                  />
                  <h2 className="text-lg font-bold text-gray-800">
                    Josh Rojas
                  </h2>
                  <p className="text-center text-gray-500">Personal Trainer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white px-4 py-8 sm:py-20">
            <div className="container mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-4 sm:px-0">
              <h1 className="text-2xl font-bold uppercase italic tracking-tight text-black sm:text-4xl md:text-5xl">
                Our <span className="text-green-500">Story</span>
              </h1>
              <p className="mt-1.5 max-w-2xl text-xl font-bold leading-6 text-black sm:mt-4 sm:text-2xl sm:leading-7 sm:tracking-wide">
                Our story began with a shared passion for running and coaching,
                which led us to create a community where athletes of all levels
                can achieve their goals. We take pride in fostering lasting
                relationships while supporting our members on their journeys.
              </p>
            </div>
          </div>
        </section>

        <footer className="bg-black px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <h2 className="mb-4 text-lg font-bold text-white">About Us</h2>
                <p className="text-gray-400">
                  We provide personalized coaching and tailored training
                  programs to help runners of all levels achieve their goals.
                  Our mission is to create a supportive and inclusive community
                  that encourages and motivates runners to reach their full
                  potential.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-lg font-bold text-white">
                  Useful Links
                </h2>
                <ul className="list-none">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition duration-300 hover:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 transition duration-300 hover:text-white"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition duration-300 hover:text-white"
                    >
                      Coaching
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition duration-300 hover:text-white"
                    >
                      Training Programs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition duration-300 hover:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-lg font-bold text-white">Follow Us</h2>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 font-semibold text-gray-400 transition duration-300 hover:text-green-500"
                    >
                      <img
                        src={instaIcon.src}
                        alt="instagram"
                        className="h-9 w-9"
                      />
                      <span>Synergizedtraining</span>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 font-semibold text-gray-400 transition duration-300 hover:text-green-500"
                    >
                      <img
                        src={snapIcon.src}
                        alt="instagram"
                        className="h-9 w-9"
                      />
                      <span>SomeSnap</span>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 font-semibold text-gray-400 transition duration-300 hover:text-green-500"
                    >
                      <img
                        src={facebookIcon.src}
                        alt="instagram"
                        className="h-9 w-9"
                      />
                      <span>HereThere</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 text-center">
              <p className="flex flex-wrap justify-center text-gray-400">
                &copy;&nbsp;2023&nbsp;
                <span className="font-bold uppercase italic tracking-tight text-white">
                  Synergized Training
                </span>
                &nbsp;All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
