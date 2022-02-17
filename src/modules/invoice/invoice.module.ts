import { OriginManagerComponent } from 'src/components/origin-manager/origin-manager.component';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';

@NgModule({
  declarations: [InvoiceComponent, OriginManagerComponent],
  imports: [CommonModule, InvoiceRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InvoiceModule {}
