import React from "react";
import Navbars from "../../components/Navbar";
import Header from "../../components/Hero/index";
import TopButton from "../../components/TopBtn";
import Service from "../../components/Service/index";
import Team from "../../components/Team";
import Subscription from "../../components/Subscribtion";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
const AboutPage = () => {
  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  };
  return (
    <motion.div
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }}
    >
      <div className="overflow-hidden about-page duration-300">
        <Navbars />
        <Header />
        <Service />
        <TopButton />
        <Team />
        <Subscription />
        <Footer />
      </div>
    </motion.div>
  );
};
export default AboutPage;
