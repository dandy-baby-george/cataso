import { City } from 'domain/valueObjects/building/City';
import { Road } from 'domain/valueObjects/building/Road';
import { Settlement } from 'domain/valueObjects/building/Settlement';
import { Development } from 'domain/valueObjects/development/Development';
import { Resource } from 'domain/valueObjects/resouce/Resource';
import { Special } from 'domain/valueObjects/special/Special';

export class Player {
  private constructor(
    private id: number,
    private name: string,
    private resources: Resource[],
    private point: number,
    private settlements: Settlement[],
    private cities: City[],
    private roads: Road[],
    private developments: Development[],
    private specials: Special[]
  ) {
    if (id !== null && (id < 1 || id > 99)) {
      throw new Error('ID must be a natural number (1-99).');
    }

    if (name.length > 20) {
      throw new Error('Name must be 20 characters or fewer.');
    }
  }

  /**
   * アカウントデータからから作成
   */
  createFromUser(id: number, name: string): Player {
    return new Player(id, name, [], 0, [], [], [], [], []);
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }
}
