import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newBow from "../assets/images/icons/newbow.svg";
import { useState } from "react";
import LoginPopup from "./LoginPopup";
import ContactOwnerPopup from "../components/contactadoptPopup.jsx";

import {
  addToWishlist,
  removeFromWishlist,
  isWishlisted,
} from "../data/wishlistStorage";

import { getLoggedInUser } from "../data/loginUser";
import {
  faLocationDot,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
export default function PetCard({ 
  pet,
 }) {
const [liked, setLiked] = useState(isWishlisted(pet.id));
const [showLogin, setShowLogin] = useState(false);
const [showContact, setShowContact] = useState(false);
  return (
    
    <div className="relative bg-white rounded-3xl overflow-visible shadow-md shadow-[#88b62c] hover:-translate-y-2 hover:shadow-lg transition-all duration-300">

      {/* NEW Ribbon */}
      {pet.isNew && (
       <img
  src={newBow}
  alt="New"
  className="absolute top-2 -left-6 w-30 z-30 pointer-events-none"
/>
      )}
      {/* Favourite Icon */}
    <button
  onClick={() => {
    if (!getLoggedInUser()) {
      setShowLogin(true);
      return;
    }

    if (liked) {
      removeFromWishlist(pet.id);
    } else {
      addToWishlist(pet);
    }

    setLiked(!liked);
  }}
  className={`absolute top-5 right-5 cursor-pointer z-20 p-1 text-4xl rounded-full
    transition-all duration-300 hover:scale-110 active:scale-150
    ${liked ? "text-red-500" : "text-white/60"}`}
>
  <FontAwesomeIcon icon={faHeart} />
</button>

      {/* Pet Image */}
      <div className="relative rounded-t-3xl h-[300px] overflow-hidden">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="playpen text-[#88b62c] pl-4 text-4xl font-extrabold">
          {pet.name}
        </h3>

        <p className="mt-3 pl-4 text-2xl">
          {pet.breed}
        </p>

        <p className="text-2xl pl-4">
          {pet.age}
        </p>

        <div className="flex pl-4 justify-between items-center mt-1">

          <span className="text-2xl">
            {pet.gender}
          </span>

          <span className="flex items-center pr-4 gap-2 text-2xl">
            <FontAwesomeIcon icon={faLocationDot} />
            {pet.location}
          </span>

        </div>

        <div className="flex justify-center mt-7">

          <button
  onClick={() => {
    if (!getLoggedInUser()) {
      setShowLogin(true);
      return;
    }

    setShowContact(true);
  }}
  className="bg-[#144a36] text-white text-3xl font-bold px-4 py-3 rounded-2xl cursor-pointer border-4
          bg-[#144a36] border-[#144a36] text-white
          hover:bg-[#88b62c] hover:text-[#144a36] transition flex items-center gap-2"
>
  Contact Owner
  <span className="text-3xl">›</span>
</button>
        </div>
      </div>
      
      
      {showLogin && (
  <LoginPopup
    message="Please login or registor first."
    onClose={() => setShowLogin(false)}
    onRegister={() => {}}
  />
)}
{showContact && (
  <ContactOwnerPopup
    owner={{
      name: pet.ownerName,
      phone: pet.ownerPhone,
      email: pet.ownerEmail,
    }}
    onClose={() => setShowContact(false)}
  />
)}
</div>


    
  );
}