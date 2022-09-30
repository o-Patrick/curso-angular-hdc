import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-muda-numero',
  templateUrl: './muda-numero.component.html',
  styleUrls: ['./muda-numero.component.css']
})
export class MudaNumeroComponent implements OnInit {
  @Output() mudaNumero: EventEmitter<any> = new EventEmitter();
  // <any> não é boa prática em ts

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.mudaNumero.emit();
  }

}
