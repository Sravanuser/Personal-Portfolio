import React from "react";
import image from "../images/image2.jpg";
import { useNavigate } from "react-router-dom";

export default function Home(){
    let navigate=useNavigate();
    return(
        <div className="home">
        <div className="a">
        <h1>Hi There, <br/> I'm <span>Sravan Kumar</span></h1>
        <p>Incididunt ad dolore ex labore excepteur voluptate irure laboris amet id minim non aute excepteur. Aute voluptate sunt ad fugiat. Nisi et nisi ea ad nulla exercitation ea elit. Sit ullamco sint dolor aliqua aute laborum laborum ea ad irure.</p>
        <button  onClick={()=>navigate('about')}>About me </button>
        </div>
        <div className="b">
        <img src={image} alt="image"/>
        </div>
        </div>
    )
}