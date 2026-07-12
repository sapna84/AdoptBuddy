
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import bannerImg from "../assets/images/banners/banner3.png";
import Banner from "../components/greenBanner.jsx";
import Footer from"../components/footer.jsx";
import Appointment from"../components/apointmentForm.jsx";

export default function Bookappointment(){
const tips = [
  "Keep your pet hydrated",
  "Schedule regular vaccinations",
  "Provide daily exercise",
  "Maintain a balanced diet",
  "Visit a veterinarian regularly",
];
  const navigate = useNavigate();
  return (<>

  <Navbar />

  {/*banner*/}
          <section className="relative overflow-hidden md:pt-25 pt-15 lg:pt-32">
        <Banner
        BannerImage = {bannerImg}
        title ="Book Appointment"
        description ="Fill in the details below to schedule an appointment for your pet."
        />
    </section>
  
  <section className="max-w-auto lg:p-20 md:p-15 mx-auto px-10 py-10">

    {/*appointment form*/}


 <div className="grid md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr] gap-12">
    <div >
<Appointment/>

</div>
<div  className="space-y-10">
  <div className="bg-[#88b62c]/35 rounded-2xl shadow-lg px-10 pt-8 pb-15">

  <h2 className=" playpen text-4xl font-bold text-[#144a36]">
     Veterinarian
  </h2>
  <p className=" text-xl mt-8"> You can continue booking an appointment with our trusted veterinarian.
        <br />
        We will find one of our best veterinarian for you.
</p>
  </div>

<div className="bg-[#88b62c]/35 rounded-2xl shadow-lg px-10 pt-8 pb-15">

  <h2 className=" playpen text-4xl font-bold text-[#144a36]">
   Pet Care Tips
  </h2>
 
  <ul className="space-y-3 ">

    {tips.map((tip, index) => (
      <li key={index} className="text-xl mt-8">
        <span className="font-bold text-xl text-[#88b62c]">
               ✓
              </span>&nbsp;&nbsp;&nbsp;&nbsp;{tip}
      </li>
    ))}

  </ul>
  </div>
  <div className="bg-[#88b62c]/35 rounded-2xl shadow-lg px-10 pt-8 pb-16">

  <h2 className=" playpen text-4xl font-bold text-[#144a36]">
    Need Help?
  </h2>
  <p className=" mt-8 text-xl">Contact our support team if
you have any questions.
</p>

         {/*submit button*/}
         <div className="mt-8 md:px-20 px-20 lg:px-40">
        <button onClick={() => navigate("/contact")} 
          className=" bg-white border-4 border-[#144a36] text-[#144a36] py-3 lg:py-3 md:py-2 lg:px-6 md:px-4 px-6 rounded-xl  text-2xl font-semibold cursor-pointer hover:bg-[#144a36]/80 hover:text-white"
        >
          Contact Us
        </button>
        </div>
  </div>
  </div>

</div>

</section>
  <Footer/>
  </>
   );
  }