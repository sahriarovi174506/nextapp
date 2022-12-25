import React, { useEffect } from "react";
import Header from "../components/Hero";
import Navbars from "../components/Navbar";
import Service from "../components/Service/index";
import TopButton from "../components/TopBtn";
import Counter from "../components/Counter/index";
import Featured from "../components/FeaturedSection";
import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import FaqQuestion from "../components/FAQ_Question";
import FeaturedTwo from "../components/FeaturedTwo";
import BlogSlider from "../components/BlogSlider";
import Subscription from "../components/Subscribtion";
import Footer from "../components/Footer";
// animation
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  // aos
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      offset: 0,
    });
  }, []);
  return (
    <motion.div
      className="overflow-hidden home-page duration-300"
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }} // Set the transition to linear
    >
      <Navbars />
      <Header />
      <Service />
      <TopButton />
      <Counter />
      <Featured />
      <Slider />
      <Testimonials />
      <Team />
      <FaqQuestion />
      <FeaturedTwo />
      <BlogSlider />
      <Subscription />
      <Footer />
    </motion.div>
  );
};

export default Home;
