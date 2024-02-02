import React, { useState } from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";

const CartItems = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const cartItems = [
    {
      name: "Product 1",
      price: 40,
      detail: "detail related to product",
      image: img1,
      status: 1,
    },
    {
      name: "Product 2",
      price: 30,
      detail: "detail related to product",
      image: img2,
      status: 2,
    },
  ];

  const handleIncreaseQuantity = (index) => {};

  const handleDecreaseQuantity = (index) => {};

  const handleDeleteItem = (index) => {};

  const handleCheckboxChange = (index) => {
    const updatedSelectedItems = [...selectedItems];
    updatedSelectedItems[index] = !updatedSelectedItems[index];
    setSelectedItems(updatedSelectedItems);
  };

  const handleProceedToBuy = () => {};

  return (
    <div className="max-w-4xl mx-auto mt-4">
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your Cart is empty.</p>
      ) : (
        <div>
          <table className="w-full">
            <thead>
              <tr className="border-b-2">
                <th className="p-4"></th>
                <th className="p-4">Image</th>
                <th className="p-4">Details</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr className="border-b-2" key={index}>
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedItems[index] || false}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td className="p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-full w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="p-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p>{item.detail}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-gray-600">₹{item.price}</p>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecreaseQuantity(index)}
                        className="text-sm text-gray-500 mr-2"
                      >
                        -
                      </button>
                      <p className="text-gray-600">{item.status}</p>
                      <button
                        onClick={() => handleIncreaseQuantity(index)}
                        className="text-sm text-gray-500 ml-2"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDeleteItem(index)}
                      className="text-sm text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <button
              onClick={handleProceedToBuy}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Proceed to Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
