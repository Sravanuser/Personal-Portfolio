import React from "react";
import Large from './Large.jsx';
import Mobilenav from './Mobilenav.jsx';
import classes from './Nav.css'

export default function Navigation(){
    return(
        <div className={classes.Navbar}>
        <Large/>
        <Mobilenav/>
        </div>
    )
}