import React, { useState } from "react";

function PlantCard({ plant, updatePlantPrice, deletePlant }) {
  const [isInStock, setIsInStock] = useState(true);
  const [newPrice, setNewPrice] = useState(plant.price);

  const toggleStock = () => {
    setIsInStock(!isInStock);
  };

  const handlePriceChange = () => {
    updatePlantPrice(plant.id, newPrice);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button onClick={toggleStock}>
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={() => deletePlant(plant.id)}>Delete</button>
      <div>
        <input
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
        <button onClick={handlePriceChange}>Update Price</button>
      </div>
    </li>
  );
}

export default PlantCard;

