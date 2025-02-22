import { DevelopmentType } from './DevelopmentType';

export class Development {
  private type: DevelopmentType;

  constructor(type: DevelopmentType) {
    this.type = type;
  }

  public getType(): DevelopmentType {
    return this.type;
  }
}
