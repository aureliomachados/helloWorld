import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-meu-primeiro-componente',
  templateUrl: './meu-primeiro-componente.component.html',
  styleUrls: ['./meu-primeiro-componente.component.css']
})
export class MeuPrimeiroComponenteComponent implements OnInit {

  title = "Meu primeiro Componente";

  constructor() {}

  ngOnInit() {
  }

}
