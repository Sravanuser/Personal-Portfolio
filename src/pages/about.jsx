import React from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { NavLink } from "react-router-dom";
import image1 from "../images/Coding-bro.png";

export default function About() {
  const aboutVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };
  const contactVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };
  return (
    <div className="about">
      <div className="about1">
        <AnimatePresence>
          <motion.div
            className="image"
            variants={aboutVariants}
            initial="hidden"
            animate="visible"
          >
            <img src={image1} />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            className="details"
            variants={contactVariants}
            initial="hidden"
            animate="visible"
          >
            <h1>
              Meet <span>Sravan</span>: Aspiring Frontend Developer
            </h1>
            <p>
              Et nulla adipisicing dolore sunt officia ipsum velit enim laboris
              enim anim sint nulla fugiat. Eiusmod sunt sit et reprehenderit
              sunt dolor ipsum nisi veniam. Ex irure quis duis qui qui
              adipisicing eiusmod incididunt amet voluptate ea ea ullamco.Sit do
              ad esse voluptate laboris amet excepteur sunt officia pariatur ex.
            </p>
            <div className="contact">
              <NavLink to="https://github.com/Sravanuser">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpmO8tiYe_zsoAa8MYbJLz8GW14m5kZItx8OkjQoeHob2Ch8Q&s"
                  alt="github"
                />
              </NavLink>
              <NavLink to="https://instagram.com/sravan7708?igshid=NGVhN2U2NjQ0Yg==">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOhGgFGA4fRAeBrFlWJ1OcDZUn2Aq-Q3uexiOmTgq8kq_ieNf&s"
                  alt="instagram-new"
                />
              </NavLink>
              <NavLink to="https://www.linkedin.com/in/sravankumar-puppala-410056250">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQC-XTJnDgjRYJReyAcnkfOrslRhmkAJuFua6hM-d12dh-qs&s" />
              </NavLink>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
  
    </div>
  );
}