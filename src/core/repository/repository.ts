export abstract class Repository {
  abstract get(id: string): Promise<any>;

  abstract set(item: any): Promise<any>;

  abstract delete(id: string): Promise<any>;
}
