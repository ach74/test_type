import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;
  constructor() {
    this.zapatillas = [
      new Zapatilla('Nike AirMAX', 'Nike', 'Verdes', 40, true),
      new Zapatilla('Reebook Clasic', 'Reebook', 'Blancas', 80, true),
      new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 160, true),
      new Zapatilla('Adidas Yezzy', 'Adidas', 'Rojas', 180, false),
      new Zapatilla('Reebook Spartan', 'Reebook', 'Rojas', 80, false)
    ];
  }

  getTexto() {
    return "hola mundo desde el servicio";
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
