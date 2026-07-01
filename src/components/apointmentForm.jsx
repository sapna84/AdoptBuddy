import { useState } from "react";
export default function Appointmentform (){
  const [fileName, setFileName] = useState("");

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
return(
<div className="bg-white/50 rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-[#144a36] mb-8">
        Appointment Details
      </h2>

      <form className="space-y-6">

<div className="grid md:grid-cols-2 gap-6">

          {/*pet name*/}
<div>
            <label className="block font-medium text-[#144a36]">
              Pet Name
              <span className="text-red-500">
              *
              </span>
              </label>
          <input
            type="text"
            required
            placeholder="Enter your pet's name"
            className="w-full border rounded-lg p-3 bg-white"
          />
</div>

          {/*category*/}
<div>
             <label className="block font-medium text-[#144a36]">
              Pet Category
              <span className="text-red-500">
              *
              </span>
              </label>
          <select className="w-full border rounded-lg p-3 bg-white"
          required>
            <option>Select your pet's category</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Bird</option>
            <option>Rabbit</option>
            <option>Hamster</option>
          </select>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">

          {/*category*/}
<div>
             <label className="block font-medium text-[#144a36]">
              Pet Gender
              <span className="text-red-500">
              *
              </span>
              </label>
          <select className="w-full border rounded-lg p-3 bg-white"
          required>
            <option>Select gender of your pet</option>
            <option>Male</option>
            <option>Female</option>
            <option>Unknown</option>
          </select>
</div>

{/*pet name*/}
<div>
            <label className="block font-medium text-[#144a36]">
              Pet Age
              <span className="text-red-500">
              *
              </span>
              </label>
          <input
            type="number"
            required
            placeholder="Enter your pet's age"
            className="w-full border rounded-lg p-3 bg-white"
          />
</div>
</div>


<div className="grid md:grid-cols-2 gap-6">

          {/*appointment date*/}
<div>
            <label className="block font-medium text-[#144a36]">
              Date
              <span className="text-red-500">
              *
              </span>
              </label>
          <input
            type="date"
            required
            className="w-full border rounded-lg p-3 bg-white"
          />
</div>

          {/*time*/}
<div>
            <label className="block font-medium text-[#144a36]">
              Time
              <span className="text-red-500">
              *
              </span>
              </label>
          <input
            type="time"
            required
            className="w-full border rounded-lg p-3 bg-white"
          />
          </div>

        </div>

        {/*discribe condition*/}
        <div>
          <label className="block font-medium text-[#144a36]">Discribe The Issue 
            <span className="text-gray-500 text-sm">
              (optional)
              </span>
            </label>
        <textarea
          rows="4"
          placeholder="Describe your pet's condition..."
          className="w-full border rounded-lg p-3 bg-white"
        />
        </div>


        {/*upload pet reports*/}
        <div>
  <label className="block mb-2 font-medium text-[#144a36]">
    Upload Reports
    <span className="text-gray-500 text-sm">
      {" "}(Optional)
    </span>
  </label>

  <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-xl bg-gray-200 cursor-pointer border-gray-500 hover:bg-gray-300"
           onDrop={handleDrop}
      onDragOver={handleDragOver}>
    <div className="flex item-center gap-4">
      <div>
      <p className="font-medium">
        Drag & Drop file here &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-black text-3xl">
          or
          </span>
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
       onChange={(e) =>
        setFileName(e.target.files?.[0]?.name || "")}
    />

  </label>
  
</div>


        {/*owner contact info*/}

        <h3 className="text-xl font-semibold text-[#144a36]">
          Your Contact Information
        </h3>

{/*name*/}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium text-[#144a36]">Your Name
              <span className="text-red-500">
              *
              </span>
              </label>
          <input
            type="text"
            required
            placeholder="Enter your name"
            className="w-full border rounded-lg p-3 bg-white "
          />
          </div>

          {/*phone no.*/}
          <div>
          <label className="block font-medium text-[#144a36]">
            Phone Number
            <span className="text-red-500">
              *</span>
              </label>
          <input
            type="tel"
            required
            placeholder="Enter your phone number"
            className="w-full border rounded-lg p-3 bg-white"
          />
          </div>

       {/*email*/}

        <div>
          <label className="block font-medium text-[#144a36]">
            Email Address
            <span className="text-red-500">
              *
              </span>
              </label>
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="w-full border rounded-lg p-3 bg-white"
        />
        </div>
         </div>
 {/*submit button*/}
         <div className="flex justify-center">
        <button
          type="submit"
          className="w-[200px] py-4 rounded-xl text-lg font-semibold cursor-pointer border-2 bg-[#144a36] text-white border-[#144a36] hover:bg-[#144a36]/80 hover:text-white transition"
        >
          Book Appointment 
        </button>
        </div>

      </form>
    </div>
);
}