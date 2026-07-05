//import successIcon from "../assets/images/icons/check_circle.svg"; // optional

export default function MsgSentSuccess({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl shadow-2xl w-[90%] max-w-md p-8 text-center relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-3xl text-gray-500 hover:text-black cursor-pointer"
        >
          ×
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-22 h-22 rounded-full bg-[#88b62c]/20 flex items-center justify-center">
            <span className="text-5xl">✅</span>
          </div>
        </div>

        <h2 className="playpen text-4xl font-bold text-[#144a36]">
          Message Sent!
        </h2>

        <p className="inter mt-5 text-lg text-gray-600 leading-relaxed">
          Thank you for contacting <span className="font-semibold">AdoptBuddy</span>.
          <br />
          We have received your message and will get back to you as soon as possible.
        </p>

        <button
          onClick={onClose}
          className="mt-8 px-8 py-3 bg-[#144a36] text-white rounded-xl text-xl font-semibold hover:bg-[#88b62c] hover:text-[#144a36] transition"
        >
          OK
        </button>

      </div>

    </div>
  );
}