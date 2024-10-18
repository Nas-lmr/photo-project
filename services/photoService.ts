import { IPhoto } from "@/interfaces/common/IPhoto";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Récupération des photos depuis le back
export const fetchPhotos = async (): Promise<IPhoto[]> => {
  try {
    const response = await fetch(`${API_URL}/api/photos`);

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }

    const data = await response.json();

    return data.photos as IPhoto[];
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

//Recupere la photo en fonction de l'id
export const fetchPhotoById = async (id: number): Promise<IPhoto> => {
  try {
    const response = await fetch(`${API_URL}/api/photos/${id}`);

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }

    const data: IPhoto = await response.json();
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
