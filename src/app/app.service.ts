import { OriginEnum } from 'src/utils/enums/origin.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public currentOrigin: OriginEnum = OriginEnum.General;

  constructor() {}
}
