/*export default AdminLogin; */
import React, { useState } from "react";
import { adminLogin } from "../services/apiRestaurant";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  KeyRound,
  Mail,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Helmet } from "react-helmet";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const credentials = { email, password };
      const data = await adminLogin(credentials);
      localStorage.setItem("adminToken", data.token);
      setSuccess(true);
      navigate("/admin");
    } catch (err) {
      setError("Invalid login credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admin Login | BD Turntable</title>
        <meta
          name="description"
          content="Secure admin login to manage BD Turntable products and orders."
        />
        <meta name="robots" content="noindex, nofollow" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Admin Login | BD Turntable" />
        <meta
          property="og:description"
          content="Login to the admin dashboard for BD Turntable to manage products and orders."
        />
        <meta property="og:image" content="/path/to/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/admin-login" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:title" content="Admin Login | BD Turntable" />
        <meta
          name="twitter:description"
          content="Login to BD Turntable's admin panel to manage products and orders."
        />
        <meta name="twitter:image" content="/path/to/your-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <motion.div
        className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-black text-white px-4 -mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="bg-gray-800/90 backdrop-blur-md p-8 rounded-2xl w-full max-w-md shadow-2xl border border-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="flex items-center justify-center mb-6 gap-2">
            <ShieldCheck className="text-amber-500" size={28} />
            <h2 className="text-2xl font-bold text-center">
              Secure Admin Login
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email
              </label>
              <div className="flex items-center bg-gray-700 rounded px-3">
                <Mail size={18} className="text-gray-300 mr-2" />
                <input
                  id="email"
                  type={showEmail ? "text" : "password"}
                  className="w-full py-2 bg-transparent outline-none text-white placeholder:text-gray-400"
                  placeholder="••••••••"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowEmail((prev) => !prev)}
                  className="text-gray-300 ml-2 focus:outline-none text-lg"
                  title={showEmail ? "Hide Email" : "Show Email"}
                >
                  {showEmail ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm mb-1">
                Password
              </label>
              <div className="flex items-center bg-gray-700 rounded px-3">
                <KeyRound size={18} className="text-gray-300 mr-2" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full py-2 bg-transparent outline-none text-white placeholder:text-gray-400"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="text-gray-300 ml-2 focus:outline-none text-lg"
                  title={showPassword ? "Hide Password" : "Show Password"}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <motion.p
                className="text-red-400 flex items-center justify-center text-sm gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <AlertCircle size={16} /> {error}
              </motion.p>
            )}

            {/* Success */}
            {success && (
              <motion.p
                className="text-green-400 text-sm text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✅ Login successful!
              </motion.p>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className={`w-full flex justify-center items-center bg-amber-600 hover:bg-amber-700 transition py-2 rounded-lg cursor-pointer font-medium ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                "Login"
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AdminLogin;
