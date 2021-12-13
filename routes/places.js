import { Router } from "express";

// Controllers
import {
  getPlaceById,
  getPlaceByUserId,
} from "../controllers/places.js";

const router = Router();

router.get("/:placeId", getPlaceById);

router.get("/user/:userId", getPlaceByUserId);

export default router;
