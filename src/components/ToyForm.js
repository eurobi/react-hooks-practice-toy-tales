import React, { useState } from "react";

function ToyForm({ onToySubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  })

  function onFormSubmit(e){
    e.preventDefault()
    const newToy = {...formData, likes: 0}
    onToySubmit(newToy)
  }

  return (
    <div className="container">
      <form onSubmit={onFormSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
        />
        <br />
        <input
          onChange={(e) => setFormData({...formData, image: e.target.value})}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
