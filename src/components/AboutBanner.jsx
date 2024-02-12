import React from "react";
import img from "../assets/AboutUs.jpg";
import img1 from "../assets/facebook.svg";
import img2 from "../assets/instagram.png";
import img3 from "../assets/x.svg";
import img4 from "../assets/linkedin.png";

export default function AboutBanner() {
  return (
    <div className="flex flex-col items-center px-8 md:px-16 py-12 relative bg-white">
      <div className="flex items-center gap-4 md:gap-12 relative">
        <img
          className="w-full md:w-[510px] h-auto rounded-md hover:scale-105"
          alt="Pancakes"
          src={img}
        />
        <div className="flex-col items-start gap-6">
          <p className="font-bold text-[#40773b] text-2xl md:text-4xl tracking-wide leading-normal">
            Reviving Tradition: A Modern Twist to Forgotten Organic Foods
          </p>
          <p className="font-normal text-[#40773b] text-base md:text-lg tracking-normal mt-8 leading-normal text-justify">
            A Mother's Legacy: From Family Favorite to Empowering Mission Deep
            in the heart of Kanyakumari, a coastal town at the southernmost tip
            of India, a mother's love sparked a journey of tradition,
            empowerment, and wellbeing. In 1996, she crafted a unique vathal,
            bursting with flavor and health benefits, originally intended for
            her family's table. The taste, however, transcended its intended
            audience, captivating neighbors and relatives alike. This was the
            seed of Curelli Foods, a company founded by her son, carrying his
            mother's legacy forward. Curelli Foods is more than just a food
            products company; it's a celebration of women's power. From
            cultivating crops to processing and packaging, every step is guided
            by skilled female hands. This embodies the founder's mother's dream
            - to create a safe and supportive environment where women can
            thrive. But the mission doesn't stop there. Curelli Foods fights to
            preserve ancient wisdom, recognizing the fading knowledge of
            traditional herbal remedies used by their ancestors. Many of these
            ingredients are endangered, forgotten by younger generations and
            neglected by farmers. To combat this, Curelli Foods partners with
            farmers, helping them cultivate and harvest these precious
            ingredients.
          </p>
        </div>
      </div>
      <p className="font-normal text-[#40773b] text-base md:text-lg tracking-normal leading-normal text-justify">
        They also offer training programs, empowering farmers with the knowledge
        to grow and market these valuable herbs, ensuring their sustainability
        for future generations. The company's commitment extends to promoting
        healthy living. In today's world of processed foods, Curelli Foods
        offers a beacon of hope. Their organic vathals and other products are
        free from harmful chemicals and preservatives, providing a delicious and
        accessible option for health-conscious individuals on any budget.
        Curelli Foods, though young, is already making waves. Reviving forgotten
        traditions, empowering women, and offering healthy alternatives to a
        world often saturated with unhealthy choices.
      </p>
      <div className="flex items-center gap-4">
        <img className="w-6 h-6" alt="Facebook" src={img1} />
        <img className="w-6 h-6" alt="Instagram" src={img2} />
        <img className="w-6 h-6" alt="Twitter" src={img3} />
        <img className="w-6 h-6" alt="LinkedIn" src={img4} />
      </div>
    </div>
  );
}
