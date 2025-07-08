import { Router } from "express";
import { getDogs, postLike } from "../controllers/dogs_controller";

const router = Router();

router.get("/", getDogs);
router.post("/:id/like", postLike);

export default router;
