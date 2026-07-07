import { useState } from "react";
import AppointmentSuccess from "../components/appointmentpopup.jsx";

export default function Appointmentform() {
  const [fileName, setFileName] = useState("");
  const [petName, setPetName] = useState("");
  const [age, setAge] = useState("");
  const [ageUnit, setAgeUnit] = useState("Years"); // Years | Months | Days
  const [description, setDescription] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const [errors, setErrors] = useState({
    petName: "",
    age: "",
    description: "",
    ownerName: "",
    phone: "",
    email: "",
  });

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const validateName = (field, value) => {
    const regex = /^[A-Za-z\s]+$/;

    if (field === "petName") setPetName(value);
    if (field === "ownerName") setOwnerName(value);

    setErrors((prev) => ({
      ...prev,
      [field]: value === "" || regex.test(value) ? "" : "Enter valid name",
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
      email: value === "" || regex.test(value) ? "" : "Enter valid email",
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

  const getMaxForUnit = (unit) => {
  if (unit === "Years") return 30;
  if (unit === "Months") return 30 * 12;
  if (unit === "Days") return 30 * 365;
  return 30;
};

const validateAge = (value, unit = ageUnit) => {
  setAge(value);

  const max = getMaxForUnit(unit);

  setErrors((prev) => ({
    ...prev,
    age:
      value === "" || value < 0 || value > max
        ? `Age must be between 0 and ${max} ${unit.toLowerCase()}.`
        : "",
  }));
};

const handleAgeUnitChange = (unit) => {
  setAgeUnit(unit);
  // re-validate existing value against the new unit's max
  if (age !== "") validateAge(age, unit);
};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!petName.trim() || !/^[A-Za-z\s]+$/.test(petName)) {
      setErrors((prev) => ({ ...prev, petName: "Enter valid name" }));
      return;
    }

    if (!description.trim() || description.length < 10) {
      setErrors((prev) => ({
        ...prev,
        description: "Description must be at least 10 characters.",
      }));
      return;
    }

   const max = getMaxForUnit(ageUnit);
if (age === "" || age < 0 || age > max) {
  setErrors((prev) => ({
    ...prev,
    age: `Age must be between 0 and ${max} ${ageUnit.toLowerCase()}.`,
  }));
  return;
}

    if (!ownerName.trim() || !/^[A-Za-z\s]+$/.test(ownerName)) {
      setErrors((prev) => ({ ...prev, ownerName: "Enter valid name" }));
      return;
    }

    if (!phone || phone.length !== 10) {
      setErrors((prev) => ({ ...prev, phone: "Enter valid Phone no." }));
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Enter valid email" }));
      return;
    }

    if (
      errors.petName ||
      errors.age ||
      errors.description ||
      errors.ownerName ||
      errors.phone ||
      errors.email
    ) {
      return;
    }

    // Success popup
    setShowSuccess(true);

    // Clear form
    setPetName("");
    setAge("");
    setDescription("");
    setOwnerName("");
    setPhone("");
    setEmail("");
    setFileName("");

    setErrors({
      petName: "",
      age: "",
      description: "",
      ownerName: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="bg-white/60 rounded-xl shadow-lg p-8">
      <h2 className="playpen text-4xl font-bold text-[#144a36] mb-9">
        Appointment Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* pet name */}
          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Pet Name
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={petName}
              onChange={(e) => validateName("petName", e.target.value)}
              placeholder="Enter your pet's name"
              className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition
  hover:border-[#88b62c]
  focus:border-[#88b62c]
  focus:ring-2 focus:ring-[#88b62c]/30
  focus:outline-none"
            />
            {errors.petName && (
              <p className="text-red-600 mt-1">{errors.petName}</p>
            )}
          </div>

          {/* category */}
          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Pet Category
              <span className="text-red-500">*</span>
            </label>
            <select className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition
  hover:border-[#88b62c]
  focus:border-[#88b62c]
  focus:ring-2 focus:ring-[#88b62c]/30
  focus:outline-none" defaultValue="">
              <option value="" disabled>
                Select your pet's category
              </option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Bird</option>
              <option>Rabbit</option>
              <option>Hamster</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* gender */}
          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Pet Gender
              <span className="text-red-500">*</span>
            </label>
            <select className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition
  hover:border-[#88b62c]
  focus:border-[#88b62c]
  focus:ring-2 focus:ring-[#88b62c]/30
  focus:outline-none" required defaultValue=" Select gender of your pet">
              <option value="" disabled>
                Select gender of your pet
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Unknown</option>
            </select>
          </div>

          {/* pet age */}
<div>
  <label className="block font-bold text-xl mb-2 text-[#144a36]">
    Pet Age
    <span className="text-red-500">*</span>
  </label>

  <div className="flex gap-2">
    <input
      type="number"
      value={age}
      onChange={(e) => validateAge(e.target.value)}
      required
      min="0"
      placeholder="Enter age"
      className="w-2/3 rounded-lg border-3 border-[#144a36] bg-white p-3 transition
  hover:border-[#88b62c]
  focus:border-[#88b62c]
  focus:ring-2 focus:ring-[#88b62c]/30
  focus:outline-none"
    />

    <select
      value={ageUnit}
      onChange={(e) => handleAgeUnitChange(e.target.value)}
      className="w-1/3 rounded-lg border-3 border-[#144a36] bg-white p-3 transition
  hover:border-[#88b62c]
  focus:border-[#88b62c]
  focus:ring-2 focus:ring-[#88b62c]/30
  focus:outline-none"
    >
      <option value="Days">Days</option>
      <option value="Months">Months</option>
      <option value="Years">Years</option>
    </select>
  </div>

  {errors.age && <p className="text-red-600 mt-1">{errors.age}</p>}
</div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* appointment date */}
          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Date
              <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              required
              className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition
  hover:border-[#88b62c]
  focus:border-[#88b62c]
  focus:ring-2 focus:ring-[#88b62c]/30
  focus:outline-none"
            />
          </div>

          {/* time */}
          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Time
              <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              required
              className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition
  hover:border-[#88b62c]
  focus:border-[#88b62c]
  focus:ring-2 focus:ring-[#88b62c]/30
  focus:outline-none"
            />
          </div>
        </div>

        {/* describe condition */}
        <div>
          <label className="block font-bold text-xl mb-2 text-[#144a36]">
            Describe The Issue
            <span className="text-red-500"> *</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => validateDescription(e.target.value)}
            rows="4"
            required
            placeholder="Type any other details..."
            className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition
  hover:border-[#88b62c]
  focus:border-[#88b62c]
  focus:ring-2 focus:ring-[#88b62c]/30
  focus:outline-none"
          />
          {errors.description && (
            <p className="text-red-600 mt-1">{errors.description}</p>
          )}
        </div>

        {/* upload pet reports */}
        <div>
          <label className="block font-bold text-xl mb-2 text-[#144a36]">
            Upload Reports
            <span className="text-gray-500 text-sm"> (Optional)</span>
          </label>

          <label
            className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-xl bg-gray-200 cursor-pointer border-gray-500 hover:bg-gray-300"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="flex item-center gap-4">
              <div>
                <p className="font-medium">
                  Drag & Drop file here &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-black text-3xl">or</span>
                </p>
                <p className="text-sm text-gray-500">
                  PDF, JPG, PNG (Max. 5MB)
                </p>
              </div>
              <span className="px-4 py-3 border-2 border-[#144a36] rounded-lg text-[#144a36] font-medium bg-white hover:bg-[#144a36] hover:text-white transition">
                Choose File
              </span>
            </div>
            {fileName && (
              <p className="mt-3 text-sm text-[#144a36] font-medium">
                Selected: {fileName}
              </p>
            )}

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            />
          </label>
        </div>

        {/* owner contact info */}
        <h3 className="block font-bold text-2xl mt-10 mb-6 text-[#144a36]">
          Your Contact Information
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {/* name */}
          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Your Name
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={ownerName}
              onChange={(e) => validateName("ownerName", e.target.value)}
              required
              placeholder="Enter your name"
              className="w-full rounded-lg p-3 border-3 border-[#144a36] bg-white transition
  hover:border-[#88b62c]
  focus:border-[#88b62c]
  focus:ring-2 focus:ring-[#88b62c]/30
  focus:outline-none"
            />
            {errors.ownerName && (
              <p className="text-red-600 mt-1">{errors.ownerName}</p>
            )}
          </div>

          {/* phone no. */}
          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Phone Number
              <span className="text-red-500">*</span>
            </label>
            <input
  type="tel"
  value={phone}
  onChange={(e) => validatePhone(e.target.value)}
  maxLength={10}
  required
  placeholder="Enter your phone number"
  className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition
  hover:border-[#88b62c]
  focus:border-[#88b62c]
  focus:ring-2 focus:ring-[#88b62c]/30
  focus:outline-none"
/>
            {errors.phone && (
              <p className="text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>

          {/* email */}
          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Email Address
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition
  hover:border-[#88b62c]
  focus:border-[#88b62c]
  focus:ring-2 focus:ring-[#88b62c]/30
  focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-600 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* submit button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="inter mt-10 px-10 py-4 text-2xl font-bold rounded-xl cursor-pointer border-4
            bg-[#144a36] border-[#144a36] text-white
            hover:bg-[#88b62c] hover:text-[#144a36] transition"
          >
            Book Appointment
          </button>
        </div>
      </form>

      {showSuccess && <AppointmentSuccess onClose={() => setShowSuccess(false)} />}
    </div>
  );
}
