import Logo from '../images/Logo.png' 
import { HiMenuAlt1 } from "react-icons/hi"; 
import { navlinks } from '../data/app'; 
import { IoMdClose } from "react-icons/io";
import { useState } from 'react'; 
import { Link, useNavigate, useLocation} from 'react-router-dom';


const Navbar = () => {

const [isNavOpen, setIsNavOpen] = useState(false) 

const OpenNav = () => setIsNavOpen(!isNavOpen)  
const location = useLocation()

const navigate = useNavigate()

    return (
        <div className="animate-fade-down">
          {/* navbar on small screens  & md */} 
          <div className="flex lg:hidden items-center my-3 justify-between">
            <img 
            src={Logo} 
            alt="Edizi" 
            className="w-28"
            />
            <div className="flex items-center gap-x-7">
            <button onClick={OpenNav} className="relative w-[40px] h-[40px] outline-none cursor-pointer">
            <span className="absolute inset-0 transition-opacity duration-300 ease-in-out"
            style={{ opacity: isNavOpen ? 1 : 0 }}>
            <IoMdClose size={37} color="black" />
            </span>
           <span className="absolute inset-0 transition-opacity duration-300 ease-in-out"
            style={{ opacity: isNavOpen ? 0 : 1 }}>
           <HiMenuAlt1 size={37} color="black" />
          </span>
          </button>

           <button onClick={() => navigate('/contact')}  className="bg-[#ed1c24] transition delay-75 duration-100 hover:bg-red-700 hover:scale-105 py-0.5 px-5 text-lg rounded-md text-white font-bold">Contact</button>
            </div>
          </div> 

          {/* navlinks on small screens  & md */}
           {
           isNavOpen ?  
           <div className="flex lg:hidden flex-col items-center gap-y-2 my-8 animate-fade-down">
           {navlinks.map((link) => (
              <div key={link.name} className=""> 
               <Link  to={link.url} onClick={OpenNav} 
               className={`text-lg font-bold ${location.pathname === link.url ? 'border-b-2' : ''}`}>
               {link.name} 
               </Link>
              </div>
           ))}
         </div> 
            : null 
            }

           {/* navbar on lg screens */} 
           <div className="hidden lg:flex flex-row my-4  items-center justify-between">

            <img 
            src={Logo}
            className="w-32"
            alt="Ediziplumbling"
            />

            <div className="flex flex-row gap-x-7 items-center bg-light py-2 px-9 rounded-md">
             {navlinks.map((link) => (
             <Link to={link.url} 
             className={`text-lg font-bold  ${location.pathname === link.url ? 'border-b-2' : ''}`} 
             key={link.url}> 
             {link.name}
             </Link>
             ))}
            </div>

            <button onClick={() => navigate('/contact')} className="bg-[#ed1c24] transition delay-75 duration-100 hover:bg-red-700 hover:scale-105 py-1 px-5 text-lg rounded-md text-white font-bold">Contact</button>
           </div>

        </div>
    )
}

export default Navbar 