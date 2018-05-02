import { Component, OnInit } from '@angular/core';


import { FacturaService } from '../../../servicios/facturas/factura.service';

// Model
import { Factura } from '../../../models/factura';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.scss']
})
export class FacturaListComponent implements OnInit {

  facturaList: Factura[];
  totaliva: number = 0;

  constructor(private facturaService : FacturaService) {
  }

  ngOnInit() {
    return this.facturaService.getList().snapshotChanges().subscribe(factura => {
        this.facturaList = [];
        factura.forEach(element => {
          let fac = element.payload.toJSON();
          fac["$id"] = element.key;
          this.facturaList.push(fac as Factura);

          this.totaliva += fac["iva"];

        });
        console.log(this.totaliva);
      });
  }

  //Edita la factura
  onEdit(factura: Factura){


  }

  //Elimina la factura
  onDelete($id: string){

  }

}
