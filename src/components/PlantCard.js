import React, {useState} from "react";

function PlantCard( {plant, handlePlantDelete} ) {
  const [soldOut, setSoldOut] = useState(false)
  const text = soldOut ? "Sold Out" : "In Stock"
  const classy = soldOut ? "" : "primary"

  function handleSaleStatus () {
    setSoldOut(!soldOut)    
  }
  
  function handleDelete () {
    handlePlantDelete(plant)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button onClick={handleSaleStatus} className={classy}>{text}</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
