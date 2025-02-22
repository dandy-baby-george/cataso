import { Tile } from '../tile/Tile';

export abstract class Building {
  constructor(
    protected tile: Tile,
    protected vertexNumber: number,
    protected point: number
  ) {
    if (
      vertexNumber < 0 ||
      vertexNumber > 5 ||
      !Number.isInteger(vertexNumber)
    ) {
      throw new Error(
        `Invalid vertex number: ${vertexNumber}. Must be an integer between 0 and 5.`
      );
    }

    if (point !== 1 && point !== 2) {
      throw new Error(`Invalid point value: ${point}. Must be 1 or 2.`);
    }
  }

  public getPoint(): number {
    return this.point;
  }

  public getTile(): Tile {
    return this.tile;
  }

  public getVertexNumber(): number {
    return this.vertexNumber;
  }
}
