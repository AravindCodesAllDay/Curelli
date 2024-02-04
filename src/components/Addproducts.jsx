import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProduct() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState();

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(image);
    const addReq = async (data) => {
      const formData = new FormData();
      console.log(data);
      try {
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("rating", data.rating);
        formData.append("description", data.description);
        formData.append("stock", data.stock);
        formData.append("image", data.image);
        const res = await fetch("http://localhost:3001/products", {
          method: "POST",
          body: formData,
        });
        const resp = await res.json();
        console.log(resp);
      } catch (error) {
        console.error(error.message);
      }
    };
    addReq({ name, price, description, stock, image });

    setName("");
    setPrice("");
    setDescription("");
    setImage(null);
    setStock("");
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmission}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
        />
        <br />

        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <br />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <br />
        <input
          type="text"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
        />
        <br />
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files);
            setImage(e.target.files[0]);
          }}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default AddProduct;
