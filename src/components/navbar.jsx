import logo from "../assets/images/logo/logo_nev.png";
import userIcon from "../assets/images/icons/user_profile.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkStyle = ({ isActive }) =>
    isActive
      ? "text-[#88b62c] border-b-2 border-[#88b62c] pb-1"
      : "text-black hover:text-[#88b62c]";

  return (
    
    <header className="bg-white/90">
      <div className="max-w-auto mx-auto px-2 lg:px-16 h-25 flex items-center relative shadow-2xl">

        {/* Logo */}
        <img
          src={logo}
          alt="AdoptBuddy Logo"
          className="h-10 md:h-15 lg:h-25 w-auto lg:"
        />

        {/* Navigation */}
        <nav className="flex absolute left-1/2 -translate-x-1/3 gap-8 lg:gap-24 text-sm lg:text-lg font-semibold">

          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/adopt" className={linkStyle}>
            Adopt Pets
          </NavLink>
          
          <NavLink to="/Vets-list" className={linkStyle}>
            Veterinarian
          </NavLink>
          
          <NavLink to="/about" className={linkStyle}>
            About Us
          </NavLink>


          <NavLink to="/contact" className={linkStyle}>
            Contact Us
          </NavLink>
        </nav>

        {/* User Icon */}
        <div className="ml-auto">
          <img
            src={userIcon}
            alt="User Profile"
            className="h-8 w-8 md:h-10 md:w-10 cursor-pointer"
          />
        </div>

      </div>
      
    </header>
  );
}