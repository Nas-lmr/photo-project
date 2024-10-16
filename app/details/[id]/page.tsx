"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Définition du type des données pour indiquer que les clés sont des nombres
type DataType = {
  [key: number]: { title: string; description: string; image: string };
};

export default function DetailPage() {
  const { id } = useParams<{ id: string }>(); // Récupération de l'ID de l'URL

  const [cardDetails, setCardDetails] = useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);

  // Simuler la récupération des données (peut être remplacé par un appel API)
  useEffect(() => {
    if (id) {
      // Convertir l'ID en nombre
      const numericId = parseInt(id, 10);

      // Exemple de récupération des détails par ID
      const data: DataType = {
        1: {
          title: "Fennec",
          description: "Un magnifique fennec se reposant",
          image: "/images/fennec.jpg",
        },
        2: {
          title: "Tigre",
          description: "Un magnifique tigre s'abreuvant",
          image: "/images/tigre.jpg",
        },
        3: {
          title: "Lion",
          description: "Un magnifique lion cherchant sa proie",
          image: "/images/lion.jpg",
        },
      };

      // Vérifier si l'ID existe dans l'objet data
      if (data[numericId]) {
        setCardDetails(data[numericId]);
      } else {
        setCardDetails(null); // Ou gérer le cas où l'ID n'existe pas
      }
    }
  }, [id]);

  if (!cardDetails) return <p>Chargement...</p>;

  return (
    <div className="p-4">
      <Image
        src={cardDetails.image}
        alt={cardDetails.title}
        width={200}
        height={200}
      />
      <h1 className="text-2xl font-bold">{cardDetails.title}</h1>
      <p>{cardDetails.description}</p>
    </div>
  );
}
