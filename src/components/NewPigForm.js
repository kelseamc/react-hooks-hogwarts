import React, {useState} from "react"

function NewPigForm({onFormSubmit}){
    const [name, setName] = useState("")
    const [specialty, setSpecialty] = useState("")
    const [weight, setWeight] = useState("")
    const [greased, setGreased]= useState(null)

    function handleSubmit(event){
        event.preventDefault()
        // const newPig = {
        //     name: name,

        // }
        onFormSubmit({name, specialty, weight, greased })
    }

    console.log({name, specialty, weight, greased })
    return(
        <div>
            <form className="new-pig" onSubmit={handleSubmit}>
                
            <label className="name">Name</label>
            <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>

            <label className="specialty">Specialty</label>
            <input type="text" name="specialty" onChange={(e) => setSpecialty(e.target.value)}/>

            <label className = "greased">Greased:</label>
            <label>Yes</label>
            <input type="radio" name="greased" value={true}  onChange={(e) => setGreased(!!e.target.value)}/>
            <label>No</label>
            <input type="radio" name="greased" value={false}  onChange={(e) => setGreased(!e.target.value)}/>
            
            <label className="weight">Weight</label>
            <input type="text" name="weight" onChange={(e) => setWeight(parseInt(e.target.value))}/>

            <input type="submit" value="Add Piggy" />
            
            </form>
        </div>

    )
}

export default NewPigForm