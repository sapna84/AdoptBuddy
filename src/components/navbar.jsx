import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";
import {
  getLoggedInUser,
  logoutUser,
} from "../data/loginUser";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo/logo_nev.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
const [loginMessage, setLoginMessage] = useState("");
  const linkStyle = ({ isActive }) =>
    isActive
      ? "playpen text-[#88b62c] border-b-6 border-[#88b62c] pb-2"
      : "inter text-black hover:text-[#88b62c] transition";
const [showLogin, setShowLogin] = useState(false);
const [showRegister, setShowRegister] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [user, setUser] = useState(null);
const [showDropdown, setShowDropdown] = useState(false);

useEffect(() => {
  const loggedInUser = getLoggedInUser();
//loginfuction
  if (loggedInUser) {
    setIsLoggedIn(true);
    setUser(loggedInUser);
  } else {
    setIsLoggedIn(false);
    setUser(null);
  }
}, []);

//logoutfuction
const handleLogout = () => {
  logoutUser();

  setIsLoggedIn(false);
  setUser(null);

  window.location.reload();
};
  return (
    <>
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

           {/* Wishlist */}
  <FontAwesomeIcon
    icon={faHeart}
    className="hidden lg:block text-[#144a36] text-4xl cursor-pointer  hover:scale-105 transition"
    onClick={() => {
      if (isLoggedIn) {
        navigate("/wishlist");
      } else {
        setLoginMessage("Please login first to access your wishlist.");
        setShowLogin(true);
      }
    }}
  />

          {/* User */}
          <div className="relative hidden lg:block mr-12">

  {!isLoggedIn ? (

    <FontAwesomeIcon
      icon={faUserPlus}
      onClick={() => {
  setLoginMessage("");
  setShowLogin(true);
}}
      className="text-[#144a36] text-5xl cursor-pointer hover:scale-105 transition"
    />

  ) : (

    <button
      onClick={() => setShowDropdown(!showDropdown)}
      className="playpen text-2xl font-bold text-[#88B62C] cursor-pointer"
    >
      Hello, {user?.name} ▼
    </button>

  )}

  {showDropdown && (
    <div className="absolute right-0 mt-4 w-52 bg-white rounded-xl shadow-xl overflow-hidden">

      <button
        onClick={() => navigate("/wishlist")}
        className="w-full text-left px-5 py-3 hover:bg-[#88b62c]/20"
      >
         Wishlist
      </button>

      <button
        onClick={handleLogout}
        className="w-full text-left px-5 py-3 hover:bg-red-100 text-red-600"
      >
         Logout
      </button>

    </div>
  )}

</div>

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

    
{showLogin && (
  <LoginPopup
  message={loginMessage}
  onClose={() => setShowLogin(false)}
  onRegister={() => {
    setShowLogin(false);
    setShowRegister(true);
  }}
/>
)}

{showRegister && (
  <RegisterPopup
    onClose={() => setShowRegister(false)}
    onLogin={() => {
      setShowRegister(false);
      setShowLogin(true);
    }}
  />
)}
</>
  );
}