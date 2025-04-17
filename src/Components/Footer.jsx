import { navlinks } from "../data/app";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-red text-white rounded-t-2xl mt-20 md:mt-24 lg:mt-48 py-12 md:py-16 lg:py-28">
      {/* Contact Section */}
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">
          Let’s get in touch
        </h1>
        <a
          href="tel:07397191375"
          className="font-bold bg-black py-2 lg:py-3 px-6 lg:px-8 rounded-md transition transform duration-200 hover:scale-105"
          aria-label="Call us now"
        >
          Contact Us
        </a>
      </div>

      {/* Navigation Links */}
      <div className="mt-11 flex flex-wrap justify-center gap-4 md:text-base lg:text-lg">
        {navlinks.map((item, index) => (
          <Link
            to={item.url}
            key={index}
            className="hover:underline transition-opacity duration-150  hover:opacity-100"
            aria-label={`Go to ${item.name}`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Footer Text */}
      <h1 className="text-sm mt-9 text-center font-bold">
        © Edizi Plumbing and Heating Ltd. All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;
