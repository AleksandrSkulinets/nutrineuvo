import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://nutrineuvo.fi/wp-json/wp/v2/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ first_name: "", last_name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Error sending form:", error);
    }
  };

  return (
    <div className="max-w-4xl w-full mx-auto p-10 bg-zinc-50 rounded-lg shadow-lg text-white">
      

      {status === "success" && <p className="text-green-500 text-center mb-4">Message sent successfully!</p>}
      {status === "error" && <p className="text-red-500 text-center mb-4">Failed to send message.</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="block w-full py-2.5 px-0 text-sm text-zinc-500 bg-transparent border-b-2 border-zinc-300 appearance-none focus:outline-none focus:border-[#07be61] peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-zinc-400 transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#07be61]">
              First Name
            </label>
          </div>

          <div className="relative group">
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="block w-full py-2.5 px-0 text-sm  bg-transparent border-b-2 border-zinc-300 text-zinc-600 appearance-none focus:outline-none focus:border-[#07be61] peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-zinc-400 transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#07be61]">
              Last Name
            </label>
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <label className="absolute text-sm text-zinc-400 transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#07be61]">
              Email
            </label>
          </div>

          <div className="relative group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="block w-full py-2.5 px-0 text-sm text-zinc-600 bg-transparent border-b-2 border-zinc-300 appearance-none focus:outline-none focus:border-[#07be61] peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-zinc-400 transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#07be61]">
              Phone
            </label>
          </div>
        </div>

        {/* Message */}
        <div className="relative group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="block w-full py-2.5 px-0 text-sm text-gray-500 bg-transparent border-b-2 border-zinc-300 appearance-none focus:outline-none focus:border-[#07be61] peer"
            placeholder=" "
          ></textarea>
          <label className="absolute text-sm text-gray-400 transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#07be61]">
            Message
          </label>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-[#07be61] text-white py-2 rounded-lg font-medium text-lg hover:bg-[#06a652] transition"
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
