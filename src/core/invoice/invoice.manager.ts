import { InvoiceRepository } from './invoice.repository';

export abstract class InvoiceManager {
  abstract set(item: any): Promise<any>;
  abstract delete(id: string): Promise<any>;
}

export class GeneralInvoiceManager implements InvoiceManager {
  constructor(public invoiceRepository: InvoiceRepository) {}

  async set(item: any): Promise<any> {}
  async delete(string: any): Promise<any> {}
}

export class COLInvoiceManager
  extends GeneralInvoiceManager
  implements InvoiceManager {}

export class MEXInvoiceManager
  extends GeneralInvoiceManager
  implements InvoiceManager {}

export class CHLInvoiceManager
  extends GeneralInvoiceManager
  implements InvoiceManager {}

export class ECUInvoiceManager
  extends GeneralInvoiceManager
  implements InvoiceManager {}

export class URYInvoiceManager
  extends GeneralInvoiceManager
  implements InvoiceManager {}
