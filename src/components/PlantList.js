import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants, setPlants, searchPlants, searchInput, setSearchInput, handlePlantDelete} ) {
  // const firstPlant = plants[0]
  // console.log("Plants:" , plants)
  // console.log("SetPlants: ", setPlants)
  // console.log("FirstPlant: ", firstPlant)
  return (
    <ul className="cards">
      {searchPlants.map(function (plant){
        return <PlantCard key={plant.id} plant={plant} handlePlantDelete={handlePlantDelete} />
      })
        
      }
    </ul>
  );
}

export default PlantList;
