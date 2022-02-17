import { Component, OnInit } from '@angular/core';
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
  constructor() {
    super();
  }

  override ngOnInit(): void {
    this.currentOriginName = 'Mexico';
  }
}
