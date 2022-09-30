import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emissor',
  templateUrl: './emissor.component.html',
  styleUrls: ['./emissor.component.css']
})
export class EmissorComponent implements OnInit {
  meuNumero: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onMudaNumero() {
    this.meuNumero = Math.floor(Math.random() * 10);
  }

}
