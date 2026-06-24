
import Navbar from "../components/navbar.jsx";
import Footer from"../components/footer.jsx";
import AboutBanner from "../assets/images/banners/aboutUs_banner.png";
import Ourstory from "../assets/images/banners/ourstory.png";
import OurMission from "../assets/images/icons/ourmission.svg";
import ourvision from "../assets/images/icons/ourvision.svg"
import AboutStats from "../components/aboutstats";
import TeamCard from "../components/TeamCard";
import Team from "../data/team";
export default function About() {
     return (
      <>
       <Navbar />
       {/* banner*/}
       <section className="relative overflow-hidden">
          <img
            src={AboutBanner}
            alt="About Hero"
            className="w-full h-[300px] py:20 md:h-[400px] lg:h-[500px] object-cover"
          />
      
       
        
        <div className="absolute inset-0 px-6 flex ">
          <div className="max-w-[1440px] mt-10 lg:max-w-8xl pl-6 md:pl-12 lg:pl-20">
             <div className="max-w-xl lg:max-w-4xl">
          <h1 className=" playpen text-4xl md:text-6xl font-bold text-[#144a36] leading-tight lg:leading-loose">
            Connecting Pets 
            With <br /> <span className="text-[#88b62c]">Loving Families</span>
          </h1>

          <p className="mt-6 lg:mt-2 text-lg lg:text-2xl text-black lg:leading-loose">
            At AdoptBuddy, we believe every pet deserves a safe home every pet lover deserves the perfect companion.
          </p>
        </div>
        </div>
        </div>
      </section>

       <section className="px-6 py-20">

  <div className="grid lg:grid-cols-[4fr_1fr] gap-8 items-stretch">

    <div>

      {/* Story */}
      <div className="relative overflow-hidden">
        <img
          src={Ourstory}
          alt="Our Story"
          className="w-full h-[400px] opacity-80 object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end">
          <div className="max-w-xl mr-10 lg:mr-6">
           <h2 className="playpen text-4xl font-extrabold text-center text-[#144a36]">
             Our Story 
            </h2> 
            <p className="mt-3 mr-10 lg:mr-1 text-black text-lg font-medium leading-relaxed">
               AdoptBuddy was created from a love for animals and a mission to help every pet find safety, care, and a loving home. From pet adoption and lost & found support to veterinary appointments and pet health management, our platform brings everything pet parents need into one place.
                We are especially committed to helping reunite lost pets with their families and creating a community where animals are protected,
                 cared for, and never forgotten. At AdoptBuddy, we're building a future where every pet is loved, every lost pet has a chance to return home,
                  and every pet parent has the support they need.
            </p>
          </div>
        </div>
      </div>

      {/* Mission + Vision */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">

       <div className="bg-white ml-10 p-8  pt-10 lg:ml-20 lg:pt-6 rounded-2xl  shadow-lg">
         <div className="flex">
           <img
            src={OurMission} 
            alt="Mission Icon"
             className="md:w-30 md:h-30 lg:-mt-5 flex-shrink-0" /> 
       <h3 className="playpen text-4xl lg:text-5xl lg:mt-4 font-bold lg:pl-10 md:pl-5 pl-30 text-[#144a36]">
        Our Mission
        </h3> 
        </div>
         <p className="mt-5 lg:mt-3 text-xl lg:text-2xl text-black"> 
          To reduce the number of homeless pets by promoting adoption, 
        responsible pet care and community awareness.
        </p> 
        </div> 
        <div className="bg-white mr-10 p-8 pt-10  lg:mr-20 lg:pt-6 rounded-2xl shadow-lg"> 
          <div className="flex"> 
            <img 
            src={ourvision}
             alt="Vision Icon" 
             className="md:w-30 md:h-30 lg:-mt-5 flex-shrink-0" /> 
             <h3 className=" playpen text-4xl lg:text-5xl lg:mt-4 font-bold lg:pl-10 pl-30 md:pl-5 text-[#144a36]">
              Our Vision
              </h3>
               </div>
                <p className="mt-5 lg:mt-3 text-xl lg:text-2xl text-black"> 
                  To create a pet-first ecosystem that ensures happy pets,
                   informed pet parents and stronger communities. 

        </p>
</div>


      </div>

    </div>

    {/* stats*/}
    <AboutStats />

  </div>

</section>

      {/* TEAM */}
      <section className="bg-[#f7f1e6] py-20 px-6">
  <div className="max-w-auto lg:mx-20">

    <h2 className="playpen text-4xl font-extrabold text-center text-[#144a36]">
      Our Team
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {Team.map((member) => (
        <TeamCard
          key={member.id}
          image={member.image}
          name={member.name}
          role={member.role}
          motivation={member.motivation}
        />
      ))}
    </div>

  </div>
</section>

       {/* reviews */}
      <section className="max-w-[1440px] mx-auto px-6 py-16 ">
        <h2 className="text-3xl font-bold text-center text-[#144a36]">
          Happy Pet Parents
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700">
                "Amazing experience adopting my pet!"
              </p>
              <h4 className="mt-4 font-semibold">User {i}</h4>
            </div>
          ))}
        </div>
      </section>

  <Footer/>
  </>
   );
  }