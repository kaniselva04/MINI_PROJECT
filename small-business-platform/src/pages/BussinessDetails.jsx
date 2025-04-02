import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import impact from "../assets/impact.png";
import impact2 from "../assets/impact2.png";

const businessData = {
  1: {
    name: "Tech Delight",
    tagline: "AI-driven business automation and analytics.",
    description:
      "Tech Delight is revolutionizing business intelligence by leveraging artificial intelligence for automation and predictive analytics. Our solutions help enterprises make data-driven decisions with ease.",
    howItWorks:
      "By integrating AI and machine learning, Tech Delight analyzes vast datasets, identifies patterns, and provides real-time business insights. From automating routine tasks to forecasting trends, we empower organizations with actionable intelligence.",
    impact:
      "Over 10,000 businesses worldwide use Tech Delight to optimize workflows, reduce operational costs, and enhance productivity by 50%.",
    vision:
      "Our mission is to make AI-driven analytics accessible to all businesses, enhancing decision-making capabilities across industries.",
    founder: "Alice Johnson",
    industry: "AI & Analytics",
    location: "San Francisco, USA",
    contact: {
      email: "contact@techdelight.com",
      phone: "+1 415-123-4567",
      website: "https://www.techdelight.com",
    },
    logo: "https://www.eschoolnews.com/files/2024/12/k-12-tech-innovation-news.jpeg",
    team: "https://media.istockphoto.com/id/1047549798/photo/indian-team-working-together-and-looking-on-a-screen-of-laptop.jpg?s=612x612&w=0&k=20&c=gJqsl_4VH3es693-7_-Bdx0v-2Mj_QBAheuFPxrBAdA=",
    operations: impact,
  },
  2: {
    name: "Business Hub",
    tagline: "Connecting small startups with investors worldwide.",
    description:
      "Business Hub is a platform that bridges the gap between innovative startups and potential investors. We provide tools for fundraising, networking, and growth strategies.",
    howItWorks:
      "Startups create detailed profiles showcasing their vision, milestones, and investment needs. Investors browse potential opportunities, analyze financials, and connect directly with founders.",
    impact:
      "Over $500M in funding has been raised through our platform, helping 2,000+ startups scale globally.",
    vision:
      "We aim to be the go-to platform for startup funding, making investment opportunities accessible worldwide.",
    founder: "James Carter",
    industry: "Investment & Networking",
    location: "London, UK",
    contact: {
      email: "info@businesshub.com",
      phone: "+44 20 7946 0123",
      website: "https://www.businesshub.com",
    },
    logo: "https://www.creativeanalysis.co.uk/wp-content/uploads/2016/02/The-Business-Hub-logo.jpg",
    team: "https://media.istockphoto.com/id/1409520341/photo/group-of-young-people-discussing-in-the-co-working-office.jpg?s=612x612&w=0&k=20&c=MMScAoIbvQebCJ3dhr8pZ1izzuWxW_pBJ4yJ1KQfwpM=",
    operations: impact2,
  },
  3: {
    name: "Green Earth",
    tagline: "Innovating sustainable and green energy solutions.",
    description:
      "Green Earth is committed to developing renewable energy solutions that reduce carbon footprints and promote environmental sustainability.",
    howItWorks:
      "We design and install high-efficiency solar panels, wind turbines, and energy storage systems. Our smart energy grids optimize electricity consumption while reducing waste.",
    impact:
      "Green Earth has successfully powered 50,000+ homes with clean energy, reducing CO₂ emissions by over 200,000 tons annually.",
    vision:
      "Our vision is to transition the world towards 100% renewable energy by making clean power accessible and affordable.",
    founder: "Sophia Green",
    industry: "Renewable Energy",
    location: "Berlin, Germany",
    contact: {
      email: "support@greenearth.com",
      phone: "+49 30 1234567",
      website: "https://www.greenearth.com",
    },
    logo: "https://source.unsplash.com/600x400/?solar,energy",
    team: "https://source.unsplash.com/600x400/?team,solar",
    operations: "https://source.unsplash.com/600x400/?factory,renewable",
  },
  4: {
    name: "EduSpark",
    tagline: "Revolutionizing online education using AI.",
    description:
      "EduSpark is transforming education by integrating AI-powered adaptive learning, providing personalized experiences to students worldwide.",
    howItWorks:
      "Our platform analyzes student learning patterns and customizes lesson plans, quizzes, and video lectures accordingly. AI tutors provide real-time feedback to enhance comprehension.",
    impact:
      "With over 5 million active learners, EduSpark has improved learning outcomes by 70% through personalized education.",
    vision:
      "Our goal is to make quality education accessible to everyone, using AI to bridge gaps in learning.",
    founder: "Michael Reed",
    industry: "EdTech",
    location: "New York, USA",
    contact: {
      email: "hello@eduspark.com",
      phone: "+1 212-567-8901",
      website: "https://www.eduspark.com",
    },
    logo: "https://source.unsplash.com/600x400/?education,learning",
    team: "https://source.unsplash.com/600x400/?team,students",
    operations: "https://source.unsplash.com/600x400/?school,classroom",
  },
  5: {
    name: "Healthify",
    tagline: "Providing telemedicine services and health tracking.",
    description:
      "Healthify is a digital health platform offering virtual consultations, AI-powered diagnostics, and personalized health tracking solutions.",
    howItWorks:
      "Patients can consult doctors online, receive AI-driven health insights, and track their medical records. Wearable integrations help users monitor vital signs in real-time.",
    impact:
      "Healthify has facilitated over 1 million telemedicine consultations and reduced hospital visits by 40% through proactive health tracking.",
    vision:
      "We aim to make healthcare accessible and affordable for everyone, leveraging technology to improve patient outcomes.",
    founder: "Dr. Emily Carter",
    industry: "Healthcare & Telemedicine",
    location: "Toronto, Canada",
    contact: {
      email: "care@healthify.com",
      phone: "+1 647-321-7654",
      website: "https://www.healthify.com",
    },
    logo: "https://source.unsplash.com/600x400/?healthcare,medicine",
    team: "https://source.unsplash.com/600x400/?medical,doctors",
    operations: "https://source.unsplash.com/600x400/?hospital,clinic",
  },
  6: {
    name: "Food Fusion",
    tagline: "Smart food delivery and restaurant management.",
    description:
      "Food Fusion is an AI-driven platform that optimizes food delivery logistics and streamlines restaurant operations.",
    howItWorks:
      "Restaurants use our AI-based inventory system to manage stock efficiently, while our smart routing algorithm ensures fast and cost-effective food deliveries.",
    impact:
      "With over 10 million orders processed, we’ve helped restaurants cut food waste by 30% and delivery times by 20%.",
    vision:
      "We envision a future where technology enhances food service efficiency, making meals fresher, faster, and more sustainable.",
    founder: "Nathan Brown",
    industry: "FoodTech",
    location: "Los Angeles, USA",
    contact: {
      email: "info@foodfusion.com",
      phone: "+1 310-555-6789",
      website: "https://www.foodfusion.com",
    },
    logo: "https://source.unsplash.com/600x400/?food,restaurant",
    team: "https://source.unsplash.com/600x400/?team,chef",
    operations: "https://source.unsplash.com/600x400/?delivery,truck",
  },
};

