import { InvoiceManager } from 'src/core/invoice/invoice.manager';
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormComponent implements OnInit {
  public currentOriginName = 'General';

  constructor(
    public invoiceService: InvoiceService,
    private invoiceManager: InvoiceManager
  ) {}

  ngOnInit(): void {}

  async onSave() {
    await this.invoiceManager.set({});
  }
}
