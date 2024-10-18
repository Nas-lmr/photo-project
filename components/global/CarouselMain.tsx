"use client";

import { IPhoto } from "@/interfaces/common/IPhoto";
import { useEffect, useState } from "react";
import { fetchPhotos } from "../../services/photoService";
import CarouselCard from "../cards/CarouselCard";

export default function CarouselMain() {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const allPhotos = await fetchPhotos();
        const randomPhotos = getRandomPhotos(allPhotos, 3);
        setPhotos(randomPhotos);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Une erreur inconnue est survenue.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, []);

  const getRandomPhotos = (photosArray: IPhoto[], count: number) => {
    const shuffled = [...photosArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const nextSlide = () => {
    setDirection("next");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
      setDirection("");
    }, 300);
  };

  const prevSlide = () => {
    setDirection("prev");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? photos.length - 1 : prevIndex - 1
      );
      setDirection("");
    }, 300);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  return (
    <>
      <h3 className=" text-grayDark text-xl md:text-2xl lg:text-3xl px-4 lg:p-8 font-semibold">
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
            id={photos[currentIndex]?.id}
            image={photos[currentIndex]?.url}
            title={photos[currentIndex]?.title}
            description={photos[currentIndex]?.description}
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
      <div className="hidden w-full h-96 md:flex flex-col items-center md:flex-row md:flex-wrap md:justify-center p-4 gap-4 md:gap-6">
        {photos.map((photo) => (
          <CarouselCard
            key={photo.id}
            id={photo.id}
            image={photo.url}
            title={photo.title}
            description={photo.description}
          />
        ))}
      </div>
    </>
  );
}
