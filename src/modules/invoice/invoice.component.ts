import { AppService } from 'src/app/app.service';
import { OriginEnum } from 'src/utils/enums/origin.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  get currentOrigin() {
    return this.appService.currentOrigin;
  }

  get originEnum() {
    return OriginEnum;
  }
}
