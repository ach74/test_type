import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public identificado : boolean | undefined;

  constructor() {
    this.identificado = false;
  }

  ngOnInit(): void {
  }

  setIdentificadp(){
    this.identificado = true;
  }
  unsetIdentificadp(){
    this.identificado = false;
  }
}
