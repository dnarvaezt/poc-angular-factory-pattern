import { InvoiceRepository } from './invoice.repository';

export abstract class InvoiceInformer {
  abstract get(id: string): Promise<any>;
  abstract search(filter: any): Promise<any>;
}

export class GeneralInvoiceInformer implements InvoiceInformer {
  constructor(public invoiceRepository: InvoiceRepository) {}

  async get(id: string): Promise<any> {}
  async search(filter: any): Promise<any> {}
}

export class COLInvoiceInformer
  extends GeneralInvoiceInformer
  implements InvoiceInformer {}

export class MEXInvoiceInformer
  extends GeneralInvoiceInformer
  implements InvoiceInformer {}

export class CHLInvoiceInformer
  extends GeneralInvoiceInformer
  implements InvoiceInformer {}

export class ECUInvoiceInformer
  extends GeneralInvoiceInformer
  implements InvoiceInformer {}

export class URYInvoiceInformer
  extends GeneralInvoiceInformer
  implements InvoiceInformer {}
