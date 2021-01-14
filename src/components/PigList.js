import React from "react"
import Pig from "./Pig"

function PigList({pigArray}){

    const pigs = pigArray.map((pig) => {
        
        
        return (<Pig 
            key={pig.name}
            name={pig.name}
            weight={pig.weight}
            specialty={pig.specialty}
            greased={pig.greased}
            medal={pig["highest medal achieved"]}
            />
        )
        
    })

    

    return(
        <div className="PigList">
            {pigs}
        </div>
    )
}

export default PigList