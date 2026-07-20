import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // SEND MESSAGE
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "https://YOUR-RENDER-URL.onrender.com/api/messages",
        form
      );

      alert("✅ Message Sent Successfully 🚀");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Message sending error:", error);

      alert(
        error.response?.data?.message ||
          "❌ Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10"
    >
      {/* Glow */}

      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="space-y-6 relative z-10">

        {/* NAME */}

        <div>
          <label className="block mb-2 text-gray-300">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full rounded-xl border border-white/10 bg-[#111827] px-5 py-4 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />
        </div>

        {/* EMAIL */}

        <div>
          <label className="block mb-2 text-gray-300">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full rounded-xl border border-white/10 bg-[#111827] px-5 py-4 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />
        </div>

        {/* MESSAGE */}

        <div>
          <label className="block mb-2 text-gray-300">
            Message
          </label>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="6"
            placeholder="Write your message..."
            required
            className="w-full resize-none rounded-xl border border-white/10 bg-[#111827] px-5 py-4 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />
        </div>

        {/* BUTTON */}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-8 py-4 font-bold text-black transition hover:shadow-lg hover:shadow-cyan-400/30 disabled:opacity-70"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane />
              Send Message
            </>
          )}
        </motion.button>

      </div>
    </motion.form>
  );
}

export default ContactForm;