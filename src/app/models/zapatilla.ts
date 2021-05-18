export class Zapatilla {

    /*
    public nombre: string;
    public precio: string;
    public marca:string;
    public color:string;
    public stock:boolean;

    constructor(nombre, precio, marca, color, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.color =color;
        this.marca = marca;
        this.stock = stock;
    }
    */

    constructor(
        public nombre: string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean,
    ) {

    }

}