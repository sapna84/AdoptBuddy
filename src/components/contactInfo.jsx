// ContactInfo.jsx

import AddressIcon from "../assets/images/icons/address.svg";
import PhoneIcon from "../assets/images/icons/phone.svg";
import EmailIcon from "../assets/images/icons/email.svg";
import ClockIcon from "../assets/images/icons/clock.svg";

const contactInform = [
  {
    icon: AddressIcon,
    title: "Address",
    line1: "25, Gokuldham Colony",
    line2: "Jaipur, Rajasthan",
  },
  {
    icon: PhoneIcon,
    title: "Phone",
    line1: "+91 5397728010",
    line2: "Mon-Sat, 9AM - 6PM",
  },
  {
    icon: EmailIcon,
    title: "Email",
    line1: "conn@adoptbuddy.com",
    line2: "Response within 24 hrs",
  },
  {
    icon: ClockIcon,
    title: "Working Hours",
    line1: "Monday - Saturday",
    line2: "9:00 AM - 6:00 PM",
  },
];

export default function ContactInfo() {
  return (
    <section className="max-w-auto lg:px-20 md:px-15 px-10 py-15 lg:py-25">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-15 lg:gap-18 ">
        {contactInform.map((item, index) => (
          <div
            key={index}
            className="bg-white border-[#144a36] border-4 rounded-2xl shadow-lg p-4 flex items-center gap-2 md:gap-10 hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-14 h-14 flex"
            />

            <div>
              <h3 className="playpen font-bold text-4xl">
                {item.title}
              </h3>

              <p className="inter mt-8 text-2xl font-medium">{item.line1}</p>
              <p className="inter text-2xl mt-4 font-medium">{item.line2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}