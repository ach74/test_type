import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {


  public nombre: string | undefined;
  public follow: number | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit(): void {

    this._route.params.subscribe(( params: Params) => {

      this.nombre = params.nombre;
      this.follow = +params.follow;
      //this.nombre = params['nombre'];

      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home']);
      }
      console.log(typeof params.follow);
      console.log(this.nombre);
      console.log(this.follow);
    });
  }

  redirigir(){
    this._router.navigate(['/zapativillas']);
  }

}
