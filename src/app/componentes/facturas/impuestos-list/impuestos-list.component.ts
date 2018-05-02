import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

import { FacturaService } from '../../../servicios/facturas/factura.service';

// Model
import { Factura } from '../../../models/factura';
@Component({
  selector: 'app-impuestos-list',
  templateUrl: './impuestos-list.component.html',
  styleUrls: ['./impuestos-list.component.scss']
})
export class ImpuestosListComponent implements OnInit {

  facturaList: Factura[];
  totaliva: number = 0;

  fechafactura: string;

  constructor(private facturaService : FacturaService, private router: Router) {
  }

  ngOnInit() {

  }

  onQuery(){
    this.totaliva=0;
    this.facturaList = null;

    return this.facturaService.getListFacturaDate(this.fechafactura).snapshotChanges().subscribe(factura => {
        this.facturaList = [];
        factura.forEach(element => {
          let fac = element.payload.toJSON();
          fac["$id"] = element.key;
          this.facturaList.push(fac as Factura);

          this.totaliva += fac["iva"];

        });

      });

  }


  onFacturas(){
    this.router.navigate(['/factura']);
  }

}
