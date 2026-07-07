import { useState } from "react";
import petbreeds from "../data/petBreeds.js";
import MsgSentSuccess from "../components/MsgSentPopUp.jsx";

export default function Reportform() {
  const [fileName, setFileName] = useState("");
  const [category, setCategory] = useState("");
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [ageUnit, setAgeUnit] = useState("Years"); // Years | Months | Days
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const [errors, setErrors] = useState({
    petName: "",
    petAge: "",
    description: "",
    location: "",
    ownerName: "",
    phone: "",
    Email: "",
    image: "",
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

  const validateName = (value, field) => {
    const regex = /^[A-Za-z\s]+$/;

    if (field === "petName") setPetName(value);
    else setOwnerName(value);

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
      ? "enter digits only"
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
      Email: value === "" || regex.test(value) ? "" : "Enter valid email",
    }));
  };

  const getMaxForUnit = (unit) => {
    if (unit === "Years") return 30;
    if (unit === "Months") return 30 * 12;
    if (unit === "Days") return 30 * 365;
    return 30;
  };

  const validateAge = (value, unit = ageUnit) => {
    setPetAge(value);

    const max = getMaxForUnit(unit);

    setErrors((prev) => ({
      ...prev,
      petAge:
        value === "" || value < 0 || value > max
          ? `Age must be between 0 and ${max} ${unit.toLowerCase()}.`
          : "",
    }));
  };

  const handleAgeUnitChange = (unit) => {
    setAgeUnit(unit);
    // re-validate existing value against the new unit's max
    if (petAge !== "") validateAge(petAge, unit);
  };

  const validateDescription = (value) => {
    setDescription(value);

    setErrors((prev) => ({
      ...prev,
      description:
        value.length === 0
          ? ""
          : value.length < 3
          ? "Description must be at least 3 characters."
          : value.length > 200
          ? "Description cannot exceed 200 characters."
          : "",
    }));
  };

  const validateLocation = (value) => {
    setLocation(value);

    setErrors((prev) => ({
      ...prev,
      location: value.length === 0 ? "" : value.length < 3 ? "Enter valid location" : "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pet Age
    const max = getMaxForUnit(ageUnit);
    if (petAge === "" || petAge < 0 || petAge > max) {
      setErrors((prev) => ({
        ...prev,
        petAge: `Age must be between 0 and ${max} ${ageUnit.toLowerCase()}.`,
      }));
      return;
    }

    // Description
    if (!description.trim() || description.length < 10) {
      setErrors((prev) => ({
        ...prev,
        description: "Description must be at least 10 characters.",
      }));
      return;
    }

    // Location
    if (!location.trim() || location.length < 3) {
      setErrors((prev) => ({
        ...prev,
        location: "Enter valid location",
      }));
      return;
    }

    // Name
    if (!ownerName.trim()) {
      setErrors((prev) => ({
        ...prev,
        ownerName: "Enter valid name",
      }));
      return;
    }

    // Phone
    if (!phone.trim() || phone.length !== 10) {
      setErrors((prev) => ({
        ...prev,
        phone: "Enter valid Phone no.",
      }));
      return;
    }

    // Email
    if (!Email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
      setErrors((prev) => ({
        ...prev,
        Email: "Enter valid email",
      }));
      return;
    }

    // Image
    if (!fileName) {
      setErrors((prev) => ({
        ...prev,
        image: "Please upload pet image first.",
      }));
      return;
    }

    // If any validation error already exists
    if (
      errors.petName ||
      errors.petAge ||
      errors.description ||
      errors.location ||
      errors.ownerName ||
      errors.phone ||
      errors.Email ||
      errors.image
    ) {
      return;
    }

    // Success popup
    setShowSuccess(true);

    // Clear form
    setPetName("");
    setPetAge("");
    setDescription("");
    setLocation("");
    setOwnerName("");
    setPhone("");
    setEmail("");
    setCategory("");
    setFileName("");

    setErrors({
      petName: "",
      petAge: "",
      description: "",
      location: "",
      ownerName: "",
      phone: "",
      Email: "",
      image: "",
    });
  };

  return (
    <div className="bg-white/60 rounded-xl shadow-lg p-8">
      <h2 className="playpen text-4xl font-bold text-[#144a36] mb-9">
        Details About Pet
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* category */}
          <div>
            <label className="inter block font-bold text-xl mb-2 text-[#144a36]">
              Pet Category
              <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Pet Category</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Bird">Bird</option>
            </select>
          </div>

          {category && category !== "Bird" && (
            <div>
              <label className="inter block font-bold text-xl mb-2 text-[#144a36]">
                Pet Breed
                <span className="text-gray-500"> (if known)</span>
              </label>

              <select className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none">
                <option>Select Breed</option>
                {(petbreeds[category] || []).map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </div>
          )}

          {category === "Bird" && (
            <div>
              <label className="inter block font-bold text-xl mb-2 text-[#144a36]">
                Bird Type
                <span className="text-red-500"> *</span>
              </label>

              <select
                className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none"
                required
              >
                <option>Select Bird Type</option>
                {(petbreeds.Bird || []).map((bird) => (
                  <option key={bird} value={bird}>
                    {bird}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Gender */}
          <div>
            <label className="inter block font-bold text-xl mb-2 text-[#144a36]">
              Pet Gender
              <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none"
              required
            >
              <option>Select gender of your pet</option>
              <option>Male</option>
              <option>Female</option>
              <option>Unknown</option>
            </select>
          </div>

          {/* pet name */}
          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Pet Name
              <span className="text-gray-500"> (if known)</span>
            </label>
            <input
              type="text"
              value={petName}
              onChange={(e) => validateName(e.target.value, "petName")}
              placeholder="Enter your pet's name"
              className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none"
            />
            {errors.petName && (
              <p className="text-red-600 mt-1">{errors.petName}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* pet age */}
          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Pet Age
              <span className="text-red-500">*</span>
              <span className="text-gray-500 text-md"> (approx.)</span>
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={petAge}
                onChange={(e) => validateAge(e.target.value)}
                required
                min="0"
                placeholder="Enter your pet's age"
                className="w-2/3 rounded-lg border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none"
              />

              <select
                value={ageUnit}
                onChange={(e) => handleAgeUnitChange(e.target.value)}
                className="w-1/3 rounded-lg border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none"
              >
                <option value="Days">Days</option>
                <option value="Months">Months</option>
                <option value="Years">Years</option>
              </select>
            </div>

            {errors.petAge && (
              <p className="text-red-600 mt-1">{errors.petAge}</p>
            )}
          </div>

          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Color/Marking
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter color or any markings"
              className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none"
            />
          </div>
        </div>

        {/* description */}
        <div>
          <label className="block font-bold text-xl mb-2 text-[#144a36]">
            Description
            <span className="text-red-500">*</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => validateDescription(e.target.value)}
            rows="4"
            required
            placeholder="Type any other details..."
            className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none"
          />
          {errors.description && (
            <p className="text-red-600 mt-1">{errors.description}</p>
          )}
        </div>

        {/* upload pet image */}
        <div>
          <label className="block font-bold text-xl mb-2 text-[#144a36]">
            Upload Pet Image
            <span className="text-red-500">*</span>
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
                  <span className="text-3xl">or</span>
                </p>
                <p className="text-sm text-gray-500">
                  PDF, JPG, PNG (Max. 5MB)
                </p>
              </div>
              <label
                htmlFor="petImage"
                className="px-4 py-3 border-2 border-[#144a36] rounded-lg text-[#144a36] font-medium bg-white hover:bg-[#144a36] hover:text-white transition cursor-pointer"
              >
                Choose File
              </label>
            </div>
            {fileName && (
              <p className="mt-3 text-sm text-[#144a36] font-medium">
                Selected: {fileName}
              </p>
            )}

            <input
              id="petImage"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];

                if (file) {
                  setFileName(file.name);

                  setErrors((prev) => ({
                    ...prev,
                    image: "",
                  }));
                } else {
                  setFileName("");
                }
              }}
            />
          </label>
          {errors.image && (
            <p className="text-red-600 text-m mt-1">{errors.image}</p>
          )}
        </div>

        {/* lost/found location, date, time */}
        <h3 className="block font-bold text-2xl mt-10 mb-6 text-[#144a36]">
          Location & Time
        </h3>

        <div className="grid md:grid-cols-3 gap-3">
          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Location <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              value={location}
              onChange={(e) => validateLocation(e.target.value)}
              placeholder="Enter location"
              className="rounded-lg w-full border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none"
              required
            />
            {errors.location && (
              <p className="text-red-600 mt-1">{errors.location}</p>
            )}
          </div>

          {/* date */}
          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Date
              <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              required
              className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none"
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
              className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none"
            />
          </div>
        </div>

        {/* owner contact info */}
        <h3 className="block font-bold text-2xl mt-10 mb-6 text-[#144a36]">
          Your Contact Information
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Your Name
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={ownerName}
              onChange={(e) => validateName(e.target.value, "ownerName")}
              required
              placeholder="Enter your name"
              className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none"
            />
            {errors.ownerName && (
              <p className="text-red-600 mt-1">{errors.ownerName}</p>
            )}
          </div>

          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Phone Number
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => validatePhone(e.target.value)}
              maxLength={10}
              required
              placeholder="Enter your phone number"
              className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none"
            />
            {errors.phone && (
              <p className="text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block font-bold text-xl mb-2 text-[#144a36]">
              Email Address
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={Email}
              onChange={(e) => validateEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="w-full rounded-lg border-3 border-[#144a36] bg-white p-3 transition hover:border-[#88b62c] focus:border-[#88b62c] focus:ring-2 focus:ring-[#88b62c]/30 focus:outline-none"
            />
            {errors.Email && (
              <p className="text-red-600 mt-1">{errors.Email}</p>
            )}
          </div>
        </div>

        {/* submit button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="inter px-10 py-4 text-2xl font-bold rounded-xl cursor-pointer border-4
            bg-[#144a36] border-[#144a36] text-white
            hover:bg-[#88b62c] hover:text-[#144a36] transition"
          >
            Submit Report
          </button>
        </div>
      </form>

      {showSuccess && <MsgSentSuccess onClose={() => setShowSuccess(false)} />}
    </div>
  );
}