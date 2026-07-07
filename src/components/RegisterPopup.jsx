import { useState } from "react";
import { createPortal } from "react-dom";
import { Eye, EyeOff } from "lucide-react";
import { registerUser } from "../data/loginUser";

export default function RegisterPopup({ onClose, onLogin }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const validateName = (value) => {
    setName(value);

    const regex = /^[A-Za-z\s]+$/;

    setErrors((prev) => ({
      ...prev,
      name: value === "" || regex.test(value) ? "" : "Enter a valid name.",
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
      email: value === "" || regex.test(value) ? "" : "Enter a valid email.",
    }));
  };

  const validatePassword = (value) => {
    setPassword(value);

    setErrors((prev) => ({
      ...prev,
      password:
        value === "" || value.length >= 6
          ? ""
          : "Password must be at least 6 characters.",
      confirmPassword:
        confirmPassword === "" || confirmPassword === value
          ? ""
          : prev.confirmPassword,
    }));
  };

  const validateConfirmPassword = (value) => {
    setConfirmPassword(value);

    setErrors((prev) => ({
      ...prev,
      confirmPassword:
        value === "" || value === password ? "" : "Passwords do not match.",
    }));
  };

  const handleRegister = () => {
    const newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(name.trim()))
      newErrors.name = "Enter a valid name.";

    if (!/^\d{10}$/.test(phone))
      newErrors.phone = "Enter a valid phone number.";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email.";

    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const result = registerUser({
      name,
      phone,
      email,
      password,
    });

    if (!result.success) {
      setErrors({
        email: result.message,
      });
      return;
    }

    onClose();
    onLogin();
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-3xl shadow-2xl w-[90%] max-w-lg p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-3xl cursor-pointer"
        >
          ×
        </button>

        <h2 className="playpen text-4xl text-center font-bold text-[#144a36]">
          Register
        </h2>

        {/* Name */}
        <div className="mt-6">
          <label className="font-semibold">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => validateName(e.target.value)}
            className="w-full border-2 rounded-xl p-3 mt-2 focus:border-[#88b62c] focus:outline-none"
          />
          {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div className="mt-5">
          <label className="font-semibold">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => validatePhone(e.target.value)}
            maxLength={10}
            className="w-full border-2 rounded-xl p-3 mt-2 focus:border-[#88b62c] focus:outline-none"
          />
          {errors.phone && <p className="text-red-500 mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div className="mt-5">
          <label className="font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => validateEmail(e.target.value)}
            className="w-full border-2 rounded-xl p-3 mt-2 focus:border-[#88b62c] focus:outline-none"
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mt-5">
          <label className="font-semibold">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              className="w-full border-2 rounded-xl p-3 pr-12 mt-2 focus:border-[#88b62c] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 translate-y-[10%] text-gray-500 hover:text-[#144a36] cursor-pointer"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mt-5">
          <label className="font-semibold">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => validateConfirmPassword(e.target.value)}
              className="w-full border-2 rounded-xl p-3 pr-12 mt-2 focus:border-[#88b62c] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 translate-y-[10%] text-gray-500 hover:text-[#144a36] cursor-pointer"
              tabIndex={-1}
            >
              {showConfirmPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          onClick={handleRegister}
          className="w-full mt-8 bg-[#144a36] text-white text-xl font-bold py-3 rounded-xl border-4 border-[#144a36] hover:bg-[#88b62c] hover:text-[#144a36] transition"
        >
          Register
        </button>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <button
            onClick={() => {
              onClose();
              onLogin();
            }}
            className="text-[#88b62c] font-bold hover:underline cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>
    </div>,
    document.body
  );
}
