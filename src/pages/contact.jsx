import Navbar from "../components/navbar.jsx";
import Footer from"../components/footer.jsx";
import ContactNote from "../assets/images/contactmsg_note.png";
import MsgIcon from "../assets/images/icons/msg.svg";

import Contactbanner from "../assets/images/banners/contactUs_banner.png";
import ContactUsInfo from "../components/contactInfo";
import ContactForm from "../components/contactForm";
import FAQ from "../components/FAQ";

export default function Contact() {
  return (
    <>
      <Navbar />

             {/* banner*/}
             <section className="relative overflow-hidden">
                <img
                  src={Contactbanner}
                  alt="About Hero"
                  className="w-full h-[350px] py:20 md:h-[500px] lg:h-[500px] object-cover"
                />
            
             
              
              <div className="absolute inset-0 px-6 flex ">
                <div className="max-w-auto mt-10 lg:max-w-8xl pl-6 md:pl-12 lg:pl-20">
                   <div className="max-w-xl lg:max-w-4xl">
                    <p className="mt-6 lg:mt-6 text-lg lg:text-2xl text-white
                    ">
                 Contact Us
                </p>
                <h1 className=" playpen lg:mt-6 text-4xl md:text-6xl font-bold text-white leading-tight lg:leading-tight">
                  Because Every Pet Deserves <br /><span className="text-[#88b62c]">a Way Home </span>
                </h1>
      
                <p className="mt-6 lg:mt-12 text-lg lg:text-xl text-white lg:leading-tight">
                  Have questions, need support, or want to report a lost or found pet? We're here to help.
                </p>
              </div>
              </div>
              </div>
            </section>

      <ContactUsInfo />

      <section className="max-w-auto lg:px-20 mx-auto px-6 py-6">
        <div className="grid lg:grid-cols-2 gap-30">
          
          <ContactForm />


          <div className="relative rounded-3xl overflow-hidden">
  <img
    src={ContactNote}
    alt="Contact Message"
    className="w-full h-full object-cover"
  />

  {/* Text on image */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h2 className="playpen text-4xl lg:ml-60 lg:text-7xl font-bold text-[#144a36] leading-loose">
      We're Just <br />
      A Message
    </h2>
  </div>

  {/* Message icon pointing toward form */}
  <img
    src={MsgIcon}
    alt="Message"
    className="absolute lg:left-[20px] top-50 lg:top-1/2 -translate-y-1/2 w-full lg:w-80"
  />
</div>


        </div>
      </section>

      <section className="max-w-auto lg:px-20 mx-auto px-6 pb-10">
        <div className="grid lg:grid-cols-2 gap-30">

          <FAQ />
          {/*Address*/}

<div className="relative bg-white rounded-3xl border-[#88b62c] border-6 shadow-lg overflow-hidden">
  <iframe
    title="AdoptBuddy Location"
    src="https://maps.google.com/maps?q=Jaipur,Rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed"
    className="w-full h-full"
    loading="lazy"
  ></iframe>
  
  <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-lg p-4 max-w-[250px]">
    <h3 className="playpen font-bold text-[#144a36] text-lg">
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