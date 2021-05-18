import { Component, OnInit } from "@angular/core";
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({

  selector: "zapatillas",
  templateUrl: "./zapatillas.component.html",
  providers: [ZapatillaService]

})

export class ZapatillasComponent implements OnInit {

  public titulo: string;
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public mi_marca: string = '';

  constructor(
    private _zapatillaService: ZapatillaService
  ) {
    this.titulo = "Componenete de zapatillas";
    this.color = "blue";
    this.marcas = new Array;
    this.zapatillas = new Array;
  }

  ngOnInit() {
    this.zapatillas = this._zapatillaService.getZapatillas();
    //alert(this._zapatillaService.getTexto())
    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
      }
    });
    console.log(this.marcas);
  }

  getMarca() {
    alert(this.mi_marca);
  }

  addMarca() {
    this.marcas.push(this.mi_marca);
  }

  borrarMarca(indice:number){
    //delete this.marcas[indice];
    this.marcas.splice(indice, 1);
  }

  mostarTexto(){
    alert("Has escrito " + this.mi_marca);
  }

}
