import { Tile } from '../tile/Tile';
import { Building } from './Building';

export class Settlement extends Building {
  private static readonly POINT: number = 1;

  constructor(
    protected tile: Tile,
    protected vertexNumber: number
  ) {
    super(tile, vertexNumber, Settlement.POINT);
  }
}
