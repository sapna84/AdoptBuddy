import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo/logo_nev.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "playpen text-[#88b62c] border-b-6 border-[#88b62c] pb-2"
      : "inter text-black hover:text-[#88b62c] transition";

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-35 bg-white/80 backdrop-blur-md shadow-lg">
      <div className="w-full px-5 lg:mt-4 md:px-8 lg:px-10 h-20 md:h-24 lg:h-28 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="AdoptBuddy Logo"
            className="h-12 md:h-16 lg:h-16 w-auto lg:ml-10 transition-transform"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12 xl:gap-24 text-3xl font-bold">
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

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* User */}
          <FontAwesomeIcon
  icon={faUserPlus}
  className="hidden lg:block text-[#144a36] text-5xl mr-12 cursor-pointer transition-transform hover:scale-105"
/>

          {/* Mobile Menu Button */}
         <button className="lg:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={40} />
            ) : (
              <Menu size={40} />
            )}
          </button>

        </div>
      </div>

{/* Mobile Menu */}
<div
  className={`lg:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
    menuOpen ? "max-h-150 py-4" : "max-h-0"
  }`}
>
  <div className="relative flex flex-col px-8 py-10">

    {/* Menu Items */}
    <nav className="flex flex-col items-center gap-8 text-xl font-medium py-2">

      <NavLink
        to="/"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `${linkStyle({ isActive })} w-full text-center py-5 border-b border-gray-200`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/adopt"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `${linkStyle({ isActive })} w-full text-center py-5 border-b border-gray-200`
        }
      >
        Adopt Pets
      </NavLink>

      <NavLink
        to="/Vets-list"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `${linkStyle({ isActive })} w-full text-center py-5 border-b border-gray-200`
        }
      >
        Veterinarian
      </NavLink>

      <NavLink
        to="/about"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `${linkStyle({ isActive })} w-full text-center py-5 border-b border-gray-200`
        }
      >
        About Us
      </NavLink>

      <NavLink
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `${linkStyle({ isActive })} w-full text-center py-5`
        }
      >
        Contact Us
      </NavLink>

    </nav>
  </div>
</div>
    </header>
  );
}