import Navbar from "../components/navbar.jsx";
import Footer from"../components/footer.jsx";
import AboutBanner from "../assets/images/banners/aboutUs_banner.png";
import MobileBanner from "../assets/images/banners/aboutUs_mobile.png";
import background from "../assets/images/background/background5.png";
import background2 from "../assets/images/background/background6.png";
import dogImg from "../assets/images/pets/dog.png";
import catImg from "../assets/images/pets/cat.png";
import TeamCard from "../components/teamcard.jsx";
import Team from "../data/team";
export default function About() {
     return (
      <>
       <Navbar />
       {/* banner*/}
       <section className="relative overflow-hidden lg:mt-32 mt-15"
      >
        <img
          src={MobileBanner}
          alt="Hero Banner"
          className="block lg:hidden md:hidden w-full h-full sm:h-[600px] object-cover"
        />
          <img
            src={AboutBanner}
            alt="About Hero"
            className="hidden lg:block md:block w-full h-[300px] py:20 md:h-[400px] lg:h-full object-cover"
          />
      
       
        
        <div className="absolute inset-0 px-6 flex ">
          <div className=" mt-6 lg:mt-20 lg:max-w-8xl pl-6 md:pl-12 lg:pl-20">
             <div className="">
          <h1 className=" playpen  lg:w-6xl font-extrabold text-5xl sm:text-5xl lg:mb-10 mb-4 lg:text-8xl text-[#144a36] leading-tight">
           
            Connecting Pets 
            With  <span className="text-[#88b62c]"><br className="block lg:hidden md:hidden"/>Loving Families</span>
          </h1>

          <p className=" inter lg:w-4xl md:w-lg  text-xl text-base sm:text-lg md:text-xl lg:text-4xl font-medium leading-loose">
            At AdoptBuddy, we believe every pet deserves a safe home every pet lover deserves the perfect companion.
          </p>
        </div>
        </div>
        </div>
      </section>
      
{/*content*/}
       <section className="bg-white/40 lg:px-20 px-10 py-10 lg:py-30">
         <div
    className="hidden lg:block absolute inset-0 bg-cover bg-center -z-10"
    style={{
      backgroundImage: `url(${background})`,
    }}
  />
      {/* Story */}

          <div>
           <h2 className="playpen text-4xl lg:text-5xl font-extrabold text-center text-[#144a36]">
            <span className="text-[#88b62c] text-2xl lg:text-5xl">-----</span>AdoptBuddy<span className="text-[#88b62c] text-2xl lg:text-5xl">-----</span>
            </h2> 
            <p className="inter mt-10 lg:mt-16 lg:mr-20 lg:ml-20 text-black text-2xl font-medium leading-relaxed">
               <span className="playpen text-[#88b62c] lg:text-4xl text-2xl font-bold text-center">---Connecting Hearts---</span> <br className="hidden lg:block md:block"/><br/>AdoptBuddy was created to bring together pets in need of loving homes and people looking for loyal companions, because no one—human or animal—should have to face loneliness alone.
<br/><br/><span className="playpen text-[#88b62c] lg:text-4xl text-2xl font-bold text-center">---Reuniting Lost Families---</span><br className="hidden lg:block md:block"/> <br/>We help lost pets find their way back home by connecting communities and pet owners, giving families hope and increasing the chances of joyful reunions.
<br/><br/><span className="playpen text-[#88b62c] lg:text-4xl text-2xl font-bold text-center">---Pet Care---</span> <br className="hidden lg:block md:block"/><br/>Beyond adoption, AdoptBuddy offers access to trusted veterinarians and pet healthcare support to ensure every pet enjoys a happy, healthy life.
<br/><br/><span className="playpen text-[#88b62c] lg:text-4xl text-2xl font-bold text-center">---Building a Caring Community---</span><br className="hidden lg:block md:block"/> <br/>We believe every pet deserves love, safety, and a family. Through compassion and responsible pet ownership, we're creating a community where animals are protected, cherished, and never forgotten.
            </p>
          </div>
          </section>

 {/* Who We Are */}
 <section className="px-10 md:px-12 lg:px-20 py-10 lg:py-20">
 <div className="lg:mt-16 space-y-16">
<h1 className="playpen text-4xl lg:text-5xl font-bold text-center text-[#88b62c]">
          -----<span className="text-[#144a36]">Who We Are</span>-----</h1>
    {/* Our Mission - image left, text right */}
    <div className="grid rounded-2xl md:grid-cols-2 gap-2 lg:gap-2 items-start lg:mr-20 lg:ml-20">
      <img
        src={dogImg}
        alt="Our Mission"
        className="w-100 h-full lg:ml-40 md:h-80 lg:h-96 object-cover rounded-2xl border-4 border-[#144a36]"
      />
      <div className=" lg:mr-40 mt-4">
        <h3 className="playpen text-4xl lg:text-5xl font-bold text-center text-[#88b62c]">
          -----<span className="text-[#144a36]">Our Mission</span>-----
        </h3>
        <p className="inter mt-10 text-xl md:text-xl lg:text-3xl text-black leading-relaxed text-center">
          To reduce the number of homeless and lost pets by promoting responsible adoption, accessible veterinary care, and compassionate pet ownership. We strive to build a supportive community where every pet receives the love, care, and safe home they deserve.
        </p>
      </div>
    </div>

    {/* Our Vision - text left, image right */}
    <div className="grid rounded-2xl md:grid-cols-2 gap-2 lg:gap-2 items-start lg:mt-40  lg:mr-20 lg:ml-20">
      <div className="order-2 lg:ml-40 mt-4 md:order-1">
        <h3 className="playpen text-4xl lg:text-5xl font-bold text-center text-[#88b62c]">
          -----<span className="text-[#144a36]">Our Vision</span>-----
        </h3>
        <p className="inter mt-10 text-xl md:text-xl lg:text-3xl text-black leading-relaxed text-center">
          To create a pet-first ecosystem that connects pets with loving families, empowers pet parents with trusted resources, and builds stronger communities where every animal is safe, healthy, and valued.
        </p>
      </div>
      <img
        src={catImg}
        alt="Our Vision"
        className="order-1 md:order-2 lg:mr-40 justify-self-end w-100 h-full md:h-80 lg:h-96 object-cover rounded-2xl border-4 border-[#144a36]"
      />
    </div>

  </div>
</section>

      {/* TEAM */}
      <section className=" lg:py-15 py-10 px-10"
      style={{
           backgroundImage: `url(${background2})`,
         }}
         >
  <div className="max-w-auto lg:mx-20">

    <h2 className="playpen lg:text-5xl text-4xl font-extrabold text-center text-[#144a36] lg:mt-20">
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
