import { useState } from "react";
import MsgSentSuccess from "../components/MsgSentPopUp.jsx";
export default function ContactForm() {
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [Email, setEmail] = useState("");
const [description, setDescription] = useState("");
const [errors, setErrors] = useState({
  name: "",
  phone: "",
  Email: "",
  description: "",
});
const validateName = (value) => {
  setName(value);

  const regex = /^[A-Za-z\s]+$/;

  setErrors((prev) => ({
    ...prev,
    name:
      value === "" || regex.test(value)
        ? ""
        : "Enter valid name",
  }));
};

const validatePhone = (value) => {
  const hasInvalidChars = /[^0-9]/.test(value);
  const digitsOnly = value.replace(/\D/g, "").slice(0, 10);

  setPhone(digitsOnly);

  setErrors((prev) => ({
    ...prev,
    phone: hasInvalidChars
      ? "enter valid digits only"
      : digitsOnly === "" || digitsOnly.length === 10
      ? ""
      : "Phone number must be exactly 10 digits.",
  }));
};

const validateEmail = (value) => {
  setEmail(value);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  setErrors((prev) => ({
    ...prev,
    Email:
      value === "" || regex.test(value)
        ? ""
        : "Enter valid email",
  }));
};
const validateDescription = (value) => {
  setDescription(value);

  setErrors((prev) => ({
    ...prev,
    description:
      value.length === 0
        ? ""
        : value.length < 10
        ? "Description must be at least 10 characters."
        : value.length > 200
        ? "Description cannot exceed 200 characters."
        : "",
  }));
};

const [showSuccess, setShowSuccess] = useState(false);
const handleSubmit = (e) => {
  e.preventDefault();

  // Check for empty fields
  if (!name.trim()) {
    setErrors((prev) => ({ ...prev, name: "Enter valid name" }));
    return;
  }

  if (!phone.trim() || phone.length !== 10) {
    setErrors((prev) => ({
      ...prev,
      phone: "Enter valid Phone no.",
    }));
    return;
  }

  if (!Email.trim()) {
    setErrors((prev) => ({
      ...prev,
      Email: "Enter valid email",
    }));
    return;
  }

  // If any validation error already exists
  if (errors.name || errors.phone || errors.Email || errors.description) {
    return;
  }

setShowSuccess(true);

  // Optional: Clear form after successful submission
  setName("");
  setPhone("");
  setEmail("");
  setDescription("");

};
  return (
    <div className="bg-white/50 rounded-3xl shadow-lg p-10 relative rounded-3xl overflow-hidden hover:-translate-y-2 transition-all shadow-lg hover:shadow-xl duration-300">
      <h2 className="playpen text-5xl font-bold text-[#144a36] mb-8">
        Send Us A Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 p-4">

        {/* Name & Phone */}
        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="inter block font-bold text-xl mb-2">
              Full Name
            </label>
<input
  type="text"
  value={name}
  onChange={(e) => validateName(e.target.value)}
  placeholder="Enter your full name"
  className="inter w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition
  hover:border-[#88b62c]
  focus:border-[#88b62c]
  focus:ring-2 focus:ring-[#88b62c]/30
  focus:outline-none"
/>

{errors.name && (
  <p className="text-red-600 text-m mt-1">
    {errors.name}
  </p>
)}
          </div>

          <div>
            <label className="inter block font-bold text-xl mb-2">
              Phone Number
            </label>
<input
  type="tel"
  value={phone}
  onChange={(e) => validatePhone(e.target.value)}
  maxLength={10}
  required
  placeholder="Enter your phone number"
  className="inter w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition
  hover:border-[#88b62c]
  focus:border-[#88b62c]
  focus:ring-2 focus:ring-[#88b62c]/30
  focus:outline-none"
/>

{errors.phone && (
  <p className="text-red-600 text-m mt-1">
    {errors.phone}
  </p>
)}
          </div>

        </div>

        {/* Email */}
        <div>
          <label className="inter block font-bold text-xl mb-2">
            E-mail
          </label>

          <input
            type="email"
            value={Email}
            onChange={(e) => validateEmail(e.target.value)}
            placeholder="Enter your email"
            className="inter w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition
            hover:border-[#88b62c]
            focus:border-[#88b62c]
            focus:ring-2 focus:ring-[#88b62c]/30
            focus:outline-none"
          />
          {errors.Email && (
  <p className="text-red-600 text-m mt-1">
    {errors.Email}
  </p>
)}
        </div>

        {/* Description */}
        <div>
          <label className="inter block font-bold text-xl mb-2">
            Description
          </label>

         <textarea
  rows="5"
  value={description}
  onChange={(e) => validateDescription(e.target.value)}
  placeholder="Type a message here..."
  className="inter w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition
  hover:border-[#88b62c]
  focus:border-[#88b62c]
  focus:ring-2 focus:ring-[#88b62c]/30
  focus:outline-none"
/>

{errors.description && (
  <p className="text-red-600 text-m mt-1">
    {errors.description}
  </p>
)}
        </div>

        <button
        type="submit"
          className="inter px-10 py-4 text-2xl font-bold rounded-xl cursor-pointer border-4
          bg-[#144a36] border-[#144a36] text-white
          hover:bg-[#88b62c] hover:text-[#144a36] transition"
        >
          Send Message
        </button>

      </form>
      {showSuccess && (
  <MsgSentSuccess
    onClose={() => setShowSuccess(false)}
  />
)}
    </div>
  );
}