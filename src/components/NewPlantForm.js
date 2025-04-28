import React,{useState} from "react";

function NewPlantForm({addplant}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newplant = { name, image, price };


    addplant(newplant);
    setName("");
    setImage("");
    setPrice("");
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Plant name"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
  
}

export default NewPlantForm;
