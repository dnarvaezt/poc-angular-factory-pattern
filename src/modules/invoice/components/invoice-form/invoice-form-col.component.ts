import { Component, OnInit } from '@angular/core';
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
  constructor() {
    super();
  }

  override ngOnInit(): void {
    this.currentOriginName = 'Colombia';
  }
}
