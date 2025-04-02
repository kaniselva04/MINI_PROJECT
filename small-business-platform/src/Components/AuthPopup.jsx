import React from "react";
import { useState } from "react";
import axios from "axios";

function AuthPopup({ type, close }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    let url = "";
    if (type === "login") {
      url = "login";
    } else {
      url = "register";
    }
    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/${url}`,
        formData
      );

      if (response.data.success && type === "login") {
        alert(`${type} successful!`);
        localStorage.setItem("token", response.data.token);
      }
      if (response.data.success && type != "login") {
        alert(`${type} successful!`);
      }
    } catch (error) {
      console.log(error);
    }

    close();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {type === "login" ? "Login" : "Signup"}
        </h2>
        <form onSubmit={handleSubmit} className="text-black">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            className="w-full p-2 border mb-2"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            className="w-full p-2 border mb-2"
            onChange={handleChange}
            required
          />
          {type === "signup" && (
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              className="w-full p-2 border mb-2"
              onChange={handleChange}
              required
            />
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 p-2 rounded text-white"
          >
            {type === "login" ? "Login" : "Signup"}
          </button>
        </form>
        <button onClick={close} className="mt-3 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
}

export default AuthPopup;
