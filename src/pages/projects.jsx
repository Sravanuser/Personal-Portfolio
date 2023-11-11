import React from "react";
import Project1 from "./projects1.jsx";
import Skills from "../main/skills.jsx"

export default function projects1() {
  return (
    <div className="projects">
      <div className="project1">
        <Project1
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw62ykQPXGylk9gIip4-XMj6zlRJsfM4QMGWSSCsIh1CXryPJV&s"
          }
          Title={"Mobile-site"}
          paragraph={
            "Mobile-Site Website Developed a website that displays the users some SmartPhones specifications with a user-friendly interface and efficient navigation"
          }
        />
      </div>
      <h1 className="margin">Skills</h1>
      <div className="skills">
        <Skills
          classes="html"
          data="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UBUNAHgnXslYyZz6gy_QTOc7zL5-XDW4IXauCQsSnhVsYes&s"
        />
        <Skills
          classes="css"
          data="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrcZhW81gWwQZhP0vSl1psOqtHNIjL5uYs2w6thTVgh4rGmLj&s"
        />
        <Skills
          classes="js"
          data="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCkPyDS_CMzaLzCZjxFj5LhGvh1sjmC1u8L_eaGz7uTjSgBQC&s"
        />
        <Skills
          classes="bootstrap"
          data="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGKC5oDSaNtWh4enC2cXoCIOpMl_Fjct-0GywmyEdInC1dTY7&s"
        />
        <Skills
          classes="react"
          data="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUg_rGvgGjzquvA_iyqhrO0yyzgrqWE3dLL4Kt-838QWo2t0BP&s"
        />
        <Skills
          classes="nextjs"
          data="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1dFG4Bcc6oo0du933sJwk7jIdwbA1oJBzdNvMq7o1dS93L4&s"
        />
      </div>
    </div>
  );
}
