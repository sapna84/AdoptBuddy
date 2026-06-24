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
    line1: "+91 9*** *****",
    line2: "Mon-Sat, 9AM - 6PM",
  },
  {
    icon: EmailIcon,
    title: "Email",
    line1: "connect@adoptbuddy.com",
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
    <section className="max-w-auto lg:px-20 mx-auto px-6 py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactInform.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12"
            />

            <div>
              <h3 className="playpen font-bold text-lg">
                {item.title}
              </h3>

              <p>{item.line1}</p>
              <p>{item.line2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}