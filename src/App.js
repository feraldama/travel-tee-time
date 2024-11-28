import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import ScrollToTopButton from "./components/ScrollToTopButton";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <main className="font-roboto">
      <Header />
      <main>
        <Outlet />
      </main>
      <motion.section
        id="footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={sectionVariants}
      >
        <Footer />
      </motion.section>
      <ScrollToTopButton />
    </main>
  );
}

export default App;
