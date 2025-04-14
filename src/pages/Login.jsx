import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("https://nutrineuvo.fi/wp-json/jwt-auth/v1/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        localStorage.setItem("token", data.token); // save token
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/"); // redirect after login
      } else {
        setStatus("error");
        setError(data.message || "Login failed.");
      }
    } catch (err) {
      setStatus("error");
      setError("Network error.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full p-10 bg-zinc-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#07be61]">Login</h2>

        {status === "success" && (
          <p className="text-green-500 text-center mb-4">Logged in successfully!</p>
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

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#07be61] text-white py-2 rounded-lg font-medium text-lg hover:bg-[#06a652] transition"
          >
            {status === "loading" ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-600">
          <p>
            Don’t have an account?{" "}
            <a href="/signup" className="text-[#07be61] hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
