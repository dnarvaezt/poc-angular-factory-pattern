import { OriginEnum } from 'src/utils/enums/origin.enum';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const invoice = () =>
  import('../modules/invoice/invoice.module').then((m) => m.InvoiceModule);

const routes: Routes = [
  { path: `${OriginEnum.General}`, loadChildren: invoice },
  { path: `${OriginEnum.COL}`, loadChildren: invoice },
  { path: `${OriginEnum.MEX}`, loadChildren: invoice },
  { path: `${OriginEnum.CHL}`, loadChildren: invoice },
  { path: `${OriginEnum.ECU}`, loadChildren: invoice },
  { path: `${OriginEnum.URY}`, loadChildren: invoice },
  {
    path: '',
    redirectTo: `${OriginEnum.General}`,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
