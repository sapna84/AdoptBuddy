import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PetCard from "../components/petCard";
import { getWishlist } from "../data/wishlistStorage";
import BannerImg from "../assets/images/banners/wishlist.png";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  return (
    <>
      <Navbar />

      <section className="relative mt-35 overflow-hidden">
      {/* Banner */}
      <img
        src={BannerImg}
        alt="Banner"
        className="w-full h-[280px] sm:h-[350px] lg:h-full"
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">

        {/* Center Text */}
        <div className="text-center lg:mb-40 md:mb-8">
          <h1 className="playpen text-white font-extrabold text-3xl sm:text-5xl mb-10 lg:text-8xl">
            My Wishlist
          </h1>
        </div>

      </div>
    </section>

      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        {wishlist.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <h2 className="text-3xl font-bold text-[#88b62c]">
              Your wishlist is empty ❤️
            </h2>

            <p className="mt-4 text-xl text-black">
              Add your favourite pets here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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