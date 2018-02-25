import { Component, OnInit, OnDestroy } from '@angular/core';

import { Barang } from '../../services/barang/barang.model';
import { BarangService } from '../../services/barang/barang.service';

declare var AdminLTE: any;

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  private barangs: Barang[];

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(private barangService: BarangService) { }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');

    this.fetchBarang();
  }

  fetchBarang() {
    this.barangService.getAllBarang().subscribe((barangs: Barang[]) => {
      this.barangs = barangs;
    });
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }

}
