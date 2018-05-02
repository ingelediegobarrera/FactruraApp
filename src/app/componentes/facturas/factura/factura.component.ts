import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router } from '@angular/router';

import { FacturaService } from '../../../servicios/facturas/factura.service'

// Model
import { Factura } from '../../../models/factura';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  constructor(private facturaService: FacturaService,
              private router: Router
  ) { }

  ngOnInit() {
    this.facturaService.getList();
  }

//Metodo para manejo del envio de datos
  onSubmit(facturaForm: NgForm){
    this.facturaService.create(facturaForm.value);
    this.resetForm(facturaForm);
    this.router.navigate(['/factura']);

  }

  //Reinicia el Form y el temporal del servicio.
  resetForm(facturaForm: NgForm){
    if(facturaForm != null){
      facturaForm.reset();
      this.facturaService.facturaTem = new Factura();
    }
  }

}
