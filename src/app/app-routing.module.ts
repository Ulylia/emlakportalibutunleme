import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { HomeComponent } from './components/Home/Home.component';
import { UyeComponent } from './components/uye/uye.component';
import { KategoriComponent } from './components/kategori/kategori.component';

import { GorevComponent } from './components/gorev/gorev.component';
import { EmlakComponent } from './components/emlak/emlak.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MesajComponent } from './components/mesaj/mesaj.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['']);
const routes: Routes = [
  {
    path: 'gorev',
    component: GorevComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: '',
    component: HomeComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'emlak',
    component: EmlakComponent,
    ...canActivate(redirectToLogin),
  },

  {
    path: 'Kategoriler',
    component: KategoriComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'profil',
    component: ProfileComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'mesaj',
    component: MesajComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'signup',
    component: SignupComponent,
    ...canActivate(redirectToHome),
  },
  {
    path: 'uye',
    component: UyeComponent,
    ...canActivate(redirectToLogin),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
