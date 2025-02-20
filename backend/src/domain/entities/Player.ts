import { Resource } from 'domain/valueObjects/resouce/Resource';

export class Player {
  private constructor(
    private id: number,
    private name: string,
    private resources: Resource[],
    private point: number
    // 開拓地、街道、都市,
    // 発展カード,
    // 特別カード,
    // 港,
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
    return new Player(id, name, [], 0);
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }
}
