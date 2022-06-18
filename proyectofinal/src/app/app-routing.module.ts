import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeModule } from 'ng-qrcode';
import { FaqsComponent } from './complement/faqs/faqs.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'ayuda', component: AyudaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'faqs', component: FaqsComponent},
  {path:'/',redirectTo:'/home',pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    QrCodeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
