import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  // Fetch plants on component mount
  useEffect(() => {
    // Fetch plants from the server
    const fetchPlants = async () => {
      const response = await fetch('http://localhost:6001/plants');
      const data = await response.json();
      setPlants(data);
    };

    fetchPlants();
  }, []);

  const addPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  const updatePlantPrice = (id, newPrice) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, price: newPrice } : plant
      )
    );
  };

  const deletePlant = (id) => {
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={plants}
        addPlant={addPlant}
        updatePlantPrice={updatePlantPrice}
        deletePlant={deletePlant}
      />
    </div>
  );
}

export default App;

