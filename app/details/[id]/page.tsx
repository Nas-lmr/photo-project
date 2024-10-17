"use client";

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
          description:
            "Le fennec, ou Vulpes zerda, est un petit renard originaire des déserts du Sahara en Afrique du Nord. Reconnaissable à ses grandes oreilles qui peuvent mesurer jusqu'à 15 centimètres, le fennec utilise ces appendices pour réguler sa température corporelle et améliorer son ouïe, lui permettant ainsi de détecter des proies enfouies sous le sable. Ce carnivore nocturne se nourrit principalement d'insectes, de petits rongeurs et de fruits. Adapté à des conditions arides, le fennec possède un pelage beige clair qui lui offre un excellent camouflage dans son environnement désertique, tout en reflétant la chaleur. En tant qu'animal social, il vit souvent en groupes, se réfugiant dans des terriers pour se protéger des températures extrêmes du jour.",
          image: "/images/fennec.jpg",
        },
        2: {
          title: "Tigre",
          description:
            "Le tigre (Panthera tigris) est le plus grand félin du monde et un symbole puissant de la faune sauvage. Reconnaissable à sa fourrure rayée orange et noire, le tigre est un prédateur redoutable qui habite principalement les forêts, les savanes et les marais d'Asie. Il est connu pour sa force, sa furtivité et sa capacité à chasser des proies allant des cerfs aux sangliers. Les tigres sont des animaux solitaires, marquant leur territoire avec des griffures sur les arbres et des urines odorantes. Malheureusement, ces majestueux félins sont menacés par la perte de leur habitat, le braconnage et le commerce illégal, ce qui a conduit à un déclin dramatique de leur population. Des efforts de conservation sont en cours pour protéger cette espèce emblématique et son environnement naturel, soulignant l'importance de la biodiversité dans nos écosystèmes.",
          image: "/images/tigre.jpg",
        },
        3: {
          title: "Lion",
          description:
            "Le lion (Panthera leo), souvent appelé le “roi de la jungle”, est un grand félin majestueux qui vit principalement dans les savanes d'Afrique. Les mâles se distinguent par leur crinière imposante. Ces animaux sociaux vivent en groupes appelés “prides”, composés de femelles, de leurs petits et d'un ou plusieurs mâles. En tant que prédateurs de sommet, ils chassent des proies telles que les zèbres et les buffles. Malheureusement, les lions sont menacés par la perte d'habitat et le braconnage, entraînant un déclin de leur population. Des efforts de conservation sont en cours pour protéger ces animaux emblématiques et leur écosystème.",
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
    <div className=" h-full w-full p-4 flex flex-col items-center">
      <img
        src={cardDetails.image}
        alt={cardDetails.title}
        className="w-full h-3/4 rounded-lg"
      />
      <div className=" w-full flex flex-col items-start">
        <h1 className="text-2xl">{cardDetails.title}</h1>
        <p className="text-justify">{cardDetails.description}</p>
      </div>
    </div>
  );
}
