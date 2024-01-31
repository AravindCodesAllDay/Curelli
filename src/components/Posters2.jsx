import React from "react";
import img1 from "../assets/f1.jpg";

export default function Posters2() {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="bg-green-700 lg:w-1/2 w-full flex flex-col p-8">
        <h2 className="text-3xl font-bold mb-4 text-white">GET TO KNOW US</h2>
        <p className="text-white mb-4">
          We believe in preserving the rich heritage of forgotten herbs while
          embracing the modern needs of health-conscious individuals. We are
          passionate about reviving traditional wisdom and bringing it to your
          table in the form of highly medicinal Vathals. Our range includes the
          rarest of herbs such as Pirandai, Sangupushpam, Avarampoo, and more,
          meticulously crafted into delectable Vathals that not only tantalize
          your taste buds but also nurture your well-being.
        </p>
        <button className="bg-white text-green-700 py-2 px-4 rounded-md">
          More
        </button>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col">
        <div className="lg:flex lg:flex-row w-full">
          <div className="lg:w-1/2 w-full flex flex-col">
            <img className="w-full h-auto" src={img1} alt="flowers" />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col">
            <img className="w-full h-auto" src={img1} alt="flowers" />
          </div>
        </div>
        <div className="lg:flex lg:flex-row w-full">
          <img className="w-full h-auto" src={img1} alt="flowers" />
        </div>
      </div>
    </div>
  );
}
