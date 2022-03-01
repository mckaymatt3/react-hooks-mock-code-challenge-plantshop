import React, {useState} from "react";
// import {v4 as uuid} from 'uuid'; 

function NewPlantForm({handleNewPlant}) {
  const [newPlantName, setNewPlantName] = useState([])
  const [newPlantImage, setNewPlantImage] = useState([])
  const [newPlantPrice, setNewPlantPrice] = useState(0)
  
  function handleSubmit (event) {
    event.preventDefault()
    console.log("I've been submitted")
    // handleNewPlant({
    const newPlant = { 
      name: newPlantName,
      image: newPlantImage,
      price: newPlantPrice
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(newPlant)
    })
      .then(response=> response.json())
      .then(data => handleNewPlant(data))
  }
  
  function createNewPlantName(event) {
    setNewPlantName(event.target.value)
    console.log("newPlantName:", newPlantName)
  }

  function createNewPlantImage(event) {
    const newImage = event.target
    setNewPlantImage(newImage.value)

    //how could i create a class so it would be similarly formatted?
    console.log("newImage:", newImage)
    console.log("newPlantImage:", newPlantImage)
  }

  function createNewPlantPrice(event) {
    setNewPlantPrice(event.target.value)
    console.log("newPlantPrice:", newPlantPrice)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={createNewPlantName} value={newPlantName} type="text" name="name" placeholder="Plant name" />
        <input onChange={createNewPlantImage} value={newPlantImage} type="text" name="image" placeholder="Image URL" />
        <input onChange={createNewPlantPrice} value={newPlantPrice} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
