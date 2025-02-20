import { TileType } from './TileType';

export class Tile {
  private row: number;
  private column: number;

  constructor(
    row: number,
    column: number,
    private type: TileType,
    private number: number
  ) {
    Tile.validateCoordinates(row, column);

    this.row = row;
    this.column = column;
  }

  getRow(): number {
    return this.row;
  }

  getColumn(): number {
    return this.column;
  }

  public getType(): TileType {
    return this.type;
  }

  public getNumber(): number {
    return this.number;
  }

  private static validateCoordinates(row: number, column: number): void {
    if (row < 0 || column < 0) {
      throw new Error(
        `Error: row=${row}, column=${column} must be positive integers.`
      );
    }

    if ((row === 0 || row === 4) && column > 3) {
      throw new Error(
        `Error: column=${column} exceeds the maximum allowed value of 3 for row ${row}.`
      );
    }

    if ((row === 1 || row === 3) && column > 4) {
      throw new Error(
        `Error: column=${column} exceeds the maximum allowed value of 4 for row ${row}.`
      );
    }

    if (row === 2 && column > 5) {
      throw new Error(
        `Error: column=${column} exceeds the maximum allowed value of 4 for row ${row}.`
      );
    }
  }
}
