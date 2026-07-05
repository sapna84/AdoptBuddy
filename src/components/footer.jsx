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

      <div className="max-w-full px-20 lg:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-15">

        {/* Logo Section */}
        <div className="md:max-w-md mt-48">
          <img
            src={logo}
            alt="AdoptBuddy Logo"
            className="h-20 w-auto"
          />

          <p className="inter text-2xl mt-10">
            Bringing pets and people together.
            <br />
            Create happy homes.
          </p>
          
        {/* Social Icons */}
        <div className="inter mt-15 text-2xl">
          <h4 className="playpen text-3xl font-semibold mb-10">
            Follow Us
          </h4>

          <div className="flex gap-8">

            <img
              src={facebook}
              alt="Facebook"
              className="h-8 w-8 cursor-pointer"
            />

            <img
              src={instagram}
              alt="Instagram"
              className="h-8 w-8 cursor-pointer"
            />

            <img
              src={twitter}
              alt="Twitter"
              className="h-8 w-8 cursor-pointer"
            />

            <img
              src={youtube}
              alt="YouTube"
              className="h-10 w-10 cursor-pointer"
            />

          </div>
        </div>
        </div>
        

        {/* Quick Links */}
        <div className="inter mt-55 text-2xl">
          <h4 className="playpen text-3xl font-semibold mb-15">
            Quick Links
          </h4>

          <ul className="space-y-10">
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
        <div className="inter lg:mt-55 text-2xl">
          <h4 className="playpen text-3xl font-semibold mb-15">
            Support
          </h4>

          <ul className="space-y-10">
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
        <div className="inter lg:mt-55 text-2xl">
          <h4 className=" text-3xl font-semibold mb-15">
            Contact
          </h4>

          <ul className="space-y-10">
            <li>&gt; conn@adoptbuddy.com</li>
            <li>&gt; +91 8397828070</li>
            <li>&gt; Jaipur, Rajasthan</li>
          </ul>
        </div>

      </div>

      <div className="border-t text-2xl border-white/20 py-5 text-center">
        © 2026 AdoptBuddy. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
