// PopularProducts.js
import React from "react";
import Card from "./Card";

export default function PopularProducts() {
  return (
    <div className="flex flex-row justify-center items-center">
      {cardDetails.map((details) => {
        return (
          <Card details={details}>
            <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded">
              {details.status}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
