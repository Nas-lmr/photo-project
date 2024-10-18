// backend/routes/photo.routes.ts
import { Router } from "express";
import { getPhotoById, getPhotos } from "../controllers/PhotoController";

const router = Router();

router.get("/", getPhotos);

router.get("/:id", getPhotoById);

export default router;
