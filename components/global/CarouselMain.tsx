"use client";

import { useState } from "react";
import CarouselCard from "../cards/CarouselCard";

const info = [
  {
    image: "/images/fennec.jpg",
    title: "Fennec",
    description: "Un magnifique fennec se reposant",
  },
  {
    image: "/images/tigre.jpg",
    title: "Tigre",
    description: "Un magnifique tigre s'abreuvant",
  },
  {
    image: "/images/lion.jpg",
    title: "Lion",
    description: "Un magnifique lion cherchant sa proie",
  },
];

export default function CarouselMain() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // Pour gérer la direction

  const nextSlide = () => {
    setDirection("next"); // Définir la direction à 'next'
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === info.length - 1 ? 0 : prevIndex + 1
      );
      setDirection(""); // Réinitialiser la direction après changement d'index
    }, 300); // Temps d'attente avant de changer la carte
  };

  const prevSlide = () => {
    setDirection("prev"); // Définir la direction à 'prev'
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? info.length - 1 : prevIndex - 1
      );
      setDirection(""); // Réinitialiser la direction après changement d'index
    }, 300); // Temps d'attente avant de changer la carte
  };

  return (
    <>
      <h3 className="text-xl lg:text-3xl px-4  lg:p-8 font-semibold">
        Instants capturés !
      </h3>
      <div className="md:hidden relative h-80 flex flex-col items-center justify-around">
        <div
          className={`absolute transition-transform duration-300 ease-in-out ${
            direction === "next"
              ? "translate-x-[150%]"
              : direction === "prev"
              ? "-translate-x-[150%]"
              : "translate-x-0"
          }`}
        >
          <CarouselCard
            id={currentIndex + 1}
            image={info[currentIndex].image}
            title={info[currentIndex].title}
            description={info[currentIndex].description}
          />
        </div>

        <div className="flex justify-between w-full ">
          <button
            className="absolute top-1/2 left-3 sm:left-32 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-3 sm:right-32 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
      </div>
      <div className="hidden w-full h-96 md:flex flex-col items-center md:flex-row md:flex-wrap md:justify-center  p-4 gap-4 md:gap-6">
        {info.map((infos, index) => (
          <CarouselCard
            key={index}
            id={index + 1}
            image={infos.image}
            title={infos.title}
          />
        ))}
      </div>
    </>
  );
}
