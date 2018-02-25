import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

import { Barang } from '../../services/barang/barang.model';
import { BarangService } from '../../services/barang/barang.service';
import { AlertService } from '../../services/alert/alert.service';

declare var AdminLTE: any;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  private barang: Barang;

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(private barangService: BarangService, private alertsService: AlertService,
    private router: Router) { }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }

  addMasterBarang() {
    this.barangService.addBarang(this.barang).subscribe(() => {
      console.log("berhasil");
    });
  }

  // addMasterBarang(barang: Barang) {
  //   this.barangService.addBarang(barang).subscribe(() => {
  //     this.alertsService.addAlert({
  //       type: 'success',
  //       message: 'berhasil ditambahkan'
  //     });

  //     this.router.navigate(['single']);
  //   });
  // }

}
