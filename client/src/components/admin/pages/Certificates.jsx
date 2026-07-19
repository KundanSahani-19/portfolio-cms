import { useEffect, useState } from "react";
import axios from "axios";

function Certificates() {
  const API =
    "http://localhost:8000/api/certificates";

  const [certificates, setCertificates] =
    useState([]);

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

      setCertificates(
        response.data || []
      );
    } catch (error) {
      console.error(
        "Failed to fetch certificates:",
        error
      );
    } finally {
      setLoading(false);
    }
  };


  const handleChange = (e) => {
    const {
      name,
      value,
    } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.issuer ||
      !form.issueDate
    ) {
      alert(
        "⚠️ Title, issuer and issue date are required"
      );

      return;
    }

    try {
      setSaving(true);

      const token =
        localStorage.getItem("token");

      await axios.post(API, form, {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      });

      alert(
        "✅ Certificate Added Successfully"
      );

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
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this certificate?"
      );

    if (!confirmDelete) return;

    try {
      const token =
        localStorage.getItem("token");

      await axios.delete(
        `${API}/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert(
        "🗑 Certificate Deleted"
      );

      fetchCertificates();

    } catch (error) {
      console.error(error);

      alert(
        "❌ Failed to delete certificate"
      );
    }
  };


  if (loading) {
    return (
      <div className="text-white text-xl">
        Loading Certificates...
      </div>
    );
  }


  return (
    <div className="max-w-7xl mx-auto pb-20">

      <h1 className="text-4xl font-black mb-8">
        Certificates Management
      </h1>


      {/* ADD FORM */}

      <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 mb-10">

        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          ➕ Add New Certificate
        </h2>


        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Certificate Title"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          <input
            name="issuer"
            value={form.issuer}
            onChange={handleChange}
            placeholder="Issuer / Organization"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          <input
            name="issueDate"
            value={form.issueDate}
            onChange={handleChange}
            placeholder="Issue Date (July 2026)"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          <input
            name="credentialId"
            value={form.credentialId}
            onChange={handleChange}
            placeholder="Credential ID"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          <input
            name="credentialUrl"
            value={form.credentialUrl}
            onChange={handleChange}
            placeholder="Credential URL"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Certificate Image URL"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl"
          />


          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Certificate Description"
            rows="4"
            className="bg-[#020617] border border-white/10 p-4 rounded-xl md:col-span-2"
          />


          <button
            type="submit"
            disabled={saving}
            className="md:col-span-2 bg-cyan-400 text-black py-4 rounded-xl font-bold hover:bg-cyan-300 duration-300 disabled:opacity-50"
          >
            {saving
              ? "Adding..."
              : "➕ Add Certificate"}
          </button>

        </form>

      </div>


      {/* CERTIFICATES LIST */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {certificates.length === 0 ? (

          <p className="text-gray-400">
            No certificates found.
          </p>

        ) : (

          certificates.map(
            (certificate) => (

              <div
                key={certificate._id}
                className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 duration-300"
              >

                {certificate.image && (

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-40 object-cover rounded-xl mb-5"
                  />

                )}


                <h3 className="text-xl font-bold">
                  {certificate.title}
                </h3>


                <p className="text-cyan-400 mt-2">
                  {certificate.issuer}
                </p>


                <p className="text-gray-400 mt-2">
                  📅 {certificate.issueDate}
                </p>


                {certificate.credentialId && (

                  <p className="text-gray-500 text-sm mt-2">
                    ID: {certificate.credentialId}
                  </p>

                )}


                <button
                  onClick={() =>
                    deleteCertificate(
                      certificate._id
                    )
                  }
                  className="mt-6 w-full border border-red-400/40 text-red-400 py-3 rounded-xl hover:bg-red-400 hover:text-black duration-300"
                >
                  🗑 Delete Certificate
                </button>

              </div>

            )
          )

        )}

      </div>

    </div>
  );
}

export default Certificates;