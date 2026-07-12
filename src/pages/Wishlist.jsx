import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PetCard from "../components/petCard";
import { getWishlist } from "../data/wishlistStorage";
import BannerImg from "../assets/images/banners/wishlist.png";
import bannerMobile from "../assets/images/banners/banner3_mobile.png";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  return (
    <>
      <Navbar />

      <section className="relative lg:mt-32 md:mt-25 mt-15 overflow-hidden">
      {/* Banner */}
      <img
        src={BannerImg}
        alt="Banner"
        className="hidden lg:block md:block w-full h-full object-cover"
      />
      <img
        src={bannerMobile}
        alt="Banner"
        className="block lg:hidden md:hidden w-full sm:h-[350px] object-cover"
      />


      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">

        {/* Center Text */}
        <div className="text-center lg:mb-40 md:mb-8">
          <h1 className="playpen text-white font-extrabold text-6xl sm:text-6xl md:text-6xl mb-10 lg:text-8xl">
            My Wishlist
          </h1>
        </div>

      </div>
    </section>

      <section className="lg:pt-40 lg:pb-20 lg:px-0 px-10 lg:px-20 py-10  mx-auto">
        {wishlist.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
  <h2 className="text-3xl font-bold text-[#88b62c]">
    Your wishlist is empty ❤️
  </h2>

  <p className="mt-4 text-xl text-black">
    Add your favourite pets here.
  </p>

  <button
    onClick={() => navigate("/adopt")}
    className="mt-8 px-8 py-4 bg-[#144a36] text-white text-xl font-bold rounded-xl border-4 border-[#144a36] hover:bg-[#88b62c] hover:text-[#144a36] transition cursor-pointer"
  >
    Add Pets
  </button>
</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 gap-10">
            {wishlist.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
              />
            ))}
          </div>
        )}

      </section>

      <Footer />
    </>
  );
}