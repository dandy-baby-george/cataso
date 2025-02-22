import { SpecialType } from './SpecialType';

export class Special {
  constructor(
    private type: SpecialType,
    private point: number
  ) {}

  public getType(): SpecialType {
    return this.type;
  }

  public getPoint(): number {
    return this.point;
  }
}
