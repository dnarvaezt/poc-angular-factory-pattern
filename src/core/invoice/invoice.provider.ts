import { AppService } from 'src/app/app.service';
import { OriginEnum } from '../../utils/enums/origin.enum';
import {
  CHLInvoiceManager,
  COLInvoiceManager,
  ECUInvoiceManager,
  GeneralInvoiceManager,
  InvoiceManager,
  MEXInvoiceManager,
  URYInvoiceManager
} from './invoice.manager';
import { InvoiceRepository, SiigoInvoiceRepository } from './invoice.repository';

export const invoiceProviders = [
  {
    provide: InvoiceManager,
    useFactory: (
      invoiceRepository: InvoiceRepository,
      appService: AppService
    ) => {
      switch (appService.currentOrigin) {
        case OriginEnum.MEX:
          return new MEXInvoiceManager(invoiceRepository);
        case OriginEnum.CHL:
          return new CHLInvoiceManager(invoiceRepository);
        case OriginEnum.ECU:
          return new ECUInvoiceManager(invoiceRepository);
        case OriginEnum.URY:
          return new URYInvoiceManager(invoiceRepository);
        case OriginEnum.COL:
          return new COLInvoiceManager(invoiceRepository);
        default:
          return new GeneralInvoiceManager(invoiceRepository);
      }
    },
    deps: [InvoiceRepository, AppService],
  },
  {
    provide: InvoiceRepository,
    useFactory: () => new SiigoInvoiceRepository(),
    deps: [],
  },
];
