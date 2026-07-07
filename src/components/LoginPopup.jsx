import { useState } from "react";
import { createPortal } from "react-dom";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "../data/loginUser";

export default function LoginPopup({ onClose, onRegister, message = "" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({
    email: "",
  });

  const validateEmail = (value) => {
    setEmail(value);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setFieldErrors((prev) => ({
      ...prev,
      email: value === "" || regex.test(value) ? "" : "Enter a valid email.",
    }));
  };

  const handleLogin = () => {
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldErrors((prev) => ({ ...prev, email: "Enter a valid email." }));
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    const result = loginUser(email, password);
    if (!result.success) {
      setError(result.message);
      return;
    }
    onClose();
    window.location.reload();
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-3xl shadow-2xl w-[90%] max-w-md p-8">
        <button onClick={onClose} className="absolute top-4 right-5 text-3xl text-gray-500 hover:text-black cursor-pointer">×</button>
        <h2 className="playpen text-4xl font-bold text-[#144a36] text-center">Login</h2>
        {message && <p className="text-center text-red-500 mt-3">{message}</p>}

        <div className="mt-8">
          <label className="font-semibold text-lg">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => validateEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full mt-2 border-2 border-gray-300 rounded-xl p-3 focus:border-[#88b62c] focus:outline-none"
          />
          {fieldErrors.email && (
            <p className="text-red-500 mt-1">{fieldErrors.email}</p>
          )}
        </div>

        <div className="mt-5">
          <label className="font-semibold text-lg">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-2 border-2 border-gray-300 rounded-xl p-3 pr-12 focus:border-[#88b62c] focus:outline-none"
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
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <button onClick={handleLogin} className="w-full mt-8 bg-[#144a36] text-white text-xl font-bold py-3 rounded-xl border-4 border-[#144a36] hover:bg-[#88b62c] hover:text-[#144a36] transition">Login</button>
        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <button onClick={onRegister} className="text-[#88b62c] font-bold hover:underline cursor-pointer">Register</button>
        </p>
      </div>
    </div>,
    document.body
  );
}