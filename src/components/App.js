import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
  .then(r => r.json())
  .then((toys) => setToys(toys))
  },[])
  


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onToySubmit(newToy){
    console.log('running')
    fetch('http://localhost:3001/toys',{
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newToy)
    })
    setToys([...toys, newToy])
  }

  function handleDelete(toyId){
    fetch(`http://localhost:3001/toys/${toyId}`,{
      method: 'DELETE'
    })
    setToys([...toys].filter((toy) => toy.id !== toyId))
  }

  function handleLike(toyId, likes){
    fetch(`http://localhost:3001/toys/${toyId}`,{
      method: 'PATCH',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({likes: likes + 1})
    })
    const newToys = toys.map((toy) => {
      if(toy.id === toyId){
        toy.likes += 1
        return toy
      }
      return toy
    })
    setToys(newToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onToySubmit={onToySubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer handleLike={handleLike} handleDelete={handleDelete} toys={toys} />
    </>
  );
}

export default App;
