import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const features = [
  "Men & Women Collections",
  "Responsive Design for All Devices",
  "Luxury Dark Theme Aesthetic",
  "Built using React, Tailwind, Framer Motion",
  "SEO & Performance Optimized",
  "Custom UI for Accessories Brands",
];

const App = () => {
  return (
    <div className="bg-[#0e0e0e] text-white font-sans scroll-smooth">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black to-[#1a1a1a]">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
        >
          Accessories That Define You
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl text-gray-300"
        >
          We build premium accessory brand websites using React, Tailwind &
          Framer Motion — stylish, responsive & built to impress.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-7 py-3 rounded-full bg-yellow-500 text-black font-semibold"
        >
          Launch My Store
        </motion.button>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-center">
        <h2 className="text-4xl font-serif font-bold mb-6">
          Bold, Elegant, Personal
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Whether it’s bold men’s jewelry or elegant women’s handbags — your
          accessory brand deserves a visually striking online presence. We’ll
          help you launch a store that reflects your style and speaks to your
          audience.
        </p>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-black text-center">
        <h2 className="text-4xl font-serif font-bold mb-10 text-yellow-400">
          What You Get
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-[#1a1a1a] p-6 rounded-lg shadow-sm border border-[#2a2a2a]"
            >
              <p className="text-lg text-gray-100 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Accessories Gallery */}
      <section className="py-20 px-6 bg-[#0e0e0e] text-center">
        <h2 className="text-4xl font-serif font-bold mb-10 text-white">
          Our Vision in Accessories
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          A showcase of sleek and bold accessory visuals — how your products
          could look in a custom digital store.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((num) => (
            <motion.div
              key={num}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: num * 0.1 }}
              className="overflow-hidden rounded-xl shadow-lg bg-[#1a1a1a]"
            >
              <img
                src={`/images/accessory${num}.jpg`}
                alt={`Accessory ${num}`}
                className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact + WhatsApp */}
      <section className="py-20 px-6 bg-black text-center">
        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
          Let’s Build Your Brand
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-4">
          Have a unique accessory line for men or women? We’ll help you launch
          it online with premium visuals and smooth user experience.
        </p>
        <motion.a
          href="https://wa.me/9800000000"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-8 py-3 rounded-full bg-green-500 text-white font-semibold text-lg shadow-md hover:bg-green-600 transition"
        >
          💬 Chat on WhatsApp
        </motion.a>

        <div className="mt-10">
          <p className="text-sm text-gray-500 mb-3">
            Follow us on social media
          </p>
          <div className="flex justify-center gap-6 text-2xl text-white">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-blue-600 transition" />
            </a>
            <a
              href="https://wa.me/9800000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-500 transition" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121212] py-6 text-center text-xs text-gray-500">
        © 2025 Codocu Software. Designed for fashion-forward brands.
      </footer>
    </div>
  );
};

export default App;
