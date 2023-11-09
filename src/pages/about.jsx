import React from "react";
import {NavLink} from "react-router-dom";
import image1 from "../images/Coding-bro.png";
import Skills from "../main/skills.jsx";

export default function About(){
    return(
        <div className="about">
        <div className="about1">
        <div className="image" >
        <img src={image1} />
        </div>
        <div className="details">
        <h1>Meet <span>Sravan</span>: Aspiring Frontend Developer</h1>
        <p>Et nulla adipisicing dolore sunt officia ipsum velit enim laboris enim anim sint nulla fugiat. Eiusmod sunt sit et reprehenderit sunt dolor ipsum nisi veniam. Ex irure quis duis qui qui adipisicing eiusmod incididunt amet voluptate ea ea ullamco.Sit do ad esse voluptate laboris amet excepteur sunt officia pariatur ex.</p>
        <div className="contact">
        <NavLink to="https://github.com/Sravanuser"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpmO8tiYe_zsoAa8MYbJLz8GW14m5kZItx8OkjQoeHob2Ch8Q&s" alt="github"/></NavLink>
        <NavLink to="https://instagram.com/sravan7708?igshid=NGVhN2U2NjQ0Yg=="><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOhGgFGA4fRAeBrFlWJ1OcDZUn2Aq-Q3uexiOmTgq8kq_ieNf&s" alt="instagram-new"/></NavLink>
        <NavLink to="https://www.linkedin.com/in/sravankumar-puppala-410056250"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQC-XTJnDgjRYJReyAcnkfOrslRhmkAJuFua6hM-d12dh-qs&s"/></NavLink>
        </div>
        </div>
        </div>
        <h1>Skills</h1>
        <div className="skills">
        <Skills classes="html" data="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UBUNAHgnXslYyZz6gy_QTOc7zL5-XDW4IXauCQsSnhVsYes&s" />
        <Skills classes="css" data="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrcZhW81gWwQZhP0vSl1psOqtHNIjL5uYs2w6thTVgh4rGmLj&s" />
        <Skills classes="js" data="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCkPyDS_CMzaLzCZjxFj5LhGvh1sjmC1u8L_eaGz7uTjSgBQC&s" />
        <Skills classes="bootstrap" data="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGKC5oDSaNtWh4enC2cXoCIOpMl_Fjct-0GywmyEdInC1dTY7&s" />
        <Skills classes="react" data="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUg_rGvgGjzquvA_iyqhrO0yyzgrqWE3dLL4Kt-838QWo2t0BP&s"/>
        <Skills classes="nextjs" data="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1dFG4Bcc6oo0du933sJwk7jIdwbA1oJBzdNvMq7o1dS93L4&s"/>
        </div>
        </div>
    )
}
