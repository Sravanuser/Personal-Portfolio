import React from "react";
import Navbar from "./Navbar";
import "./Nav.css";
import {GrMenu} from "react-icons/gr";
import {RxCross1} from "react-icons/rx";

export default function Mobilenav(){
    const[open,setopen] = React.useState(false);
    const ham=<GrMenu className="ham"  size="30px" onClick={()=>setopen(!open)} />
    const cross=<RxCross1 className="ham" size="30px" onClick={()=>setopen(!open)}/>
    const CloseMobileMenu=()=>setopen(false);
    return(
        <div className="Mobilenav" >
        {open ? cross : ham}
        {open &&  <Navbar isMobile={true} CloseMobileMenu={CloseMobileMenu} />}
        </div>
    )
}