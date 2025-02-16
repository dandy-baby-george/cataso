import { Request, Response } from 'express';
import { Dice } from '../../domain/valueObjects/dice/Dice';

export class DiceController {
  private static MAX_DICE_COUNT: number = 9;

  public roll(req: Request, res: Response): void {
    const quantityParam = req.query.quantity;

    if (
      typeof quantityParam !== 'string' ||
      !quantityParam ||
      !/^\d+$/.test(quantityParam) ||
      parseInt(quantityParam) < 1 ||
      parseInt(quantityParam) > DiceController.MAX_DICE_COUNT
    ) {
      res.status(400).json({
        error: `Invalid quantity parameter. Must be a number smaller than 10.${
          req.query.quantity ? ` value: ${req.query.quantity}` : ''
        }`,
      });

      return;
    }

    const quantity: number = parseInt(quantityParam);
    const dice = new Dice();
    let sum: number = 0;

    const numbers = Array.from({ length: quantity }, () => {
      const diceNumber = dice.roll();
      sum += diceNumber;

      return diceNumber;
    });

    res.json({ numbers, sum });
  }
}
