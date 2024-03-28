import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddAddressModal from "../components/AddAddressModal";

export default function Checkout() {
  window.scrollTo(0, 0);
  const nav = useNavigate();
  const userId = sessionStorage.getItem("id");
  const [cartItems, setCartItems] = useState([]);
  const [userAddress, setUserAddress] = useState([]);
  const [addModal, setAddModal] = useState(false);

  const [getAddress, setGetAddress] = useState(false);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);
  const [addressId, setAddressId] = useState("");
  const [paymentmethod, setPaymentmethod] = useState("");

  const fetchProductDetails = async (productId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}products/${productId}`
      );
      return await response.json();
    } catch (error) {
      console.error("Error fetching product details:", error);
      return null;
    }
  };

  const fetchCartDetails = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}users/${userId}`
      );
      const user = await response.json();
      setUserAddress(user.address);
      const updatedCartItems = await Promise.all(
        user.cart.map(async (cartItem) => {
          const productDetails = await fetchProductDetails(cartItem.product);
          return {
            ...productDetails,
            quantity: cartItem.quantity,
            id: cartItem.product,
          };
        })
      );

      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Error fetching user cart:", error);
      setError("Error fetching cart. Please try again later.");
    }
  };
  useEffect(() => {
    fetchCartDetails();
  }, []);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // console.log(userAddress);

  const handlePlaceOrder = async () => {
    try {
      let products = [];
      cartItems.map((item) => {
        products.push(item._id);
      });

      const addressIndex = userAddress.findIndex(
        (address) => address._id === addressId
      );
      let address = [];
      address.push(userAddress[addressIndex]);

      const orderRes = await fetch(
        `${import.meta.env.VITE_API}orders/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            addressId: userAddress[addressIndex],
            products,
            paymentmethod,
            totalPrice,
          }),
        }
      );
      const data = await orderRes.json();
      console.log(data);
      nav("/cart");
    } catch (error) {
      console.error("Error during placing order", error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">Checkout</h2>
        <div className="w-full flex">
          <div className=" w-4/6 m-3 flex flex-col gap-8">
            <div className="bg-[#638759] rounded-lg shadow-lg p-4 w-full flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-white">
                1. Select a Delivery Address
              </h3>
              {!getAddress && (
                <>
                  <div className="bg-white rounded-lg p-4">
                    <div className="space-y-4">
                      {userAddress.map((data) => (
                        <div className="flex items-center" key={data._id}>
                          <input
                            type="radio"
                            id={data._id}
                            name="address"
                            value={data._id}
                            className="mr-2"
                            onChange={(e) => setAddressId(e.target.value)}
                          />
                          <label htmlFor={data._id}>
                            {data.address}, {data.district}, {data.state}-
                            {data.pincode}-{data.addressContact}
                          </label>
                        </div>
                      ))}

                      <button
                        className="border px-1 rounded"
                        onClick={() => setAddModal(true)}
                      >
                        +Add Address
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      className="bg-white text-green-800 py-2 px-4 rounded hover:scale-110"
                      onClick={() => {
                        if (addressId !== "") {
                          setGetAddress(true);
                        }
                      }}
                    >
                      Use this address
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col bg-[#638759] rounded-lg shadow-lg p-4 w-full gap-3">
              <h3 className="text-lg font-semibold text-white">
                2. Select a payment method
              </h3>
              {getAddress && !showPaymentMethod && (
                <>
                  <div className="bg-white rounded-lg p-4 flex flex-col gap-3">
                    <h3>Account Balance</h3>
                    <div className="flex gap-4">
                      <input
                        type="number"
                        placeholder="Enter Code"
                        className="border rounded"
                      />
                      <button className="border px-1 rounded">Submit</button>
                    </div>
                    <h3>Other payment method</h3>
                    <div>
                      <div>
                        <input
                          type="radio"
                          value="cash"
                          onChange={(e) => setPaymentmethod(e.target.value)}
                          name="payment-method"
                        />
                        <span>Cash On Delivery</span>
                      </div>
                      <div>
                        <input
                          type="radio"
                          value="upi"
                          onChange={(e) => setPaymentmethod(e.target.value)}
                          name="payment-method"
                        />
                        <span>UPI</span>
                      </div>
                      <div>
                        <input
                          type="radio"
                          value="emi"
                          onChange={(e) => setPaymentmethod(e.target.value)}
                          name="payment-method"
                        />
                        <span>EMI</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-white text-green-800 py-2 px-4 rounded hover:scale-110"
                      onClick={() => {
                        if (paymentmethod !== "") setShowPaymentMethod(true);
                      }}
                    >
                      Use this payment method
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="bg-[#638759] rounded-lg shadow-lg p-4 w-full flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white">
                3. Items and Delivery
              </h3>
              {getAddress && showPaymentMethod && (
                <>
                  <div className="bg-white rounded-lg p-4">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr
                            key={item.id}
                            className="border-2 m-1 text-center"
                          >
                            <td className="flex justify-center">
                              <img
                                src={`${import.meta.env.VITE_API}uploads/${
                                  item.photo
                                }`}
                                alt=""
                                className="w-24 h-24 object-contain"
                              />
                            </td>
                            <td>{item.name}</td>
                            <td>
                              <div className="flex justify-center">
                                <span>{item.quantity}</span>
                              </div>
                            </td>

                            <td>Rs.{item.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className="bg-white text-green-800 py-2 px-4 rounded hover:scale-110"
                      onClick={handlePlaceOrder}
                    >
                      Place your order
                    </button>
                    <p className="text-lg font-semibold text-white">
                      Order Total :
                      {totalPrice + totalPrice * 0.05 - totalItems * 5}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="w-2/6 h-96 p-4 grid grid-rows-5 items-center bg-[#638759] m-3 rounded text-white font-semibold">
            <h3 className="font-blod text-2xl justify-center flex font-bold">
              Order Summary
            </h3>
            <p>items:{totalPrice}</p>
            <p>Delivery:{totalPrice * 0.1}</p>
            <p>Promotion Applied:{totalItems * 5}</p>
            <p className="border-y py-2 border-white text-xl">
              Order Total :{totalPrice + totalPrice * 0.05 - totalItems * 5}
            </p>
          </div>
        </div>
      </div>
      {addModal && <AddAddressModal setAddModal={setAddModal} />}
    </>
  );
}
