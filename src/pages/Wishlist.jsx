import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PetCard from "../components/petCard";
import { getWishlist } from "../data/wishlistStorage";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  return (
    <>
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">

        <h1 className="playpen text-5xl font-bold text-[#144a36] text-center mb-12">
          My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
            <h2 className="text-3xl font-bold text-[#88b62c]">
              Your wishlist is empty ❤️
            </h2>

            <p className="mt-4 text-xl text-gray-600">
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