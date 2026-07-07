import { X, Phone, Mail, User } from "lucide-react";

export default function ContactPopup({ title, contact, onClose }) {
  if (!contact) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#144a36] cursor-pointer transition"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-[#144a36] mb-6">{title}</h3>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#88b62c]/15 text-[#144a36]">
              <User size={18} />
            </span>
            <span className="text-lg text-gray-700">{contact.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#88b62c]/15 text-[#144a36]">
              <Phone size={18} />
            </span>
            <a
              href={`tel:${contact.phone}`}
              className="text-lg text-gray-700 hover:text-[#88b62c] transition"
            >
              {contact.phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#88b62c]/15 text-[#144a36]">
              <Mail size={18} />
            </span>
            <a
              href={`mailto:${contact.email}`}
              className="text-lg text-gray-700 hover:text-[#88b62c] transition break-all"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-lg border-2 border-[#144a36] bg-[#144a36] px-6 py-3 text-white cursor-pointer hover:bg-[#144a36]/80 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
