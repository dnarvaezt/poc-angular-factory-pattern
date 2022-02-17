import { InvoiceManager } from 'src/core/invoice/invoice.manager';
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../invoice.service';
import { InvoiceFormComponent } from './invoice-form.component';

@Component({
  selector: 'app-invoice-form-mex',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormMexComponent
  extends InvoiceFormComponent
  implements OnInit
{
  constructor(
    override invoiceService: InvoiceService,
    invoiceManager: InvoiceManager
  ) {
    super(invoiceService, invoiceManager);
  }

  override ngOnInit(): void {
    this.currentOriginName = 'Mexico';
  }
}
