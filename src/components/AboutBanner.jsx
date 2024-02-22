import React from "react";
import img from "../assets/AboutUs.jpg";
import img1 from "../assets/facebook.svg";
import img2 from "../assets/instagram.png";
import img3 from "../assets/x.svg";
import img4 from "../assets/linkedin.png";

export default function AboutBanner() {
  return (
    <div className="px-4 md:px-8 py-6 md:py-12 relative bg-white">
      <div className="flex flex-col items-center justify-center md:space-x-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-[#40773b] text-xl md:text-4xl tracking-wide leading-normal">
            A Mother's Legacy: From Family Favourite to Empowering Mission
          </h2>
          <p className="font-normal text-[#40773b] text-base md:text-lg tracking-normal leading-normal text-justify">
            Deep in the heart of Kanyakumari, a coastal town at the southernmost
            tip of India, a mother's love sparked a journey of tradition,
            empowerment, and wellbeing. In 1996, she crafted a unique vathal,
            bursting with flavor and health benefits, originally intended for
            her family's table. The taste, however, transcended its intended
            audience, captivating neighbors and relatives alike. This was the
            seed of Curelli Foods, a company founded by her son, carrying his
            mother's legacy forward.
          </p>
          <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center">
            <img
              className=" flex justify-center w-full max-h-96 md:w-auto h-auto rounded-md hover:scale-105 mb-6 md:mb-0 md:mr-8 max-w-md"
              alt="Pancakes"
              src={img}
            />
            <div className="flex flex-col items-center">
              <div className="text-[#40773b] text-base md:text-lg tracking-normal leading-normal text-justify p-4">
                <h3 className="font-bold text-xl md:text-4xl tracking-wide leading-normal text-center mb-2">
                  Women empowerment
                </h3>
                <p>
                  Curelli Foods is more than just a food products company; it's
                  a celebration of women's power. From cultivating crops to
                  processing and packaging, every step is guided by skilled
                  female hands. This embodies the founder's mother's dream - to
                  create a safe and supportive environment where women can
                  thrive.
                </p>
              </div>
              <div className="font-normal text-[#40773b] text-base md:text-lg tracking-normal leading-normal text-justify p-4">
                <h3 className="font-bold text-[#40773b] text-xl md:text-4xl tracking-wide leading-normal text-center mb-2">
                  Reviving forgotten traditions
                </h3>
                <p>
                  But the mission doesn't stop there. Curelli Foods fights to
                  preserve ancient wisdom, recognizing the fading knowledge of
                  traditional herbal remedies used by our ancestors. Many of
                  these ingredients are endangered, forgotten by younger
                  generations and neglected by farmers. To combat this, Curelli
                  Foods partners with farmers, helping them cultivate and
                  harvest these precious ingredients. Curelli Foods also offer
                  training programs, empowering farmers with the knowledge to
                  grow and market these valuable herbs, ensuring their
                  sustainability for future generations.
                </p>
              </div>
            </div>
          </div>
          <div className="font-normal text-[#40773b] text-base md:text-lg tracking-normal leading-normal text-justify">
            <p>
              The company's commitment extends to promoting healthy living. In
              today's world of processed foods, Curelli Foods offers a beacon of
              hope. Our organic vathals and other products are free from harmful
              chemicals and preservatives, providing a delicious and accessible
              option for health-conscious individuals on any budget. Curelli
              Foods, though young, is already making waves. Reviving forgotten
              traditions, empowering women, and offering healthy alternatives to
              a world often saturated with unhealthy choices.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <img className="w-6 h-6" alt="Facebook" src={img1} />
            <img className="w-6 h-6" alt="Instagram" src={img2} />
            <img className="w-6 h-6" alt="Twitter" src={img3} />
            <img className="w-6 h-6" alt="LinkedIn" src={img4} />
          </div>
        </div>
      </div>
    </div>
  );
}
