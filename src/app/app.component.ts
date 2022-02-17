import { OriginEnum } from 'src/utils/enums/origin.enum';
import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public countryList: { name: string; code: number }[] = [
    { name: 'General', code: OriginEnum.General },
    { name: 'Colombia', code: OriginEnum.COL },
    { name: 'Mexico', code: OriginEnum.MEX },
    { name: 'Chile', code: OriginEnum.CHL },
    { name: 'Ecuador', code: OriginEnum.ECU },
    { name: 'Uruguay', code: OriginEnum.URY },
  ];

  constructor(private appService: AppService) {}

  get currentOrigin() {
    return this.appService.currentOrigin;
  }

  onSetCurrentCountry(country: number) {
    this.appService.currentOrigin = country;
  }
}
