import { AppService } from 'src/app/app.service';
import { OriginEnum } from 'src/utils/enums/origin.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-origin-manager',
  templateUrl: './origin-manager.component.html',
  styleUrls: ['./origin-manager.component.scss'],
})
export class OriginManagerComponent implements OnInit {
  public countryList: { name: string; code: number }[] = [
    { name: 'General', code: OriginEnum.General },
    { name: 'Colombia', code: OriginEnum.COL },
    { name: 'Mexico', code: OriginEnum.MEX },
    { name: 'Chile', code: OriginEnum.CHL },
    { name: 'Ecuador', code: OriginEnum.ECU },
    { name: 'Uruguay', code: OriginEnum.URY },
  ];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get currentOrigin() {
    return this.appService.currentOrigin;
  }

  onSetCurrentCountry(country: number) {
    this.appService.currentOrigin = country;
  }
}