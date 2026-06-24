export default function appointmentform (){
return(<div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-[#144a36] mb-8">
        Appointment Details
      </h2>

      <form className="space-y-6">

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Pet Name"
            className="border rounded-lg p-3"
          />

          <select className="border rounded-lg p-3">
            <option>Pet Category</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Bird</option>
          </select>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="date"
            className="border rounded-lg p-3"
          />

          <input
            type="time"
            className="border rounded-lg p-3"
          />

        </div>

        <textarea
          rows="4"
          placeholder="Describe your pet's condition..."
          className="w-full border rounded-lg p-3"
        />

        <h3 className="text-xl font-semibold text-[#144a36]">
          Contact Information
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg p-3"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border rounded-lg p-3"
          />

        </div>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg p-3"
        />

        <button
          type="submit"
          className="w-full bg-[#144a36] text-white py-4 rounded-xl text-lg font-semibold"
        >
          Book Appointment
        </button>

      </form>
    </div>
);
}