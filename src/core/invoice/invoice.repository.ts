import { Repository } from '../repository/repository';

export abstract class InvoiceRepository extends Repository {}

export class SiigoInvoiceRepository implements Repository {
  constructor() {}

  get(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }

  set(item: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
