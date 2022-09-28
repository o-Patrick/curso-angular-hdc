import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {
  name: string = "Matheus";
  age: number = 30;
  job: string = "Programador";
  counter = [1, 2, 3];
  // counter: object = [1, 2, 3]; também funciona, mas não é possível acessar cada número por índice (ver como funcionam vetores em ts)
  car = {
    name: 'Polo',
    year: 2019,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
