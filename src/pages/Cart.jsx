import React from "react";
import Footer from "../components/Footer";
import img1 from "../assets/cart.svg";
import CartItems from "../components/CartItems";
import Placeholder from "../components/Placeholder";

export default function Cart() {
  return (
    <div className="bg-white">
      <Placeholder photo={img1} header={"Cart"} />

      <CartItems />

      <Footer />
    </div>
  );
}
