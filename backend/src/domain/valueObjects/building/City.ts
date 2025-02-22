import { Tile } from '../tile/Tile';
import { Building } from './Building';

export class City extends Building {
  private static readonly POINT: number = 2;

  constructor(
    protected tile: Tile,
    protected vertexNumber: number
  ) {
    super(tile, vertexNumber, City.POINT);
  }
}
