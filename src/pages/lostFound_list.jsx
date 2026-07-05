import { useState } from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Banner from "../components/LF_listbanner.jsx";
import ReportedPetCard from "../components/reportedPetCard.jsx";
import lostPets from "../data/lost.js";
import foundPets from "../data/found.js";

// Number of lost pets that have been successfully reunited with their owners.
// Update this as records are marked resolved.
const REUNITED_COUNT = 32;

export default function LostFoundList() {
  const [activeTab, setActiveTab] = useState("lost");

  const activePets = activeTab === "lost" ? lostPets : foundPets;

  return (
    <div className="min-h-screen bg-[#f7f5ef]">
      <Navbar />

      <Banner />

      {/* Stats */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-3xl font-bold text-[#144a36]">
              {lostPets.length}
            </p>
            <p className="mt-1 text-gray-600">Lost Pets Reported</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-3xl font-bold text-[#88b62c]">
              {REUNITED_COUNT}
            </p>
            <p className="mt-1 text-gray-600">Pets Reunited</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-3xl font-bold text-[#144a36]">
              {foundPets.length}
            </p>
            <p className="mt-1 text-gray-600">Active Found Reports</p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="flex border-b border-gray-300">
          <button
            onClick={() => setActiveTab("lost")}
            className={`pb-3 px-6 text-xl font-semibold cursor-pointer transition ${
              activeTab === "lost"
                ? "text-[#88b62c] border-b-4 border-[#88b62c]"
                : "text-[#144a36]"
            }`}
          >
            Lost Pets
          </button>

          <button
            onClick={() => setActiveTab("found")}
            className={`pb-3 px-6 text-xl font-semibold cursor-pointer transition ${
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
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-8">
          {activePets.length === 0 ? (
            <p className="text-center text-gray-500">
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
