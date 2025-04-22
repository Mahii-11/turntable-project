import React from "react";
import { motion } from "framer-motion";

const MeetOurFounder = () => {
  const teamMembers = [
    {
      img: "/images/Creative Director.jpeg",
      name: "Nadia",
      role: "Creative Director",
      quote: "Designing experiences that resonate and inspire.",
    },
    {
      img: "/images/Marketing Head.jpeg",
      name: "Rafi",
      role: "Technical Lead",
      quote: "Engineering smooth sounds and sleek performance.",
    },
    {
      img: "/images/Technical Lead.jpeg",
      name: "Sadia",
      role: "Marketing Head",
      quote: "Bringing the vinyl culture back, one story at a time.",
    },
  ];

  return (
    <div className="bg-black text-white px-4 py-16 md:px-16 -mt-8">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-12"
      >
        Meet Our Founder
      </motion.h2>

      {/* Founder Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <motion.img
          src="/images/founder.jpg"
          alt="Founder"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-amber-400">
            Mohammmed Al Amin
          </h3>
          <p className="text-sm text-gray-400 mb-2">Founder & Visionary</p>
          <p className="max-w-xl">
            "Music is not just sound; it's a movement, a lifestyle. BD Turntable
            is my way of bringing timeless sound back to life."
          </p>
        </div>
      </div>

      {/* Team Section */}
      <h3 className="text-3xl font-semibold text-center mb-8 text-yellow-400">
        Our Amazing Team
      </h3>
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-md hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-lg text-amber-400 font-bold text-center">
              {member.name}
            </h4>
            <p className="text-center text-sm text-gray-400">{member.role}</p>
            <p className="text-center text-gray-300 mt-2 italic">
              "{member.quote}"
            </p>
          </motion.div>
        ))}
      </div>

      {/* Group Photo */}
      <div className="text-center mb-16">
        <motion.img
          src="/images/turntable-team.jpeg"
          alt="Our Team"
          className="mx-auto w-full max-w-3xl rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Story & History */}
      <h3 className="text-3xl font-semibold text-center mb-8 text-yellow-400">
        Our Journey
      </h3>
      <motion.p
        className="max-w-3xl mx-auto text-center text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Founded in 2024, BD Turntable was born from a deep love for analog sound
        and vintage aesthetics. What started as a passion project in a small
        garage quickly evolved into a brand built on dedication and
        authenticity. Each team member brought unique energy, helping us
        transform from local creators into national innovators. Today, we
        celebrate music not just as art but as legacy.
      </motion.p>
    </div>
  );
};

export default MeetOurFounder;
