import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit {

  constructor(  private router: Router) { }

  ngOnInit() {
  }

  onCrearFactura(){
      this.router.navigate(['/factura/add']);
  }

  onVerImpustos(){
      this.router.navigate(['/factura/impuestos']);
  }

}
