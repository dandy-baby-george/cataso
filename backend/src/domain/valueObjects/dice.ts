class Dice {
    private static readonly VALID_SIDES = [1, 2, 3, 4, 5, 6];
    private currentSide: number | null;

    constructor() {
        this.currentSide = null;
    }

    roll(): number {
        this.currentSide = Math.floor(Math.random() * Dice.VALID_SIDES.length) + 1;

        if (!Dice.VALID_SIDES.includes(this.currentSide)) {
            throw new Error(`Invalid dice number: ${this.currentSide}`);
        }

        return this.currentSide;
    }
}
