import { invoiceProviders } from 'src/core/invoice/invoice.provider';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { InvoiceFormColComponent } from './components/invoice-form/invoice-form-col.component';
import { InvoiceFormMexComponent } from './components/invoice-form/invoice-form-mex.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';

@NgModule({
  declarations: [
    InvoiceComponent,
    InvoiceFormComponent,
    InvoiceFormColComponent,
    InvoiceFormMexComponent,
  ],
  imports: [CommonModule, InvoiceRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [...invoiceProviders],
})
export class InvoiceModule {}
