import React from "react";
import image from "../images/image2.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home(){
    let navigate=useNavigate();
    const aboutVariants = {
        hidden: { opacity: 0},
        visible: { opacity: 1,transition: { duration: .5 } },
    };
    return(
        <motion.div  variants={aboutVariants} initial="hidden" animate="visible" className="home">
        <div className="a">
        <h1>Hi There, <br/> I'm <span>Sravan Kumar</span></h1>
        <p>Incididunt ad dolore ex labore excepteur voluptate irure laboris amet id minim non aute excepteur. Aute voluptate sunt ad fugiat. Nisi et nisi ea ad nulla exercitation ea elit. Sit ullamco sint dolor aliqua aute laborum laborum ea ad irure.</p>
        <button className="button button1" onClick={()=>navigate('about')}>About me </button>
        </div>
        <div className="b">
        <img src={image} alt="image"/>
        </div>
        </motion.div>
    )
}
