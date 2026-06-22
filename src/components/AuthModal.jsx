import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AuthModal({ onClose }) {
  const { loginOrRegister } = useAuth();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName || !form.phone || !form.email) {
      alert("Fill required fields");
      return;
    }

    loginOrRegister(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-4">Your Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="fullName"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="address"
            placeholder="Address (optional)"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />

          <button className="w-full bg-[#144a36] text-white py-2 rounded">
            Save
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-3 text-sm text-gray-500 w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}