import React, { useState } from "react";
import Nav from "./Nav";
import Categories from "./Categories";
import NewPigForm from "./NewPigForm";
import PigList from "./PigList";

import hogs from "../porkers_data";


function App() {
  const [displayPigs, setDisplayPigs] = useState(hogs)

  function handleGreasedClick(){
    const greasedPigs = displayPigs.filter((pig) => pig.greased)
    setDisplayPigs(greasedPigs)
  }

  function handleNameSort(){
      let sortedNames = displayPigs
      sortedNames.sort((a,b) => {
        const nameA = a.name
        const nameB = b.name
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0
      } )
      let newPigArray = sortedNames.map((pig) => pig)
      setDisplayPigs(newPigArray)
  }

  function handleWeightSort(){
    let sortedWeight = displayPigs
    sortedWeight.sort((a,b) => {
      return a.weight - b.weight
    })
    let newPigArray = sortedWeight.map((pig) => pig)
    setDisplayPigs(newPigArray)
  }

  function handleAddPig(newPig){
    console.log(newPig)
    setDisplayPigs([...displayPigs, newPig])
    console.log(displayPigs)
  }

  return (
    <div className="App">
      <Nav />
      <Categories onGreasedClick={handleGreasedClick} onNameClick={handleNameSort} onWeightClick={handleWeightSort}/>
      <NewPigForm onFormSubmit={handleAddPig} />
      <PigList pigArray={displayPigs} /> 
    </div>
  );
}

export default App;
