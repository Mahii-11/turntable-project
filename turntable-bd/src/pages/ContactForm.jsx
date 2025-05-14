import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SendHorizonal,
  Mail,
  Phone,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      return setStatus("Please fill out all fields.");
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://turntable-restapi.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      if (data.status === "success") {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Failed to send message. Try again.");
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
        <title>Contact Us | BD Turntable</title>
        <meta
          name="description"
          content="Get in touch with BD Turntable for repairs, service inquiries, and product support."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Contact Us | BD Turntable" />
        <meta
          property="og:description"
          content="Contact BD Turntable for repairs, inquiries, and product support."
        />
        <meta
          property="og:image"
          content="https://turntable-project-4sp3.vercel.app/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://turntable-project-4sp3.vercel.app/contact"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:title" content="Contact Us | BD Turntable" />
        <meta
          name="twitter:description"
          content="Get in touch with BD Turntable for repairs and inquiries."
        />
        <meta name="twitter:image" content="/path/to/contact-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="bg-zinc-900 text-white min-h-screen flex flex-col items-center py-10 -mt-8">
        <motion.div
          className="max-w-3xl w-full p-8 bg-zinc-800 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-6 text-indigo-400">
            📬 Contact Us
          </h2>

          {/* Added helpful paragraph */}
          <p className="text-center text-sm text-gray-400 mb-6">
            Do you need your turntable or audio equipment repaired? Please
            contact the shop through this page or give us a phone call for us to
            assess the situation.
            <br />
            We would be happy to answer any gear-related and equipment repair
            and purchasing questions through our email inquiry box or phone
            number. Once you click submit on our email inquiry, we will reach
            out to you as soon as possible.
            <br />
            <strong>Email:</strong> bangladeshturntable@gmail.com
            <br />
            <strong>Phone:</strong> 01715-616234
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <motion.button
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition-colors px-6 py-3 rounded-xl font-semibold text-white cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
              <SendHorizonal size={20} />
            </motion.button>
          </form>

          {status && (
            <p className="text-center mt-4 text-sm text-gray-400">{status}</p>
          )}
        </motion.div>

        <motion.div
          className="max-w-3xl w-full p-8 mt-8 bg-zinc-800 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-semibold text-center mb-4 text-indigo-400">
            Other Info
          </h3>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-indigo-500" />
              <span>bangladeshturntable@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-indigo-500" />
              <span>01715-616234</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl text-indigo-500">Follow Us</span>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/Turntable"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-500"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://instagram.com/Turntable"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-500"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://linkedin.com/company/Turntable"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-500"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactPage;
