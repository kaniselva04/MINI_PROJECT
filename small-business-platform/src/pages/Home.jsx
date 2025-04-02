import React, { Component } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { src: img1, top: "5%", left: "10%" },
        { src: img2, top: "15%", left: "70%" },
        { src: img3, top: "50%", left: "20%" },
        { src: img4, top: "65%", left: "60%" },
      ],
    };
  }

  render() {
    return (
      <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Background Floating Images */}
        <div className="absolute inset-0">
          {this.state.images.map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt="Startup / Empowering Women"
              className="absolute w-52 h-52 object-cover rounded-lg shadow-lg opacity-50"
              style={{ top: image.top, left: image.left }}
              animate={{
                y: ["0%", "8%", "0%"], // Floating animation
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 1, // Stagger effect
              }}
            />
          ))}
        </div>

        {/* Content Section */}
        <div className="z-10 text-center px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold tracking-wide text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering Startups & Women Entrepreneurs
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Join the movement to drive innovation and success!
          </motion.p>
        </div>
      </div>
    );
  }
}

export default Home;





