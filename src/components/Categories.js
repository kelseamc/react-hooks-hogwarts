import React from "react";

function Categories({ onGreasedClick, onNameClick, onWeightClick }){


    return(
    <>
        <span>Filter:
            <button onClick={onGreasedClick}>Greased</button>
        </span>
        <span>
            Sort:
            <button onClick={onNameClick}>A-Z</button>
            <button onClick={onWeightClick}>Weights</button>
        </span>
    </>
    )
}

export default Categories;