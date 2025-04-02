import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bookmark,
  BookmarkCheck,
  Linkedin,
  Twitter,
  Globe,
} from "lucide-react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { motion } from "framer-motion";

const businesses = [
  {
    id: 1,
    name: "Tech Delight",
    description: "AI solutions for businesses.",
    contact: "contact@techdelight.com",
    phone: "+1 123-456-7890",
    linkedin: "https://linkedin.com/company/techdelight",
    twitter: "https://twitter.com/techdelight",
    website: "https://techdelight.com",
  },
  {
    id: 2,
    name: "Business Hub",
    description: "Connecting startups & investors.",
    contact: "info@businesshub.com",
    phone: "+1 987-654-3210",
    linkedin: "https://linkedin.com/company/businesshub",
    twitter: "https://twitter.com/businesshub",
    website: "https://businesshub.com",
  },
  {
    id: 3,
    name: "Green Earth",
    description: "Sustainable energy solutions.",
    contact: "support@greenearth.com",
    phone: "+44 765-432-1098",
    linkedin: "https://linkedin.com/company/greenearth",
    twitter: "https://twitter.com/greenearth",
    website: "https://greenearth.com",
  },
  {
    id: 4,
    name: "EduSpark",
    description: "AI-powered online education.",
    contact: "hello@eduspark.com",
    phone: "+91 98765-43210",
    linkedin: "https://linkedin.com/company/eduspark",
    twitter: "https://twitter.com/eduspark",
    website: "https://eduspark.com",
  },
  {
    id: 5,
    name: "Healthify",
    description: "Telemedicine for all.",
    contact: "care@healthify.com",
    phone: "+61 456-789-123",
    linkedin: "https://linkedin.com/company/healthify",
    twitter: "https://twitter.com/healthify",
    website: "https://healthify.com",
  },
  {
    id: 6,
    name: "Food Fusion",
    description: "Smart food delivery system.",
    contact: "support@foodfusion.com",
    phone: "+33 123-987-6543",
    linkedin: "https://linkedin.com/company/foodfusion",
    twitter: "https://twitter.com/foodfusion",
    website: "https://foodfusion.com",
  },
];

function BusinessList() {
  const [user, setUser] = useState(null);
  const [saved, setSaved] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded.userId);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  const toggleSave = async (id) => {
    if (!user) {
      alert("Please log in to save businesses!");
      return;
    }
    try {
      const url = saved[id]
        ? "http://localhost:5000/api/users/remove-save-list"
        : "http://localhost:5000/api/users/save-list";

      const response = await axios.post(url, { userId: user, itemId: id });
      if (response.data.success) {
        setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
        alert(
          saved[id]
            ? "Business removed from saved list!"
            : "Business saved successfully!"
        );
      }
    } catch (error) {
      console.error("Error toggling save status:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 pt-20">
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Small Scale Startups
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {businesses.map((business, index) => (
          <motion.div
            key={business.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <h3 className="text-xl font-bold text-blue-300">{business.name}</h3>
            <p className="mt-2 text-gray-400">{business.description}</p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href={business.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <Linkedin />
              </a>
              <a
                href={business.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <Twitter />
              </a>
              <a
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <Globe />
              </a>
            </div>
            <Link
              to={`/business/${business.id}`}
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              Learn More
            </Link>
            <motion.button
              onClick={() => toggleSave(business.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              whileTap={{ scale: 0.8 }}
            >
              {saved[business.id] ? (
                <BookmarkCheck size={20} />
              ) : (
                <Bookmark size={20} />
              )}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BusinessList;
