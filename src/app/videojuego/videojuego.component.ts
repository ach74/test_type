import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: "videojuego",
    templateUrl: "./videojuego.component.html"
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

    public titulo: string;
    public listado: string;

    constructor(){

        this.titulo = "Componenetes de Videojuegos";
        this.listado = "Listado de los juegos mas populares";
        //console.log('Se ha cargado el componente');
    }

    //Se ejecuta cada ves que se ejecuta el componenete
    ngOnInit(){
        //console.log('Hola ngOnInit');
    }

    // Se ejecuta cuando se produce algun cambio en el componenete
    // Para actualizar datos 
    ngDoCheck(){
        //console.log('Ejecucion ngDoCheck');
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo";
    }
    // Se ejecuta antes de eliminar la intacia
    ngOnDestroy(){
        //console.log('Ejecucion ngOnDestroy');
    }

}