function BusinessDetails() {
  const { id } = useParams();
  const business = businessData[id];

  if (!business) {
    return <h2 className="text-center text-white mt-20">Business not found</h2>;
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white px-8 pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo Section */}
        <motion.img
          src={business.logo}
          alt={business.name}
          className="w-full h-60 object-cover rounded-lg mb-6"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        {/* Title Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-blue-400">{business.name}</h1>
          <p className="italic text-lg text-gray-300 mt-2">
            {business.tagline}
          </p>
        </motion.div>

        {/* About Section */}
        <motion.section
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white">
            About {business.name}
          </h3>
          <p className="text-gray-300 leading-relaxed mt-2">
            {business.description}
          </p>
        </motion.section>

        {/* Team Image */}
        <motion.img
          src={business.team}
          alt="Team"
          className="w-full h-60 object-cover rounded-lg mt-6 mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />

        {/* How It Works Section */}
        <motion.section
          className="mt-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white">How It Works</h3>
          <p className="text-gray-300 leading-relaxed mt-2">
            {business.howItWorks}
          </p>
        </motion.section>

        {/* Impact Section */}
        <motion.section
          className="mt-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white">
            Impact & Achievements
          </h3>
          <p className="text-gray-300 leading-relaxed mt-2">
            {business.impact}
          </p>
        </motion.section>

        {/* Operations Image */}
        <motion.img
          src={business.operations}
          alt="Operations"
          className="w-full h-60 object-cover rounded-lg mt-6 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />

        {/* Contact Section */}
        <motion.section
          className="mt-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white">Contact Details</h3>
          <div className="mt-4 space-y-2">
            <p className="text-gray-300">
              Email:{" "}
              <a
                href={`mailto:${business.contact.email}`}
                className="text-blue-400 hover:underline"
              >
                {business.contact.email}
              </a>
            </p>
            <p className="text-gray-300">
              Phone:{" "}
              <a
                href={`tel:${business.contact.phone}`}
                className="text-blue-400 hover:underline"
              >
                {business.contact.phone}
              </a>
            </p>
            <p className="text-gray-300">
              Website:{" "}
              <a
                href={business.contact.website}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {business.contact.website}
              </a>
            </p>
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}

export default BusinessDetails;
