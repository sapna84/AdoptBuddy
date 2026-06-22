
import Navbar from "../components/navbar.jsx";
import Footer from"../components/footer.jsx";
import AboutBanner from "../assets/images/banners/aboutUs_banner.png";
export default function About() {
     return (
      <>
       <Navbar />
       {/* banner*/}
        <section className="max-w-[1440px] mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-10">
        
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#144a36] leading-tight">
            Connecting Pets <br />
            With <span className="text-[#88b62c]">Loving Families</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            At AdoptBuddy, we believe every pet deserves a safe home every pet
            lover deserves the perfect companion.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={AboutBanner}
            alt="About Hero"
            className="w-full max-w-md"
          />
        </div>
      </section>
      {/* our story*/}
       <section className="bg-[#f7f1e6] py-16 px-6">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <img
            src={AboutBanner}
            alt="Our Story"
            className="rounded-2xl"
          />

          <div>
            <h2 className="text-3xl font-bold text-[#144a36]">
              Our Story
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              AdoptBuddy started with a simple idea — to connect abandoned pets
              with loving homes. Over time, it grew into a community of pet lovers,
              veterinarians, and volunteers dedicated to animal welfare.
            </p>
          </div>
        </div>
      </section>
  <Footer/>
  </>
   );
  }