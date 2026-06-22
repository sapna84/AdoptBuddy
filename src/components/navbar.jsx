import logo from "../assets/images/logo/logo_nev.png";
import userIcon from "../assets/images/icons/user_profile.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
    <header className="bg-white">
      <div className="max-w-[1440px] mx-auto px-7 h-25 flex items-center relative">

        {/* Logo */}
        <img
          src={logo}
          alt="AdoptBuddy Logo"
          className="h-10 md:h-15 lg:h-25 w-auto"
        />

        {/* Navigation */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/3 gap-10 lg:gap-20 text-sm lg:text-m font-semibold">

          <Link to="/"
            className="text-[#88b62c] border-b-2 border-[#88b62c] pb-1"
          >
            Home
          </Link>
          <Link to="/adopt-pets">Adopt Pets</Link>
          <Link to="/vet-booking">Veterinarian</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>

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

export default Navbar;