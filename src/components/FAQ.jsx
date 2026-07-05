import { useState } from "react";
export default function FAQ() {
  const [openItems, setOpenItems] = useState({});
  const faqs = [
    
    {
      question: "How do I adopt a pet?",
      answer:
        "Browse available pets, choose your preferred companion, and submit an adoption request. Our team will guide you through the process.",
    },
    {
      question: "How long does adoption approval take?",
      answer:
        "Most adoption requests are reviewed within 2-5 business days depending on the verification process.",
    },
    {
      question: "Can I book veterinary appointments online?",
      answer:
        "Yes. You can browse available veterinarians and book appointments directly through AdoptBuddy.",
    },
    {
      question: "How do I report a found pet?",
      answer:
        "Go to the Lost & Found section, upload the pet's details and location, and our community will help reconnect them with their family.",
    },
  ];

  return (
    <div className="inter bg-white rounded-3xl shadow-lg p-8">
      <h2 className="playpen text-5xl font-bold text-[#144a36] mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
  <details
    key={index}
    onToggle={(e) =>
      setOpenItems((prev) => ({
        ...prev,
        [index]: e.target.open,
      }))
    }
    className="bg-[#f7f1e6] rounded-xl px-5 py-4 cursor-pointer"
  >
    <summary
      className={`font-medium text-3xl transition-colors ${
        openItems[index] ? "text-[#88b62c]" : "text-[#144a36]"
      }`}
    >
      {faq.question}
    </summary>

    <p className="mt-4 text-2xl text-black leading-relaxed">
      {faq.answer}
    </p>
  </details>
))}
      </div>
    </div>
  );
}