import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Certificates() {
  const API =
    "https://portfolio-cms-backend-8jty.onrender.com/api/certificates";

  const [certificates, setCertificates] = useState([]);

  const [form, setForm] = useState({
    title: "",
    issuer: "",
    issueDate: "",
    credentialId: "",
    credentialUrl: "",
    image: "",
    description: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get(API);

      setCertificates(response.data || []);
    } catch (error) {
      console.error("Failed to fetch certificates:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.issuer || !form.issueDate) {
      alert("⚠️ Title, issuer and issue date are required");
      return;
    }

    try {
      setSaving(true);

      const token = localStorage.getItem("token");

      await axios.post(API, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("✅ Certificate Added Successfully");

      setForm({
        title: "",
        issuer: "",
        issueDate: "",
        credentialId: "",
        credentialUrl: "",
        image: "",
        description: "",
      });

      fetchCertificates();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "❌ Failed to add certificate"
      );
    } finally {
      setSaving(false);
    }
  };

  const deleteCertificate = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this certificate?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${API}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("🗑 Certificate Deleted");

      fetchCertificates();
    } catch (error) {
      console.error(error);

      alert("❌ Failed to delete certificate");
    }
  };

  const inputClass =
    "bg-white/40 backdrop-blur-xl text-[#1C1C1C] placeholder:text-[#8A8A8A] p-4 rounded-2xl outline-none " +
    "shadow-[inset_3px_3px_8px_rgba(28,28,28,0.1),inset_-3px_-3px_8px_rgba(255,255,255,0.8)] " +
    "focus:shadow-[inset_3px_3px_8px_rgba(28,28,28,0.14),inset_-3px_-3px_8px_rgba(255,255,255,0.9),0_0_0_2px_rgba(28,28,28,0.15)] " +
    "transition-all duration-300";

  const glassCard =
    "relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/70";

  if (loading) {
    return (
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="text-[#1C1C1C] text-xl"
      >
        Loading Certificates...
      </motion.div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-20">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-black mb-8 text-[#1C1C1C]"
      >
        Certificates Management
      </motion.h1>

      {/* ADD FORM */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${glassCard} mb-10`}
      >
        <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_12px_32px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]">

          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">
            ➕ Add New Certificate
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Certificate Title"
              className={inputClass}
            />

            <input
              name="issuer"
              value={form.issuer}
              onChange={handleChange}
              placeholder="Issuer / Organization"
              className={inputClass}
            />

            <input
              name="issueDate"
              value={form.issueDate}
              onChange={handleChange}
              placeholder="Issue Date (July 2026)"
              className={inputClass}
            />

            <input
              name="credentialId"
              value={form.credentialId}
              onChange={handleChange}
              placeholder="Credential ID"
              className={inputClass}
            />

            <input
              name="credentialUrl"
              value={form.credentialUrl}
              onChange={handleChange}
              placeholder="Credential URL"
              className={inputClass}
            />

            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Certificate Image URL"
              className={inputClass}
            />

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Certificate Description"
              rows="4"
              className={`${inputClass} md:col-span-2`}
            />

            <motion.button
              type="submit"
              disabled={saving}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ y: 1, scale: 0.98 }}
              className="md:col-span-2 py-4 rounded-2xl font-bold text-[#FAFAFF] relative overflow-hidden
                bg-gradient-to-b from-[#3A3A3A] to-[#1C1C1C]
                shadow-[0_4px_0_#000000,0_8px_16px_-2px_rgba(28,28,28,0.35),inset_0_1px_1px_rgba(255,255,255,0.15)]
                disabled:opacity-60"
            >
              {!saving && (
                <motion.span
                  initial={{ x: "-150%" }}
                  animate={{ x: "150%" }}
                  transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
                />
              )}
              <span className="relative">
                {saving ? "Adding..." : "➕ Add Certificate"}
              </span>
            </motion.button>

          </form>
        </div>
      </motion.div>

      {/* CERTIFICATES LIST */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {certificates.length === 0 ? (
          <p className="text-[#6B6B6B]">No certificates found.</p>
        ) : (
          certificates.map((certificate, i) => (
            <motion.div
              key={certificate._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={glassCard}
            >
              <div className="bg-white/35 backdrop-blur-2xl rounded-[22px] p-6 shadow-[0_10px_28px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)]">

                {certificate.image && (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-40 object-cover rounded-xl mb-5 shadow-[0_6px_16px_rgba(28,28,28,0.15)]"
                  />
                )}

                <h3 className="text-xl font-bold text-[#1C1C1C]">
                  {certificate.title}
                </h3>

                <p className="text-[#4A4A4A] mt-2 font-medium">
                  {certificate.issuer}
                </p>

                <p className="text-[#6B6B6B] mt-2">
                  📅 {certificate.issueDate}
                </p>

                {certificate.credentialId && (
                  <p className="text-[#8A8A8A] text-sm mt-2">
                    ID: {certificate.credentialId}
                  </p>
                )}

                <motion.button
                  onClick={() => deleteCertificate(certificate._id)}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ y: 1, scale: 0.96 }}
                  className="mt-6 w-full py-3 rounded-xl font-semibold text-[#FAFAFF]
                    bg-gradient-to-b from-rose-400 to-rose-600
                    shadow-[0_3px_0_#9F1239,0_6px_12px_-2px_rgba(190,18,60,0.35)]"
                >
                  🗑 Delete Certificate
                </motion.button>

              </div>
            </motion.div>
          ))
        )}

      </div>

    </div>
  );
}

export default Certificates;