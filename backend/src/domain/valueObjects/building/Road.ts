import { Tile } from '../tile/Tile';

export class Road {
  constructor(
    private tile: Tile,
    private edgeNumber: number
  ) {}
}
