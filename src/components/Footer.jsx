import React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/images/logo.png';

function Footer() {
  return (
    <div className="bg-blueGray-800 ">
      <footer
        className="text-gray-200 body-font "
      >
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-200"
            >
              <img
                src={logo}
                alt="logo"
              />
            </Link>
            <p
              className="mt-2 text-sm text-gray-200"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
              orci ante. Mauris varius ex id ante tempus consequat.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3"
              >
                Help
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p
                    className="mt-2 text-sm text-gray-200"
                  >
                    Services
                  </p>
                </li>
                <li>
                  <p
                    className="mt-2 text-sm text-gray-200"
                  >
                    About us
                  </p>
                </li>
                <li>
                  <p
                    className="mt-2 text-sm text-gray-200"
                  >
                    Contact us
                  </p>
                </li>
                <li>
                  <p
                    className="mt-2 text-sm text-gray-200"
                  >
                    FAQs
                  </p>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3"
              >
                Support
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p
                    className="mt-2 text-sm text-gray-200"
                  >
                    privacy Policy
                  </p>
                </li>
                <li>
                  <p
                    className="mt-2 text-sm text-gray-200"
                  >
                    Cookies Policy
                  </p>
                </li>
                <li>
                  <p
                    className="mt-2 text-sm text-gray-200"
                  >
                    Terms & conditions
                  </p>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3"
              >
                Contact
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p
                    className="mt-2 text-sm text-gray-200"
                  >
                    Press
                  </p>
                </li>
                <li>
                  <p
                    className="mt-2 text-sm text-gray-200"
                  >
                    Return policy
                  </p>
                </li>
                <li>
                  <p
                    className="mt-2 text-sm text-gray-200"
                  >
                    Privacy
                  </p>
                </li>
              </nav>
            </div>
          </div>
          
        </div>
        <center>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-between sm:justify-start">
              <Link className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-500 ">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
            </center>
        <div className="bg-blueGray-800">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center mx-auto sm:text-left">
            Copyright © 2022 smile.com. All rights reserved.              
            </p>
           
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
