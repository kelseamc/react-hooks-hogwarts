import React from "react";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";


function PigImage({name}){
    const matchname = name.toLowerCase().split(" ").join("_")

    const pigImgs = {
        augustus_gloop, 
        babe,
        bailey,
        cherub,
        galaxy_note,
        leggo_my_eggo,
        peppa,
        piggy_smalls,
        piglet,
        porkchop,
        trouble,
        truffle_shuffle
    }
    const renderImg = pigImgs[matchname]
    
    return <img src={renderImg}></img>
      
    
}

export default PigImage;