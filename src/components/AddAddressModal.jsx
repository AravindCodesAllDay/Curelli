import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function AddAddressModal({ setAddModal }) {
  const userId = localStorage.getItem("id");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPinCode] = useState();
  const [addressContact, setAddressContact] = useState();

  const addAddress = async (e) => {
    e.preventDefault();
    try {
      const addressRes = await fetch(
        `${import.meta.env.VITE_API}users/address/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            address,
            district,
            state,
            pincode,
            addressContact,
          }),
        }
      );

      if (addressRes.ok) {
        const data = await addressRes.json();
        setAddModal(false);
        toast.success(data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setTimeout(() => {
          window.location.reload();
        }, [5000]);
      }
    } catch (error) {
      console.error("Error during adding address", error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
        <div
          className="bg-white px-4 py-2 rounded shadow relative "
          onClick={(e) => e.stopPropagation()}
        >
          <form
            onSubmit={addAddress}
            className="gap-2 flex flex-col items-center"
          >
            <h3 className="text-3xl">Add Address</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-[2px] p-1 rounded"
              placeholder="Name"
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border-[2px] p-1 rounded"
              placeholder="Address"
            />
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="border-[2px] p-1 rounded"
              placeholder="District"
            />
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="border-[2px] p-1 rounded"
              placeholder="State"
            />
            <input
              type="number"
              value={pincode}
              onChange={(e) => setPinCode(e.target.value)}
              className="border-[2px] p-1 rounded"
              placeholder="Pincode"
            />
            <input
              type="number"
              value={addressContact}
              onChange={(e) => setAddressContact(e.target.value)}
              className="border-[2px] p-1 rounded"
              placeholder="Address Contact"
            />
            <div className="flex">
              <button
                onClick={() => setAddModal(false)}
                className="border-[2px] px-1 bg-blue-500 text-white rounded"
              >
                close
              </button>
              <button
                type="submit"
                className="border-[2px] px-1 bg-green-500 text-white rounded"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
