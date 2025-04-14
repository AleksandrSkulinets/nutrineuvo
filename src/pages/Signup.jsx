import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const navigate = useNavigate();

  const { register } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCaptcha = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    if (!captchaValue) {
      setStatus("error");
      setError("Please verify that you are not a robot.");
      return;
    }

    try {
      const response = await fetch("https://nutrineuvo.fi/wp-json/jwt-auth/v1/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captcha: captchaValue }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        if (data.token) {
          register(data.token, data);
        }
        navigate("/dashboard");
      } else {
        setStatus("error");
        setError(stripHtmlTags(data.message || "Registration error."));
      }
    } catch (err) {
      setStatus("error");
      setError("Network error.");
    }
  };

  const stripHtmlTags = (input) => {
    return input.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full p-10 bg-zinc-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#07be61]">Sign Up</h2>

        {status === "success" && (
          <p className="text-green-500 text-center mb-4">You have successfully registered!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="block w-full py-2.5 px-0 text-sm text-zinc-600 bg-transparent border-b-2 border-zinc-300 appearance-none focus:outline-none focus:border-[#07be61] peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-zinc-400 transform -translate-y-6 scale-75 top-3 left-0 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#07be61]">
              Username
            </label>
          </div>

          <div className="relative group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full py-2.5 px-0 text-sm text-zinc-600 bg-transparent border-b-2 border-zinc-300 appearance-none focus:outline-none focus:border-[#07be61] peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-zinc-400 transform -translate-y-6 scale-75 top-3 left-0 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#07be61]">
              Email
            </label>
          </div>

          <div className="relative group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="block w-full py-2.5 px-0 text-sm text-zinc-600 bg-transparent border-b-2 border-zinc-300 appearance-none focus:outline-none focus:border-[#07be61] peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-zinc-400 transform -translate-y-6 scale-75 top-3 left-0 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#07be61]">
              Password
            </label>
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LfQrBgrAAAAADv1FIeDEU-ocPWLbV9lVTF-88I-"
              onChange={handleCaptcha}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#07be61] text-white py-2 rounded-lg font-medium text-lg hover:bg-[#06a652] transition"
          >
            {status === "loading" ? "Registering..." : "Sign Up"}
          </motion.button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-600">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-[#07be61] hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
