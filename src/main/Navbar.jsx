import React from "react";
import "./Nav.css"
import Resume from "../images/Resume.pdf";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

export default function Navbar(props){
    const animatefrom={opacity:0,y:-40};
    const animateto={opacity:1,y:0};
    const activeLink={color : "#00ff00",fontWeight : 700};
    const normalLink={color : "#000"};
    return(
        <div className="Navigation">
        <motion.li initial={animatefrom} animate={animateto}
        transition={{delay:0.20}} onClick={()=>props.isMobile && props.CloseMobileMenu()}><NavLink style={({isActive})=>
        isActive ? activeLink : normalLink} to='/'>Home</NavLink></motion.li>
        <motion.li initial={animatefrom} animate={animateto} transition={{delay:0.30}}  onClick={()=>props.isMobile && props.CloseMobileMenu()}><NavLink style={({isActive})=>
        isActive ? activeLink : normalLink} to="/about">About</NavLink></motion.li>
        <motion.li transition={{delay:0.40}} initial={animatefrom} animate={animateto}  onClick={()=>props.isMobile && props.CloseMobileMenu()}><NavLink style={({isActive})=>
        isActive ? activeLink : normalLink} to="/projects">Projects</NavLink></motion.li>
        <motion.li initial={animatefrom} transition={{delay:0.50}} animate={animateto}  onClick={()=>props.isMobile && props.CloseMobileMenu()}><a href={Resume} dounloa="Resume.pdf">Resume</a></motion.li>
        </div>
    )
}