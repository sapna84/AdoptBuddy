import { useState } from "react";
import { registerUser } from "../data/loginUser";

export default function RegisterPopup({
  onClose,
  onLogin,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleRegister = () => {
    const newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(name.trim()))
      newErrors.name = "Enter a valid name.";

    if (!/^\d{10}$/.test(phone))
      newErrors.phone = "Enter a valid phone number.";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email.";

    if (password.length < 6)
      newErrors.password =
        "Password must be at least 6 characters.";

    if (password !== confirmPassword)
      newErrors.confirmPassword =
        "Passwords do not match.";
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

  return (
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
          <label className="font-semibold">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border-2 rounded-xl p-3 mt-2 focus:border-[#88b62c] focus:outline-none"
          />

          {errors.name && (
            <p className="text-red-500 mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}

        <div className="mt-5">
          <label className="font-semibold">
            Phone Number
          </label>

          <input
            type="text"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            className="w-full border-2 rounded-xl p-3 mt-2 focus:border-[#88b62c] focus:outline-none"
          />

          {errors.phone && (
            <p className="text-red-500 mt-1">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}

        <div className="mt-5">
          <label className="font-semibold">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border-2 rounded-xl p-3 mt-2 focus:border-[#88b62c] focus:outline-none"
          />

          {errors.email && (
            <p className="text-red-500 mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}

        <div className="mt-5">
          <label className="font-semibold">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border-2 rounded-xl p-3 mt-2 focus:border-[#88b62c] focus:outline-none"
          />

          {errors.password && (
            <p className="text-red-500 mt-1">
              {errors.password}
            </p>
          )}
        </div>

        {/* Confirm Password */}

        <div className="mt-5">
          <label className="font-semibold">
            Confirm Password
          </label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            className="w-full border-2 rounded-xl p-3 mt-2 focus:border-[#88b62c] focus:outline-none"
          />

          {errors.confirmPassword && (
            <p className="text-red-500 mt-1">
              {errors.confirmPassword}
            </p>
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

    </div>
  );
}