export default function ContactPopup({ contact, title, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl font-bold text-gray-500 hover:text-black cursor-pointer"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold text-[#144a36] mb-6">
          {title}
        </h2>

        <div className="space-y-4 text-lg">

          <p>
            <span className="font-semibold">Name:</span>{" "}
            {contact.name}
          </p>

          <p>
            <span className="font-semibold">Phone:</span>{" "}
            {contact.phone}
          </p>

          <p>
            <span className="font-semibold">Email:</span>{" "}
            {contact.email}
          </p>

        </div>

      </div>

    </div>
  );
}