"use client";

import { IPhoto } from "@/interfaces/common/IPhoto";
import { useEffect, useState } from "react";
import { fetchPhotos } from "../../services/photoService";
import Card from "../cards/Card";

export default function CardContainer() {
  const [info, setInfo] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPhotos = async () => {
      setLoading(true);
      try {
        const photos = await fetchPhotos();
        setInfo(photos);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  return (
    <div className="w-full lg:w-4/5 h-3/4 flex flex-col items-center md:flex-row md:flex-wrap md:justify-center p-4 gap-4">
      {info.map((infos) => (
        <Card
          key={infos.id}
          id={infos.id}
          image={infos.url}
          title={infos.title}
          description={infos.description}
        />
      ))}
    </div>
  );
}
