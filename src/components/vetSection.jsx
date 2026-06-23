import VetCard from "./vetCard";
import vets from "../data/vets";
import { useNavigate } from "react-router-dom";

export default function VetSection() {
  const navigate = useNavigate();
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-20">
      <h2 className="playpen text-[#144a36] text-4xl md:text-5xl font-bold text-center">
        Our Trusted Veterinarians
      </h2>

      <p className="text-center mt-4 text-black">
        Regular veterinary care ensures a healthier future.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {vets.map((vet) => (
          <VetCard key={vet.id} {...vet} />
        ))}
      </div>

      <div className="text-center mt-10">
        <button onClick={() => navigate("/vet-booking")} 
        className="bg-[#144a36] text-white px-8 py-3 rounded-xl hover:opacity-90 cursor-pointer">
          Book Appointment
        </button>
      </div>
    </section>
  );
}