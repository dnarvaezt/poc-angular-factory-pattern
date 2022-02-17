import { InvoiceManager } from 'src/core/invoice/invoice.manager';
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../invoice.service';
import { InvoiceFormComponent } from './invoice-form.component';

@Component({
  selector: 'app-invoice-form-col',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormColComponent
  extends InvoiceFormComponent
  implements OnInit
{
  constructor(invoiceService: InvoiceService, invoiceManager: InvoiceManager) {
    super(invoiceService, invoiceManager);
  }

  override ngOnInit(): void {
    this.currentOriginName = 'Colombia';
  }

  override async onSave() {
    console.log('>>>>> onSave Función editada desde COL');
    await this.invoiceManager.set({});
  }
}
