import logo from "../assets/images/logo/logo.png";
import background from "../assets/images/banners/footer.png";
import { NavLink } from "react-router-dom";
import facebook from "../assets/images/icons/facebook.svg";
import instagram from "../assets/images/icons/insta.svg";
import twitter from "../assets/images/icons/twitter.svg";
import youtube from "../assets/images/icons/yt.svg";

function Footer() {
  return (
   <footer
  className="text-white bg-cover bg-no-repeat"
  style={{
    backgroundImage: `url(${background})`,
  }}
>

     <div className="max-w-full px-6 sm:px-10 md:px-12 lg:px-20 py-10 md:py-14 lg:py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 md:gap-14 lg:gap-15">

        {/* Logo Section */}
        <div className="max-w-md mt-18 md:mt-43 lg:mt-48 text-center md:text-left">
          <img
            src={logo}
            alt="AdoptBuddy Logo"
            className="h-16 md:h-18 lg:h-20 w-auto mx-auto md:mx-0"
          />

          <p className="inter text-lg md:text-xl lg:text-2xl mt-6 lg:mt-10">
            Bringing pets and people together.
            <br />
            Create happy homes.
          </p>
          
        {/* Social Icons */}
        <div className="inter mt-8 lg:mt-15 text-xl lg:text-2xl">
          <h4 className="playpen text-2xl lg:text-3xl font-semibold mb-6 lg:mb-10">
            Follow Us
          </h4>

          <div className="flex justify-center md:justify-start gap-6 lg:gap-8">

            <img
              src={facebook}
              alt="Facebook"
              className="h-7 w-7 lg:h-8 lg:w-8 cursor-pointer"
            />

            <img
              src={instagram}
              alt="Instagram"
              className="h-7 w-7 lg:h-8 lg:w-8 cursor-pointer"
            />

            <img
              src={twitter}
              alt="Twitter"
              className="h-7 w-7 lg:h-8 lg:w-8 cursor-pointer"
            />

            <img
              src={youtube}
              alt="YouTube"
             className="h-8 w-8 lg:h-10 lg:w-10 cursor-pointer"
            />

          </div>
        </div>
        </div>
        

        {/* Quick Links */}
        <div className="inter mt-23 ml-10 lg:ml-0 md:mt-50 lg:mt-55 text-lg md:text-xl lg:text-2xl text-left">
          <h4 className="playpen text-2xl lg:text-3xl font-semibold mb-6 lg:mb-15">
            Quick Links
          </h4>

          <ul className="space-y-4 lg:space-y-10">
            <li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? " text-[#88b62c] font-bold" : "hover:text-[#88b62c]"
    }
  >
    &gt; Home
  </NavLink>
</li>
           <li>
  <NavLink
    to="/adopt"
    className={({ isActive }) =>
      isActive ? "text-[#88b62c] font-bold" : "hover:text-[#88b62c]"
    }
  >
    &gt; Adopt Pets
  </NavLink>
</li>

<li>
  <NavLink
    to="/Vets-list"
    className={({ isActive }) =>
      isActive ? " text-[#88b62c] font-bold " : "hover:text-[#88b62c]"
    }
  >
    &gt; Veterinarians
  </NavLink>
</li>

<li>
  <NavLink
    to="/lostfound"
    className={({ isActive }) =>
      isActive ? " text-[#88b62c] font-bold" : "hover:text-[#88b62c]"
    }
  >
    &gt; Lost & Found
  </NavLink>
</li>

<li>
  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? " text-[#88b62c] font-bold" : "hover:text-[#88b62c]"
    }
  >
    &gt; About Us
  </NavLink>
</li>
          </ul>
        </div>

        {/* Support */}
        <div className="inter mt-2 md:mt-50 lg:mt-55 text-lg md:text-xl lg:text-2xl text-left">
          <h4 className="playpen text-2xl lg:text-3xl font-semibold mb-6 lg:mb-15">
            Support
          </h4>

          <ul className="space-y-4 lg:space-y-10">
            <li>
              <NavLink
              to="/contact"
              className={({isActive})=>
              isActive ? " text-[#88b62c] font-bold" : "hover:text-[#88b62c]"
            }>
              &gt; Contact Us
              </NavLink>
              </li>
           <li>
  <NavLink
    to="/contact#faq"
   className={({isActive})=>
              isActive ? " text-[#88b62c] font-bold" : "hover:text-[#88b62c]"
            }>
    &gt; FAQs
  </NavLink>
</li>
            <li>&gt; Privacy Policy</li>
            <li>&gt; Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="inter mt-2 md:mt-50 lg:mt-55 text-lg md:text-xl lg:text-2xl text-center">
          <h4 className="playpen text-2xl lg:text-3xl font-semibold mb-6 lg:mb-15">
            Contact
          </h4>

         <ul className="space-y-4 lg:space-y-10">
            <li> conn@adoptbuddy.com</li>
            <li> +91 5397728010</li>
            <li> Jaipur, Rajasthan</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/20 py-4 md:py-15 text-center text-sm md:text-lg lg:text-2xl px-4">
        © 2026 AdoptBuddy. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
