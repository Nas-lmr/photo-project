import { Request, Response } from "express";
import photosData from "../../src/data.json";

export const getPhotos = (req: Request, res: Response) => {
  res.json(photosData);
};

export const getPhotoById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  const photo = photosData.photos.find((p: { id: number }) => p.id === id);

  if (photo) {
    res.json(photo);
  } else {
    res.status(404).json({ message: "Photo non trouvée" });
  }
};
