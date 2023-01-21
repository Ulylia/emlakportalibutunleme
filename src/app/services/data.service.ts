import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emlak } from '../models/Emlak';
import { Kategori } from '../models/Kategori';
import { Uye } from '../models/Uye';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public aktifUye: Uye = new Uye();
  public apiUrl = "http://localhost:3000/";
  public uyeler: Uye[] = [

  ]

  constructor(public http: HttpClient) { }

  AktifUyeBilgi() {
    if (localStorage.getItem("adsoyad")) {
      this.aktifUye.adsoyad = localStorage.getItem("adsoyad") || "";
      var admin = localStorage.getItem("admin") || "0";
      this.aktifUye.admin = parseInt(admin);
    }
  }
  KategoriListele() {
    return this.http.get<Kategori[]>(this.apiUrl + "categories");
  }
  KategoriById(katId: number) {
    return this.http.get<Kategori>(this.apiUrl + "categories/" + katId);
  }
  KategoriEkle(kat: Kategori) {
    return this.http.post(this.apiUrl + "categories/", kat);
  }
  KategoriDuzenle(kat: Kategori) {
    return this.http.put(this.apiUrl + "categories/" + kat.katId, kat);
  }
  KategoriSil(katId: number) {
    return this.http.delete(this.apiUrl + "categories/" + katId);
  }


  EmlakListele() {
    return this.http.get<Emlak[]>(this.apiUrl + "houses");
  }
  EmlakListeleByKatId(katId: number) {
    return this.http.get<Emlak[]>(this.apiUrl + "categories/" + katId + "/houses");
  }
  EmlakById(id: number) {
    return this.http.get<Emlak>(this.apiUrl + "houses/" + id);
  }
  EmlakEkle(emlak: Emlak) {
    return this.http.post(this.apiUrl + "houses/", emlak);
  }
  EmlakDuzenle(emlak: Emlak) {
    return this.http.put(this.apiUrl + "houses/" + emlak.emlakid, emlak);
  }
  EmlakSil(id: string) {
    return this.http.delete(this.apiUrl + "houses/" + id);
  }
  /* emlak servis bitiş*/
}
