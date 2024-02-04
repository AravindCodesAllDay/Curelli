import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [image, setImage] = useState(null);

  const handleSubmission = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("ProductName", name);
    formData.append("price", price);
    formData.append("rating", rating);
    formData.append("description", description);
    formData.append("stock", stock);
    formData.append("image", image);

    try {
      const res = await fetch(`${import.meta.env.VITE_API}/products`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to add product");
      }

      const resp = await res.json();
      console.log(resp);
      toast.success("Product added successfully");
    } catch (error) {
      console.error(error.message);
      toast.error("Error adding product");
    }

    // Reset form fields
    setName("");
    setRating(0);
    setPrice(0);
    setDescription("");
    setStock(0);
    setImage(null);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <ToastContainer />
      <form onSubmit={handleSubmission} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
