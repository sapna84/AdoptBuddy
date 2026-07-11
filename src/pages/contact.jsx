import Navbar from "../components/navbar.jsx";
import Footer from"../components/footer.jsx";
import ContactNote from "../assets/images/background/background7.png";
import MsgIcon from "../assets/images/icons/msg.svg";
import MobileBanner from "../assets/images/banners/contactUs_mobile.png";
import Contactbanner from "../assets/images/banners/contactUs_banner.png";
import ContactUsInfo from "../components/contactInfo";
import ContactForm from "../components/contactForm";
import FAQ from "../components/FAQ";

export default function Contact() {
  return (
    <>
      <Navbar />

             <section className="relative overflow-hidden lg:mt-32 mt-15"
                   >
                     <img
                       src={MobileBanner}
                       alt="Hero Banner"
                       className="block lg:hidden md:hidden w-full h-full sm:h-[600px] object-cover"
                     />
                <img
                  src={Contactbanner}
                  alt="About Hero"
                  className="hidden lg:block md:block w-full h-[350px] py:20 md:h-[500px] lg:h-full object-cover"
                />
            
        <div className="absolute inset-0 px-6 flex ">
          <div className=" mt-10 lg:mt-15 lg:max-w-8xl pl-6 md:pl-12 lg:pl-20">
            <p className=" lg:w-4xl md:w-lg  text-white text- sm:text-lg md:text-xl lg:text-4xl font-medium">
            Contact Us
          </p>
         <h1 className=" lg:w-6xl playpen font-extrabold text-6xl sm:text-5xl md:text-6xl lg:text-8xl text-white leading-tight lg:leading-tight">
              Because Every Pet Deserves <span className="text-[#88b62c]">a Home </span>
              </h1>

          <p className=" lg:w-4xl md:w-lg mt-10 lg:mt-10 text-white text-base sm:text-lg md:text-xl lg:text-4xl font-medium leading-loose lg:leading-tight">
           Have questions, need support, or want to report a lost or found pet? We're here to help.
           </p>
        </div>
        </div>
            </section>

      <ContactUsInfo />

      <section className="max-w-auto mx-auto lg:px-20 px-10 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-30 ">
          <ContactForm />


          <div className="hidden lg:block md:block relative rounded-3xl overflow-hidden hover:-translate-y-2 transition-all shadow-lg hover:shadow-xl duration-300">
  <img
    src={ContactNote}
    alt="Contact Message"
    className="w-full h-full"
  />

  {/* Text on image */}
  <div className="absolute px-30 inset-0 flex items-center justify-center ">
    <h2 className=" text-4xl lg:ml-60 lg:text-7xl font-bold text-[#144a36] leading-loose">
      We're Just <br />
      A Message
      Away!
    </h2>
  </div>

  {/* Message icon pointing toward form */}
  <img
    src={MsgIcon}
    alt="Message"
    className="absolute lg:left-[20px] top-50 lg:top-1/2 -translate-y-1/2 lg:w-80"
  />
</div>


        </div>
      </section>

      <section className="max-w-auto lg:px-20 px-10 mx-auto py-10 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-30">
          
<section id="faq" className="relative rounded-3xl overflow-hidden hover:-translate-y-2 transition-all shadow-lg hover:shadow-xl duration-300">
  <FAQ />
</section>
          {/*Address*/}
<div className="relative bg-white rounded-3xl border-[#88b62c] lg:border-6 border-4 shadow-lg overflow-hidden relative rounded-3xl overflow-hidden hover:-translate-y-2 transition-all shadow-lg hover:shadow-xl duration-300">
  <iframe
    title="AdoptBuddy Location"
    src="https://maps.google.com/maps?q=Jaipur,Rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed"
    className="w-full h-full"
    loading="lazy"
  ></iframe>
  
  <div className="absolute lg:bottom-6 bottom-4 right-4 lg:right-6 bg-white rounded-2xl shadow-lg p-4 max-w-[250px]">
    <h3 className="playpen font-bold text-[#144a36] lg:text-lg">
      AdoptBuddy Office
    </h3>

    <p className="text-sm mt-2">
      25, Gokuldham Colony
      <br />
      Ullasnagar, Jaipur
      <br />
      Rajasthan 302026, India
    </p>
  </div>
</div>
        </div>
      </section>

      <Footer />
    </>
  );
}