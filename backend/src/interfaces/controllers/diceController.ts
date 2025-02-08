import { Request, Response } from "express";

export class DiceController {
    public static rollDice(req: Request, res: Response): void {
        const dice = new Dice();

        const number = dice.roll();

        // レスポンス
        res.status(200).json({
            number
        });
    }
}
