import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaGooglePlus,
  FaLinkedin,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPhoneAlt,
  FaMailchimp
} from "react-icons/fa";
export const Footer_Component = () => {
  return (
    <div className="footer-parent">
      <div className="footer">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          <a href="#!" className="mr-6 text-gray-600">
            <FaFacebookF />
          </a>
          <a href="#!" className="mr-6 text-gray-600">
            <FaTwitter />
          </a>
          <a href="#!" className="mr-6 text-gray-600">
            <FaGooglePlus />
          </a>

          <a href="#!" className="mr-6 text-gray-600">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <h6
              className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
            >
              Tailwind ELEMENTS
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              laudantium praesentium reprehenderit dolores ex minus tenetur
              autem iusto voluptatibus. Minus vitae rerum officiis vel.
              Perferendis at non assumenda sunt pariatur.
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Services
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Suites
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Event Palace
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Meeting Hall
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Rooms
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Events Halls
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Other Rooms
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                Help
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Contact
            </h6>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <FaHome className="mr-3"/>
              Sango Ilorin, Ng
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <FaMailchimp className="mr-3" />
              muhammedolanrewaju56@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <FaPhoneAlt className="mr-3"/>
              +234 9155 574 344
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-gray-200">
        <span>© 2022 Copyright:</span>
      </div>
    </div>
  )
};
