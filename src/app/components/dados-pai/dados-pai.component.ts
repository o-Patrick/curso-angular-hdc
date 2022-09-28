import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dados-pai',
  templateUrl: './dados-pai.component.html',
  styleUrls: ['./dados-pai.component.css']
})
export class DadosPaiComponent implements OnInit {
  @Input() userName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
