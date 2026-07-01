import logo from "../assets/images/logo/logo_footer.png";
import { NavLink } from "react-router-dom";
import facebook from "../assets/images/icons/facebook.svg";
import instagram from "../assets/images/icons/insta.svg";
import twitter from "../assets/images/icons/twitter.svg";
import youtube from "../assets/images/icons/yt.svg";

function Footer() {
  return (
    <footer className="bg-[#144a36] text-white">

      <div className="max-w-auto mx-auto lg:mx-20 px-8 py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-25">

        {/* Logo Section */}
        <div className="md:max-w-md">
          <img
            src={logo}
            alt="AdoptBuddy Logo"
            className="h-14 w-auto"
          />

          <p className="mt-3">
            Bringing pets and people together.
            <br />
            Create happy homes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2">
            <li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "text-[#88b62c]" : "hover:text-[#88b62c]"
    }
  >
    &gt; Home
  </NavLink>
</li>
           <li>
  <NavLink
    to="/adopt"
    className={({ isActive }) =>
      isActive ? "text-[#88b62c]" : "hover:text-[#88b62c]"
    }
  >
    &gt; Browse Pets
  </NavLink>
</li>

<li>
  <NavLink
    to="/Vets-list"
    className={({ isActive }) =>
      isActive ? "text-[#88b62c]" : "hover:text-[#88b62c]"
    }
  >
    &gt; Veterinarians
  </NavLink>
</li>

<li>
  <NavLink
    to="/lostfound"
    className={({ isActive }) =>
      isActive ? "text-[#88b62c]" : "hover:text-[#88b62c]"
    }
  >
    &gt; Lost & Found
  </NavLink>
</li>

<li>
  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? "text-[#88b62c]" : "hover:text-[#88b62c]"
    }
  >
    &gt; About Us
  </NavLink>
</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4">
            Support
          </h4>

          <ul className="space-y-2">
            <li>&gt; Contact Us</li>
            <li>&gt; FAQs</li>
            <li>&gt; Privacy Policy</li>
            <li>&gt; Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">
            Contact
          </h4>

          <ul className="space-y-2">
            <li>&gt; connect@adoptbuddy.com</li>
            <li>&gt; +91 XXXXX XXXXX</li>
            <li>&gt; Jaipur, Rajasthan</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="font-semibold mb-4">
            Follow Us
          </h4>

          <div className="flex gap-4">

            <img
              src={facebook}
              alt="Facebook"
              className="h-6 w-6 cursor-pointer"
            />

            <img
              src={instagram}
              alt="Instagram"
              className="h-6 w-6 cursor-pointer"
            />

            <img
              src={twitter}
              alt="Twitter"
              className="h-6 w-6 cursor-pointer"
            />

            <img
              src={youtube}
              alt="YouTube"
              className="h-7 w-7 cursor-pointer"
            />

          </div>
        </div>

      </div>

      <div className="border-t border-white/20 py-5 text-center">
        © 2026 AdoptBuddy. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
