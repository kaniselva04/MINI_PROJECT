import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BookmarkCheck } from "lucide-react";
import { jwtDecode } from "jwt-decode";

const businesses = [
  { id: 1, name: "Tech Delight", description: "AI solutions for businesses." },
  { id: 2, name: "Business Hub", description: "Connecting startups & investors." },
  { id: 3, name: "Green Earth", description: "Sustainable energy solutions." },
  { id: 4, name: "EduSpark", description: "AI-powered online education." },
  { id: 5, name: "Healthify", description: "Telemedicine for all." },
  { id: 6, name: "Food Fusion", description: "Smart food delivery system." },
];

function UserHistory() {
  const [savedBusinesses, setSavedBusinesses] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded.userId);
        fetchSavedBusinesses(decoded.userId);
      } catch (error) {
        console.error("Invalid token", error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  const fetchSavedBusinesses = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/getSavedList/${userId}`);
      console.log(response.data.savedList);
      if (response.data.success) {
        const savedIds = response.data.savedList.map((item) => item);
        const filteredBusinesses = businesses.filter((b) => savedIds.includes(b.id));
        setSavedBusinesses(filteredBusinesses);
      }
    } catch (error) {
      console.error("Error fetching saved businesses:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 pt-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
        Your Saved Startups
      </h2>

      {loading ? (
        <p className="text-center text-gray-400">Loading...</p>
      ) : savedBusinesses.length === 0 ? (
        <p className="text-center text-gray-400">No saved businesses yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {savedBusinesses.map((business) => (
            <div key={business.id} className="bg-gray-800 p-6 rounded-lg shadow-lg relative">
              <h3 className="text-xl font-bold text-blue-300">{business.name}</h3>
              <p className="mt-2 text-gray-400">{business.description.substring(0, 50)}...</p>
              <Link
                to={`/business/${business.id}`}
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
              >
                Learn More
              </Link>
              <div className="mt-4 flex items-center text-green-400">
                <BookmarkCheck size={20} />
                <span className="ml-2">Saved</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserHistory;
