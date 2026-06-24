export default function ContactForm() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-10">
      <h2 className="playpen text-3xl font-bold text-[#144a36] mb-8">
        Send Us A Message
      </h2>

      <form className="space-y-6">

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Enter your full name"
            className="border rounded-lg p-3 w-full"
          />

          <input
            type="text"
            placeholder="Enter your phone number"
            className="border rounded-lg p-3 w-full"
          />
        </div>

        <input
          type="email"
          placeholder="Enter your email"
          className="border rounded-lg p-3 w-full"
        />

        <textarea
          rows="5"
          placeholder="Type a message here..."
          className="border rounded-lg p-3 w-full"
        />

        <button
          className="bg-[#144a36] text-white px-8 py-4 lg:p-4 rounded-xl hover:opacity-90"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}