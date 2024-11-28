import React from "react";
import Welcome from "./Welcome";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";
import Destinations from "./Destinations";
import Advantages from "./Advantages";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Landing = () => {
  return (
    <>
      {/* <header>
        <Header />
      </header> */}
      <main className="font-roboto">
        <section id="welcome">
          <Welcome />
        </section>
        <motion.section
          id="who-we-are"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <WhoWeAre />
        </motion.section>
        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <Services />
        </motion.section>
        <motion.section
          id="destination"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <Destinations />
        </motion.section>
        <motion.section
          id="advantages"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <Advantages />
        </motion.section>
        {/* <motion.section
          id="footer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <Footer />
        </motion.section>
        <ScrollToTopButton /> */}
      </main>
    </>
  );
};

export default Landing;
