import { createPortal } from "react-dom";
export default function ContactOwnerPopup({
  owner,
  onClose,
}) {
  return createPortal(
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">

      <div className="relative bg-white rounded-3xl shadow-2xl w-[90%] max-w-md p-8">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-3xl cursor-pointer"
        >
          ×
        </button>

        <h2 className="playpen text-4xl text-center font-bold text-[#144a36] mb-8">
          Owner Details
        </h2>

        <div className="space-y-5 text-xl">

          <p>
            <span className="font-bold">Name:</span>{" "}
            {owner.name}
          </p>

          <p>
            <span className="font-bold">Phone:</span>{" "}
            {owner.phone}
          </p>

          <p>
            <span className="font-bold">Email:</span>{" "}
            {owner.email}
          </p>

        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full bg-[#144a36] text-white py-3 rounded-xl font-bold hover:bg-[#88b62c] hover:text-[#144a36] transition"
        >
          Close
        </button>

      </div>

    </div>,
     document.body
  );
}