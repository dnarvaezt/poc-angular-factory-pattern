import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';

@NgModule({
  declarations: [InvoiceComponent],
  imports: [CommonModule, InvoiceRoutingModule],
})
export class InvoiceModule {}
