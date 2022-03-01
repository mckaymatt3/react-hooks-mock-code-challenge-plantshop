import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setPlants, handleNewPlant, searchPlants, searchInput, setSearchInput, handlePlantDelete}) {
  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search plants={plants} searchPlants={searchPlants} searchInput={searchInput} setSearchInput={setSearchInput} />
      <PlantList plants={plants} setPlants={setPlants} searchPlants={searchPlants} searchInput={searchInput} setSearchInput={setSearchInput} handlePlantDelete={handlePlantDelete} />
    </main>
  );
}

export default PlantPage;
