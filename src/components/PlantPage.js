import React,{useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage({ plants, addPlant, updatePlantPrice, deletePlant }) {
  const [searchQuery,setSearchQuery] =useState("")

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search  searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <PlantList
        plants={filteredPlants}
        updatePlantPrice={updatePlantPrice}
        deletePlant={deletePlant}
      />
    </main>
  );
}

export default PlantPage;

