import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

      alert("✅ Login Successful");

      navigate("/admin");
    } catch (err) {
      alert(
        err.response?.data?.message || "❌ Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />

      <form
        onSubmit={handleLogin}
        className="relative w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
      >

        <h1 className="text-4xl font-black text-center text-cyan-400 mb-2">
          Admin Login
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Sign in to manage your portfolio
        </p>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-5 bg-[#0f172a] border border-white/10 focus:border-cyan-400 outline-none rounded-xl px-5 py-4 text-white"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full mb-8 bg-[#0f172a] border border-white/10 focus:border-cyan-400 outline-none rounded-xl px-5 py-4 text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold hover:scale-105 duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Logging In..." : "Login"}
        </button>

      </form>

    </div>
  );
}

export default Login;