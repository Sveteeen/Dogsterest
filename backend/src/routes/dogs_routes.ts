import { Router } from "express";
import { getDogs, postLike, deleteLike } from "../controllers/dogs_controller";

const router = Router();

router.get("/", getDogs); // GET /api/dogs – все собаки
router.post("/:id/like", postLike); // POST /api/dogs/:id/like – лайк
router.delete("/:id/like", deleteLike); // DELETE /api/dogs/:id/like – удалить лайк

export default router;
