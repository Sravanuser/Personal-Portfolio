import React from "react";
import { Link } from "react-router-dom";

export default function Project1({image,paragraph,Title}){
    return(
        <div className="project2">
        <img
          src={image}
          alt="image"
        />
      <div className="para">
      <h3 style={{color:"#00ff00"}}>{Title}</h3>
      <p>{paragraph}</p>
      <button className="button" style={{marginTop:"5px",borderRadius:"5px"}}><Link style={{textDecoration:"none",fontSize:"15px"}} to="https://mobile-site.vercel.app/">Preview site</Link></button>
      </div>
      </div>
    )
}
