import {Router} from 'express'
import { getPlaceById, getPlaceByUserId } from '../controllers/places'

const router = Router()
router.get("/:placeId", getPlaceById);
router.get("/user/:userId", getPlaceByUserId);


modules.exports = router