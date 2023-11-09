import React from "react";
import {motion} from "framer-motion";

export default function Skills({data,classes}){
    return(
        <motion.div initial={{x:-20,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5}} className={classes}>
        <img src={data} />
        </motion.div>
    )
}