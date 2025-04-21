import { navlinks } from "../data/app";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="bg-red text-white rounded-t-2xl mt-20 md:mt-24 lg:mt-48 py-12 md:py-16 lg:py-28">
      {/* Contact Section */}
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">
          Let's get in touch
        </h1>

        {/* Button-style phone number */}
        <a
          href="tel:07397191375"
          className="flex items-center gap-2 bg-black text-white font-bold px-6 py-2 lg:px-8 lg:py-3 rounded-md hover:scale-105 transition duration-200"
          aria-label="Call us at 07397191375"
        >
          <span className="bg-white p-2 rounded-full">
            < IoCallOutline size={20} color="black"/>
            </span>
          <span>Call us at:</span>
          <span className="underline">07397 191 375</span>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="mt-11 flex flex-wrap justify-center gap-4 md:text-base lg:text-lg">
        {navlinks.map((item, index) => (
          <Link
            to={item.url}
            key={index}
            onClick={handleScrollToTop}
            className="hover:underline transition-opacity duration-150 hover:opacity-100"
            aria-label={`Go to ${item.name}`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Footer Text */}
      <h1 className="text-sm mt-9 text-center font-bold">
      ©Nearby Plumbers Ltd. All rights reserved
      </h1>
    </div>
  );
};

export default Footer;
