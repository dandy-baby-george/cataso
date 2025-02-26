import { HarborType } from './HarborType';

export class Resource {
  private type: HarborType;

  constructor(type: HarborType) {
    this.type = type;
  }

  public getType(): HarborType {
    return this.type;
  }
}
