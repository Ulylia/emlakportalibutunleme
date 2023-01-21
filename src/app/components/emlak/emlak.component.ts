import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { Emlak } from 'src/app/models/Emlak';
import { Kategori } from 'src/app/models/Kategori';
import { Sonuc } from 'src/app/models/Sonuc';
import { DataService } from 'src/app/services/data.service';
import { FbservisService } from 'src/app/services/fbservis.service';
import { MytoastService } from 'src/app/services/mytoast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-emlak',
  templateUrl: './emlak.component.html',
  styleUrls: ['./emlak.component.scss']
})
export class EmlakComponent implements OnInit {
  emlak: Emlak = new Emlak();
  emlaklar: Emlak[] = [];
  
  kategoriler!: Kategori[];
  modal!: bootstrap.Modal;
  modalBaslik: string = "";
  secEmlak!: Emlak;
  katId: number = 0;
  secKat: Kategori = new Kategori();
  sonuc: Sonuc = new Sonuc();
  frm: FormGroup = new FormGroup({
    emlakid: new FormControl(),
    emlakadi: new FormControl(),
    emlakfiyati: new FormControl(),
    emlakresmi: new FormControl(),
    categoryId: new FormControl(),
    kaytarih: new FormControl(),
    duztarih: new FormControl(),
  });

  constructor(
    private _http: HttpClient,

    public servis: DataService,
    public toast: MytoastService,
    public route: ActivatedRoute,
    public fbservis: FbservisService,
  ) { }

  ngOnInit() {

    this.route.params.subscribe((p: any) => {
      if (p.katId) {
        this.katId = p.katId;
        this.KategoriGetir();

      }
    });
    this.KategoriListele();
    this.EmlakListele();


  }

  KatSec(katId: number) {
    this.katId = katId;
    this.KategoriGetir();
  }
  KategoriListele() {
    this.servis.KategoriListele().subscribe(d => {
      this.kategoriler = d;
    });
  }
  KategoriGetir() {
    this.servis.KategoriById(this.katId).subscribe(d => {
      this.secKat = d;
      this.EmlakListele();
    });
  }

  Ekle(el: HTMLElement) {
    this.frm.reset();
    this.frm.patchValue({ admin: 0 });
    this.modal = new bootstrap.Modal(el);
    this.modalBaslik = "Emlak Ekle";
    this.modal.show();
  }
  Duzenle(emlak: Emlak, el: HTMLElement) {
    this.frm.patchValue(emlak);
    this.modalBaslik = "Emlak Düzenle";
    this.modal = new bootstrap.Modal(el);
    this.modal.show();
  }
  Sil(emlak: Emlak, el: HTMLElement) {
    this.secEmlak = emlak;
    this.modalBaslik = "Emlak Sil";
    this.modal = new bootstrap.Modal(el);
    this.modal.show();
  }

  EmlakListele() {
    this.servis.EmlakListeleByKatId(this.katId).subscribe(d => {
      this.emlaklar = d;
    });
  }
  EmlakEkleDuzenle() {
    var emlak: Emlak = this.frm.value
    var tarih = new Date();
    if (!emlak.emlakid) {
      var filtre = this.emlaklar.filter(s => s.emlakadi == emlak.emlakadi);
      if (filtre.length > 0) {
        this.sonuc.islem = false;
        this.sonuc.mesaj = "Girilen Emlak Adı Kayıtlıdır!";
        this.toast.ToastUygula(this.sonuc);
      } else {
        emlak.kaytarih = tarih.getTime().toString();
        emlak.duztarih = tarih.getTime().toString();
        this.servis.EmlakEkle(emlak).subscribe(d => {
          this.sonuc.islem = true;
          this.sonuc.mesaj = "Emlak Eklendi";
          this.toast.ToastUygula(this.sonuc);
          this.EmlakListele();
          this.modal.toggle();
        });
      }
    } else {
      emlak.duztarih = tarih.getTime().toString();
      this.servis.EmlakDuzenle(emlak).subscribe(d => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Emlak Düzenlendi";
        this.toast.ToastUygula(this.sonuc);
        this.EmlakListele();
        this.modal.toggle();
      });
    }

  }
  EmlakSil() {
    this.servis.EmlakSil(this.secEmlak.emlakid).subscribe(d => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Emlak Silindi";
      this.toast.ToastUygula(this.sonuc);
      this.EmlakListele();
      this.modal.toggle();
    });
  }

}
