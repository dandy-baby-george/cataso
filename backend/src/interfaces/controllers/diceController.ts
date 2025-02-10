export class DiceController {
    public roll(): void {
        const dice = new Dice();

        const number = dice.roll();

        // レスポンス
        Response.json({ number: number });
    }
}
