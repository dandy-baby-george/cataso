export class DiceController {
    public roll(req: Request, res: Response): void {
        const dice = new Dice();

        const number = dice.roll();

        // レスポンス
        Response.json({ number: number });
    }
}
