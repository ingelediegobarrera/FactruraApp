import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Factura } from '../../models/factura';

@Injectable()
export class FacturaService {

  facturasList: AngularFireList<any>;
  facturaTem: Factura = new Factura();

  constructor(private firebase: AngularFireDatabase) { }

  getList(){
    return this.facturasList = this.firebase.list('facturas');
  }

/*return this.facturasList = this.firebase.list('facturas', {
    query: {
        orderByChild: 'fechafactura',
        equalTo: this.fecha
    });
  }*/

  getListFacturaDate(fecha : string){
      return this.facturasList = this.firebase.list('facturas',
                        ref => ref.orderByChild('fechafactura').equalTo(fecha));
  }

  create(factura: Factura){

    //calvular iva
    let iva = factura.valor * 0.19;

    this.facturasList.push({
      id: new Date(),
      nameclient: factura.nameclient,
      valor: factura.valor,
      descripcion: factura.descripcion,
      fechafactura: factura.fechafactura,
      fechaemision: factura.fechaemision,
      iva: iva
    });
  }

  update(factura: Factura){
    this.facturasList.update(factura.$id,{
      nameclient: factura.nameclient,
      valor: factura.valor,
      descripcion: factura.descripcion,
      fechafactura: factura.fechafactura,
      fechaemision: factura.fechaemision,
      iva: factura.iva
    });
  }

  delete($id: string){
    this.facturasList.remove($id);
  }

}
