"use client";

import { IPhoto } from "@/interfaces/common/IPhoto";
import { fetchPhotoById } from "@/services/photoService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();

  const [cardDetails, setCardDetails] = useState<IPhoto | null>(null);

  useEffect(() => {
    const loadPhotoDetails = async () => {
      if (id) {
        try {
          const numericId = parseInt(id, 10);
          const photoDetails = await fetchPhotoById(numericId);
          setCardDetails(photoDetails);
        } catch (error) {
          console.error(
            "Erreur lors de la récupération des détails de la photo:",
            error
          );
        }
      }
    };

    loadPhotoDetails();
  }, [id]);

  if (!cardDetails) return <p>Chargement...</p>;

  return (
    <div className="h-full w-full pl-4 pr-4 pt-14 lg:pt-20 flex flex-col items-center">
      <div className="h-2/5 p-4 lg:h-3/5">
        <img
          src={cardDetails.url}
          alt={cardDetails.title}
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="w-full flex flex-col items-start justify-around lg:w-3/4">
        <h1 className="text-2xl font-semibold">{cardDetails.title}</h1>
        <p className="text-justify mt-3">{cardDetails.description}</p>
      </div>
    </div>
  );
}
