import Logo from '../images/Logo.png';
import { HiMenuAlt1 } from "react-icons/hi";
import { navlinks } from '../data/app';
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5"; 
import ServiceSlider from './ServiceSlider';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const OpenNav = () => setIsNavOpen(!isNavOpen);
  const location = useLocation();
  const navigate = useNavigate();

  // Sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* ServiceSlider (non-sticky, scrolls normally) */}
      <ServiceSlider />

      {/* Sticky Navbar Wrapper */}
      <div className={`w-full z-50 ${isSticky ? 'fixed top-0 left-0 right-0' : 'relative'}`}>
        {/* Navbar Container with backdrop blur when sticky */}
        <div className={`w-full ${isSticky ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white'}`}>
          {/* Small screen navbar */}
          <div className="flex lg:hidden items-center my-3 justify-between px-4 py-2">
            <Link to="/">
              <img src={Logo} alt="Edizi" className="w-28" />
            </Link>
            <div className="flex items-center gap-x-5">
              <button onClick={OpenNav} className="relative w-[40px] h-[40px] outline-none cursor-pointer">
                <span
                  className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                  style={{ opacity: isNavOpen ? 1 : 0 }}
                >
                  <IoMdClose size={37} color="black" />
                </span>
                <span
                  className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                  style={{ opacity: isNavOpen ? 0 : 1 }}
                >
                  <HiMenuAlt1 size={37} color="black" />
                </span>
              </button>
            </div>
          </div>

          {/* Small screen navlinks */}
          {isNavOpen && (
            <div className="flex lg:hidden flex-col items-center gap-y-3 my-5 animate-fade-down">
              {navlinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  onClick={OpenNav}
                  className={`text-lg font-bold ${location.pathname === link.url ? 'border-b-2' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  OpenNav();
                  navigate('/contact');
                }}
                className="bg-red transition delay-75 duration-100 hover:bg-red-700 hover:scale-105 py-1 px-5 text-lg rounded-md text-white font-bold mt-4"
              >
                Contact
              </button>
            </div>
          )}

          {/* Large screen navbar */}
          <div className={`hidden lg:flex flex-row items-center justify-between my-4 px-6 ${isSticky ? 'py-2' : 'py-2'}`}>
            <Link to="/">
              <img src={Logo} className="w-32" alt="Ediziplumbing" />
            </Link>

            <div className="flex flex-row gap-x-7 items-center bg-light py-2 px-9 rounded-md">
              {navlinks.map((link) => (
                <Link
                  to={link.url}
                  className={`text-lg font-bold ${location.pathname === link.url ? 'border-b-2' : ''}`}
                  key={link.url}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <a href="tel:07397191375" className="flex items-center gap-6">
              <span className="font-bold hover:underline oldstyle-nums text-sm inline-flex items-center gap-1">
                <IoCallOutline size={25} />
                07397 191 375
              </span>
              <a  href="tel:07397191375"
                className="bg-red transition delay-75 duration-100 hover:bg-red-700 hover:scale-105 py-1 px-5 text-lg rounded-md text-white font-bold"
              >
                Contact
              </a>
            </a>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content jump when navbar becomes sticky */}
      {isSticky && <div className="h-[80px]"></div>}
    </div>
  );
};

export default Navbar;






