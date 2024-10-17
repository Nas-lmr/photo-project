import { Router } from "express";
import photos from "./photo.routes";
const router = Router();

router.use("/photos", photos);

export default router;
