import React, {useState} from "react";
import PigImage from "./PigImage";


function Pig({name, weight, specialty, greased, medal}){
 
    const [details, setDetails] = useState(false)
    const [show, setShow] = useState(true)
 

    function handleDetails(){
        setDetails(!details)
    }

    function handleShow(){
        setShow(!show)
    }

    return(
        <>
           {show ? <div className="ui card" onClick={handleDetails}>
                <div className="image">
                    <PigImage name={name} />
                    <h1 className="header">{name}</h1>
                </div> 
                {details ? <div class="content">
                    
                    <div className="meta">
                    <span className="weight">Weight: {weight}</span>
                    <span className="greased">  | Greased: {greased ? "Yes" : "No"} </span>
                    </div>
                    <div className="specialty">
                    Specialty:  {specialty}
                    </div>
                    <div className="medal">Medal: {medal}</div> 
                </div> :null}
                <button onClick={handleShow}>Hide</button>
            </div> : null }
        </>
    )
}

export default Pig