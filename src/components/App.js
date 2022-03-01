import React, {useState, useEffect}  from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


function App() {
  const [plants, setPlants] = useState([])
  const [searchInput, setSearchInput] = useState("")
  
  function handleNewPlant (newPlant) {
    setPlants([...plants, newPlant])
  }

  function handlePlantDelete (plant) {
    console.log("Plant:", plant)
      fetch(`http://localhost:6001/plants/${plant.id}`, {
        method:"DELETE"
    })
      .then(response => response.json())
      .then(() => setPlants(plants.filter(function (showPlant) { 
        return showPlant.id !== plant.id 
      })))
}

  const searchPlants = plants.filter(function (plant){
      return plant.name.toLowerCase().includes(searchInput.toLowerCase()) 
  })

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => setPlants(data)) 
  }, [])
  
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants} handleNewPlant={handleNewPlant} searchPlants={searchPlants} searchInput={searchInput} setSearchInput={setSearchInput} handlePlantDelete={handlePlantDelete} />
    </div>
  );
}

export default App;
