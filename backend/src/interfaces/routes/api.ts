import { Router } from "express";
import { DiceController } from "../controllers/DiceController";

const router = Router();

router.post("/roll-dice", DiceController.rollDice);

export default router;
