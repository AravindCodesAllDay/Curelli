import React, { useState } from "react";

export default function Checkout() {
  const [selectAddress, setSelectAddress] = useState(false);
  const [selectPayment, setSelectPayment] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">Checkout</h2>
      <div className="w-full flex">
        <div className=" w-4/6 m-3 flex flex-col gap-8">
          <div className="bg-[#638759] rounded-lg shadow-lg p-4 w-full flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">
                1. Select a Delivery Address
              </h3>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="address1"
                    name="address"
                    className="mr-2"
                  />
                  <label htmlFor="address1">123 Main St, City, Country</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="address2"
                    name="address"
                    className="mr-2"
                  />
                  <label htmlFor="address2">456 Elm St, City, Country</label>
                </div>
                <button className="border px-1 rounded">+Add Address</button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Use this address
              </button>
            </div>
          </div>

          <div className="flex flex-col bg-[#638759] rounded-lg shadow-lg p-4 w-full gap-3">
            <h3 className="text-lg font-semibold text-white">
              2. Select a payment method
            </h3>
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
                  <input type="radio" name="payment-method" />
                  <span>cash on delivery</span>
                </div>
                <div>
                  <input type="radio" name="payment-method" />
                  <span>UPI</span>
                </div>
                <div>
                  <input type="radio" name="payment-method" />
                  <span>EMI</span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Use this payment method
              </button>
            </div>
          </div>

          <div className="bg-[#638759] rounded-lg shadow-lg p-4 w-full flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">
              3. Items and Delivery
            </h3>
            <div className="bg-white rounded-lg p-4"></div>
            <div className="flex items-center gap-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Place your order
              </button>
              <p className="text-lg font-semibold text-white">Order Total :</p>
            </div>
          </div>
        </div>
        <div className="w-2/6 h-96 p-4 grid grid-rows-6 items-center bg-[#638759] m-3 rounded text-white font-semibold">
          <h3 className="font-blod text-2xl justify-center flex font-bold">
            Order Summary
          </h3>
          <p>items:</p>
          <p>Delivery:</p>
          <p>Total:</p>
          <p>Promotion Applied:</p>
          <p className="border-y py-2 border-white text-xl">Order Total :</p>
        </div>
      </div>
    </div>
  );
}
