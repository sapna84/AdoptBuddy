import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";
import { getLoggedInUser, logoutUser } from "../data/loginUser";
import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo/logo_nev.png";

export default function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "playpen text-[#88b62c] border-b-4 border-[#88b62c] pb-2"
      : "inter text-black hover:text-[#88b62c] transition";

  useEffect(() => {
    const loggedInUser = getLoggedInUser();

    if (loggedInUser) {
      setIsLoggedIn(true);
      setUser(loggedInUser);
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
    setUser(null);
    window.location.reload();
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg">

        <div className="w-full h-16 sm:h-18 md:h-24 lg:h-28 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 lg:mt-4">

          {/* Logo */}
          <NavLink to="/">
            <img
              src={logo}
              alt="AdoptBuddy Logo"
              className="h-10 sm:h-12 md:h-16 lg:h-16 w-auto lg:ml-10"
            />
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex text-[#144a36] items-center gap-12 xl:gap-24 text-3xl font-bold">

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
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Desktop Wishlist */}
            <FontAwesomeIcon
              icon={faHeart}
              className="hidden lg:block text-[#144a36] text-4xl cursor-pointer hover:scale-105 transition"
              onClick={() => {
                if (isLoggedIn) {
                  navigate("/wishlist");
                } else {
                  setLoginMessage(
                    "Please login first to access your wishlist."
                  );
                  setShowLogin(true);
                }
              }}
            />

            {/* Desktop User */}
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
                  className="playpen text-2xl font-bold text-[#88B62C]"
                >
                  Hello, {user?.name?.trim().split(/\s+/)[0]} ▼
                </button>
              )}

              {showDropdown && (
                <div className="absolute right-0 mt-4 w-52 bg-white rounded-xl shadow-xl overflow-hidden">
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
            <button
              className="lg:hidden text-[#144a36]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}

        <div
          className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen border-t" : "max-h-0"
          }`}
        >
          <div className="px-5 py-5">

            <nav className="flex flex-col">

              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `${linkStyle({
                    isActive,
                  })} py-4 text-lg text-center border-b`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/adopt"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `${linkStyle({
                    isActive,
                  })} py-4 text-lg text-center border-b`
                }
              >
                Adopt Pets
              </NavLink>

              <NavLink
                to="/Vets-list"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `${linkStyle({
                    isActive,
                  })} py-4 text-lg text-center border-b`
                }
              >
                Veterinarian
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `${linkStyle({
                    isActive,
                  })} py-4 text-lg text-center border-b`
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `${linkStyle({
                    isActive,
                  })} py-4 text-lg text-center border-b`
                }
              >
                Contact Us
              </NavLink>

            </nav>

            {/* Mobile Actions */}

            <div className="flex justify-center gap-8 mt-6">

              <button
                onClick={() => {
                  setMenuOpen(false);

                  if (isLoggedIn) {
                    navigate("/wishlist");
                  } else {
                    setLoginMessage(
                      "Please login first to access your wishlist."
                    );
                    setShowLogin(true);
                  }
                }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-3xl text-[#144a36]"
                />
              </button>

              {!isLoggedIn ? (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setLoginMessage("");
                    setShowLogin(true);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    className="text-3xl text-[#144a36]"
                  />
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="text-red-600 font-semibold"
                >
                  Logout
                </button>
              )}
            </div>

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