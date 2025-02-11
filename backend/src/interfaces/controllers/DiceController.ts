import { Request, Response } from 'express';
import { Dice } from '../../domain/valueObjects/dice/Dice';

export class DiceController {
  public roll(req: Request, res: Response): void {
    const dice = new Dice();

    const number = dice.roll();

    // レスポンス
    res.json({ number: number });
  }
}
