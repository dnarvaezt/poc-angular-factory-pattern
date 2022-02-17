import { AppService } from 'src/app/app.service';
import { OriginEnum } from 'src/utils/enums/origin.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor(private appService: AppService) {}

  get currentOrigin(): OriginEnum {
    return this.appService.currentOrigin;
  }

  get originEnum() {
    return OriginEnum;
  }
}
