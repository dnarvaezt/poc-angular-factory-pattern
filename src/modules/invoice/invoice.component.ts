import { OriginEnum } from 'src/utils/enums/origin.enum';
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  constructor(public invoiceService: InvoiceService) {}

  ngOnInit(): void {}
}
