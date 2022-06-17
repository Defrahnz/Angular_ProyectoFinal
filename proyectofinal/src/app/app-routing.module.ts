import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeModule } from 'ng-qrcode';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    QrCodeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
