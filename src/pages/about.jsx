
import Navbar from "../components/navbar.jsx";
import Footer from"../components/footer.jsx";
import AboutBanner from "../assets/images/banners/aboutUs_banner.png";
import background from "../assets/images/background/background5.png";
import background2 from "../assets/images/background/background6.png";
import OurMission from "../assets/images/icons/ourmission.svg";
import ourvision from "../assets/images/icons/ourvision.svg"
import TeamCard from "../components/teamcard.jsx";
import Team from "../data/team";
export default function About() {
     return (
      <>
       <Navbar />
       {/* banner*/}
       <section className="relative mt-35 overflow-hidden"
      >
          <img
            src={AboutBanner}
            alt="About Hero"
            className="w-full h-[300px] py:20 md:h-[400px] lg:h-full object-cover"
          />
      
       
        
        <div className="absolute inset-0 px-6 flex ">
          <div className=" mt-10 lg:mt-20 lg:max-w-8xl pl-6 md:pl-12 lg:pl-20">
             <div className="">
          <h1 className=" playpen font-extrabold text-3xl sm:text-5xl mb-10 lg:text-8xl text-[#144a36] leading-tight">
            Connecting Pets 
            With <br /> <span className="text-[#88b62c]">Loving Families</span>
          </h1>

          <p className=" inter lg:w-4xl md:w-lg  text-black text-base sm:text-lg md:text-xl lg:text-4xl font-medium leading-loose">
            At AdoptBuddy, we believe every pet deserves a safe home every pet lover deserves the perfect companion.
          </p>
        </div>
        </div>
        </div>
      </section>
      
{/*content*/}
       <section className="bg-white/40 px-20 py-30"
        style={{
           backgroundImage: `url(${background})`,
         }}>

      {/* Story */}

          <div>
           <h2 className="playpen text-5xl font-extrabold text-center text-[#144a36]">
            <span className="text-[#88b62c]">-----</span>AdoptBuddy<span className="text-[#88b62c]">-----</span>
            </h2> 
            <p className="inter mt-16 mr-20 lg:ml-20 text-black text-2xl font-medium leading-relaxed">
               <span className="playpen text-[#88b62c] text-3xl font-bold text-center">---Connecting Hearts---</span> <br/>AdoptBuddy was created to bring together pets in need of loving homes and people looking for loyal companions, because no one—human or animal—should have to face loneliness alone.
<br/><br/><span className="playpen text-[#88b62c] text-3xl font-bold">---Reuniting Lost Families---</span><br/> We help lost pets find their way back home by connecting communities and pet owners, giving families hope and increasing the chances of joyful reunions.
<br/><br/><span className="playpen text-[#88b62c] text-3xl font-bold">---Pet Care---</span> <br/>Beyond adoption, AdoptBuddy offers access to trusted veterinarians and pet healthcare support to ensure every pet enjoys a happy, healthy life.
<br/><br/><span className="playpen text-[#88b62c] text-3xl font-bold">---Building a Caring Community---</span> <br/>We believe every pet deserves love, safety, and a family. Through compassion and responsible pet ownership, we're creating a community where animals are protected, cherished, and never forgotten.
            </p>
          </div>
          </section>
          <section className="px-20 py-15">
      {/* Mission + Vision */}
      <div className="grid md:grid-cols-2 gap-20 mt-30">

       <div className="bg-white ml-10 p-8  pt-10 lg:ml-20 lg:pt-6 rounded-2xl  shadow-lg hover:-translate-y-2 transition duration-300">
         <div className="flex">
           <img
            src={OurMission} 
            alt="Mission Icon"
             className="md:w-30 md:h-30 lg:-mt-5" /> 
       <h3 className="playpen text-4xl lg:text-5xl lg:mt-4 font-bold lg:pl-10 md:pl-5 pl-30 text-[#144a36]">
        Our Mission
        </h3> 
        </div>
         <p className="inter mt-5 lg:mt-3 text-xl lg:text-2xl text-black"> 
          To reduce the number of homeless pets by promoting adoption, 
        responsible pet care and community awareness.
        </p> 
        </div> 
        <div className="bg-white mr-10 p-8 pt-10  lg:mr-20 lg:pt-6 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300"> 
          <div className="flex "> 
            <img 
            src={ourvision}
             alt="Vision Icon" 
             className="md:w-30 md:h-30 lg:-mt-5" /> 
             <h3 className=" playpen text-4xl lg:text-5xl lg:mt-4 font-bold lg:pl-10 pl-30 md:pl-5 text-[#144a36] ">
              Our Vision
              </h3>
               </div>
                <p className="inter mt-5 lg:mt-3 text-xl lg:text-2xl text-black"> 
                  To create a pet-first ecosystem that ensures happy pets,
                   informed pet parents and stronger communities. 

        </p>
</div>


      </div>

</section>

      {/* TEAM */}
      <section className=" py-15 px-6"
      style={{
           backgroundImage: `url(${background2})`,
         }}
         >
  <div className="max-w-auto lg:mx-20">

    <h2 className="playpen text-5xl font-extrabold text-center text-[#144a36] mt-20">
      <span className="text-[#88b62c]">-----</span>Our Team<span className="text-[#88b62c]">-----</span>
    </h2>

    <div className="inter grid md:grid-cols-2 lg:grid-cols-4 gap-15 mt-20">
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

  <Footer/>
  </>
   );
  }