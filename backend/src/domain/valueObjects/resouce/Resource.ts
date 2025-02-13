import { ResourceType } from './ResourceType';

export class Resource {
  private type: ResourceType;

  constructor(type: ResourceType) {
    this.type = type;
  }

  public getType(): ResourceType {
    return this.type;
  }
}
