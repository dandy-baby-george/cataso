import { TileType } from './TileType';

export class Tile {
  private type: TileType;

  constructor(type: TileType) {
    this.type = type;
  }

  public getType(): TileType {
    return this.type;
  }
}
