import { Router } from "express";
import { getDogs, postLike } from "../controllers/dogs_controller";

const router = Router();

router.get("/", getDogs);         // GET /api/dogs – все собаки
router.post("/:id/like", postLike); // POST /api/dogs/:id/like – лайк

export default router;
