import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QrCodeModule } from 'ng-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduccionComponent } from './components/produccion/produccion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { HomeComponent } from './components/home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ProduccionComponent,
    ContactoComponent,
    AyudaComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QrCodeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
