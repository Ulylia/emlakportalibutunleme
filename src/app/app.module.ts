

import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { HomeComponent } from './components/Home/Home.component';
import { RouterModule } from '@angular/router';
import { UyeComponent } from './components/uye/uye.component';
import { KategoriComponent } from './components/kategori/kategori.component';
import { HttpClientModule } from '@angular/common/http';

import { AsyncPipe } from '@angular/common';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { GorevComponent } from './components/gorev/gorev.component';
import { EmlakComponent } from './components/emlak/emlak.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MesajComponent } from './components/mesaj/mesaj.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    UyeComponent,
    KategoriComponent,
    GorevComponent,
    EmlakComponent,
    MesajComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HotToastModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    provideDatabase(() => getDatabase()),
    provideMessaging(() => getMessaging()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
   
  ],
  providers: [ AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
