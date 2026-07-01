import Navbar from "../components/navbar.jsx";
import Banner from "../components/formBanner.jsx"
import Footer from"../components/footer.jsx";
import { useState } from "react";
import LostPets from "../data/lost";
import FoundPets from "../data/found";
import PetReportCard from "../components/petReportCard.jsx"
import { useNavigate } from "react-router-dom";
  export default function Lostfoundlist(){
    const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("lost");
const Pets = activeTab === "lost" ? LostPets : FoundPets;
  return (<>

  {/*nav bar*/}
  <Navbar />

  {/*banner*/}
  <div>
  <Banner
  title="Lost & Found Pets"
  description="Explore reported lost and found pets, and help reunite them with their families."
  />
   <div className="flex gap-7 mt-3">

            <button
              onClick={() =>
  navigate("/report_", {
    state: { reportType: "found" },
    
  })
}
              className="bg-[#88b62c] text-white px-6 py-3 rounded-lg cursor-pointer border-2 border-[#88b62c] bg-[#88b62c] text-white hover:bg-[#88b62c]/80 hover:text-white transition"
            >
              Report Found Pet
            </button>

            <button
              onClick={() =>
  navigate("/report_", {
    state: { reportType: "lost" },
  })
}
              className="bg-[#144a36] px-6 py-3 rounded-lg cursor-pointer border-2 border-[#144a36] text-white hover:bg-[#144a36]/80 hover:text-white transition"
            >
              Report Lost Pet
            </button>
    

          </div>

  
  </div>

  {/*lost or found*/}
  <section className="max-w-full mx-auto px-6 py-8">

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
  <div className="max-w-full p-20 mx-auto px-6 py-8">

  {Pets.map((pet) => (
    <PetReportCard
      key={pet.id}
      pet={pet}
      type={activeTab}
    />
  ))}

</div>

</section>
  <Footer/>
  </>
   );
  }