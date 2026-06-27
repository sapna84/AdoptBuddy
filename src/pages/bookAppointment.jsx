import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Banner from "../components/formBanner.jsx";
import Footer from"../components/footer.jsx";
import Appointment from"../components/apointmentForm.jsx";

export default function Bookappointment(){
    const location = useLocation();
const selectedVet = location.state?.vet;
const tips = [
  "Keep your pet hydrated",
  "Schedule regular vaccinations",
  "Provide daily exercise",
  "Maintain a balanced diet",
  "Visit a veterinarian regularly",
];
  return (<>

  <Navbar />

  {/*banner*/}
  <Banner
  title="Book Appointment"
  description="Fill in the details below to schedule an appointment for your pet."
  />
  
  <section className="max-w-auto lg:p-20 mx-auto px-6 py-10">

  <div className="grid lg:grid-cols-[2fr_1fr] gap-8">

    {/*appointment form*/}
<Appointment/>

 <div className="space-y-8">
  {selectedVet ? (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md">
      <h2 className="text-2xl font-bold text-[#144a36] mb-5">
            Selected Veterinarian
          </h2>

      <img
        src={selectedVet.image}
        alt={selectedVet.name}
        className="w-full h-64 object-cover rounded-xl"
      />

      <h3 className="mt-4 text-3xl font-bold text-[#144a36]">
        {selectedVet.name}
      </h3>

      <p className="mt-2">
        {selectedVet.reviews}
      </p>

      <p>
        {selectedVet.experience}
      </p>

      <p>
        {selectedVet.qualification}
      </p>

      <p>
        📍 {selectedVet.location}
      </p>

    </div>
  ) : (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

      <h2 className="text-3xl font-bold text-[#144a36]">
        No Veterinarian Selected
      </h2>

      <p className="mt-3 text-gray-600">
        You can continue booking an appointment without selecting a veterinarian.
        <br />
        We will find our best veterinarians for you
        <br />
        or you can click on veterinarian above to select your Favorite😊.
      </p>

    </div>
  )
  }
  
  <div className="bg-[#88b62c]/35 rounded-2xl shadow-lg p-6">

  <h2 className="text-2xl font-bold text-[#144a36] mb-5">
    Pet Care Tips
  </h2>

  <ul className="space-y-3">

    {tips.map((tip, index) => (
      <li key={index} className="text-lg">
        ✓ {tip}
      </li>
    ))}

  </ul>

</div>
  </div>
  </div>
</section>
  <Footer/>
  </>
   );
  }