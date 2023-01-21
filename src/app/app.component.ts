
import { Uye } from './models/Uye';
import { Router } from '@angular/router';
import { FbservisService } from './services/fbservis.service';
import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';

const config={ 
  apiKey: 'AIzaSyAkAeSJOi4itIT24LF72XI075EMk_Hzcio',
  databaseUrl: 'https://emlakportal-fe1e3-default-rtdb.firebaseio.com'

};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  uye = this.fbServis.AktifUyeBilgi;
  message : any;

  constructor(
    
    public fbServis: FbservisService,
    public router: Router,
  ) {

  }
  ngOnInit (){
    
 }

  OturumKapat() {
    this.fbServis.OturumKapat().subscribe(() => {
      this.router.navigate(['login']);
    });
  }
}
