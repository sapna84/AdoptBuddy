import { useState } from "react";
import { loginUser } from "../data/loginUser";

export default function LoginPopup({
  onClose,
  onRegister,
  message = "",
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = () => {
  const result = loginUser(email, password);

  if (!result.success) {
    setError(result.message);
    return;
  }

  onClose();
  window.location.reload();
};

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="relative bg-white rounded-3xl shadow-2xl w-[90%] max-w-md p-8">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-3xl text-gray-500 hover:text-black cursor-pointer"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="playpen text-4xl font-bold text-[#144a36] text-center">
          Login
        </h2>

        {message && (
          <p className="text-center text-red-500 mt-3">
            {message}
          </p>
        )}

        {/* Email */}
        <div className="mt-8">

          <label className="font-semibold text-lg">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Enter your email"
            className="w-full mt-2 border-2 border-gray-300 rounded-xl p-3 focus:border-[#88b62c] focus:outline-none"
          />

        </div>

        {/* Password */}
        <div className="mt-5">

          <label className="font-semibold text-lg">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="Enter your password"
            className="w-full mt-2 border-2 border-gray-300 rounded-xl p-3 focus:border-[#88b62c] focus:outline-none"
          />

        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 mt-4">
            {error}
          </p>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full mt-8 bg-[#144a36] text-white text-xl font-bold py-3 rounded-xl border-4 border-[#144a36] hover:bg-[#88b62c] hover:text-[#144a36] transition"
        >
          Login
        </button>

        {/* Register */}
        <p className="text-center mt-6 text-gray-600">

          Don't have an account?{" "}

          <button
            onClick={onRegister}
            className="text-[#88b62c] font-bold hover:underline cursor-pointer"
          >
            Register
          </button>

        </p>

      </div>

    </div>
  );
}