import { useState } from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Banner from "../components/LF_listbanner.jsx";
import ReportedPetCard from "../components/ReportedPetCard.jsx";
import lostPets from "../data/lost.js";
import foundPets from "../data/found.js";

// Number of lost pets that have been successfully reunited with their owners.
// Update this as records are marked resolved.
const REUNITED_COUNT = 32;

export default function LostFoundList() {
  const [activeTab, setActiveTab] = useState("lost");

  const activePets = activeTab === "lost" ? lostPets : foundPets;

  return (
    <div className="min-h-screen bg-[#f7f1e6]">
      <Navbar />

      <Banner />

      {/* Stats */}
      <section className="mx-auto px-20 py-20">
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-10 text-center">
          <div className="rounded-xl bg-white p-6 shadow-lg hover:-translate-y-2 transition-all duration-300">
            <p className="text-4xl font-bold text-[#144a36]">
              {lostPets.length}
            </p>
            <p className="mt-1 text-black text-xl">Lost Pets Reported</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg hover:-translate-y-2 transition-all duration-300">
            <p className="text-4xl font-bold text-[#88b62c]">
              {REUNITED_COUNT}
            </p>
            <p className="mt-1 text-black text-xl">Pets Reunited</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg hover:-translate-y-2 transition-all duration-300">
            <p className="text-4xl font-bold text-[#144a36]">
              {foundPets.length}
            </p>
            <p className="mt-1 text-black text-xl">Active Found Reports</p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="mx-auto px-6">
        <div className="flex border-b border-gray-300">
          <button
            onClick={() => setActiveTab("lost")}
            className={`pb-3 ml-10 px-20 text-4xl font-bold cursor-pointer transition ${
              activeTab === "lost"
                ? "text-[#88b62c] border-b-4 border-[#88b62c]"
                : "text-[#144a36]"
            }`}
          >
            Lost Pets
          </button>

          <button
            onClick={() => setActiveTab("found")}
            className={`pb-3 ml-10 px-20 text-4xl font-bold cursor-pointer transition ${
              activeTab === "found"
                ? "text-[#88b62c] border-b-4 border-[#88b62c]"
                : "text-[#144a36]"
            }`}
          >
            Found Pets
          </button>
        </div>
      </section>

      {/* Pet cards */}
      <section className="mx-auto px-6 py-10">
       <div className="px-20 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center">
          {activePets.length === 0 ? (
            <p className="text-center text-4xl text-gray-500">
              No {activeTab} pets reported yet.
            </p>
          ) : (
            activePets.map((pet) => (
              <ReportedPetCard key={pet.id} pet={pet} type={activeTab} />
            ))
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
