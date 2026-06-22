import logo from "../assets/images/logo/logo_footer.png";

import facebook from "../assets/images/icons/facebook.svg";
import instagram from "../assets/images/icons/insta.svg";
import twitter from "../assets/images/icons/twitter.svg";
import youtube from "../assets/images/icons/yt.svg";

function Footer() {
  return (
    <footer className="bg-[#144a36] text-white">

      <div className="max-w-[1440px] mx-auto px-8 py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-25">

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
            <li>Home</li>
            <li>Browse Pets</li>
            <li>Veterinarians</li>
            <li>Lost & Found</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4">
            Support
          </h4>

          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">
            Contact
          </h4>

          <ul className="space-y-2">
            <li>connect@adoptbuddy.com</li>
            <li>+91 XXXXX XXXXX</li>
            <li>Jaipur, Rajasthan</li>
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
