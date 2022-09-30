import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dados-pai',
  templateUrl: './dados-pai.component.html',
  styleUrls: ['./dados-pai.component.css']
})
export class DadosPaiComponent implements OnInit {
  @Input() userName: string = "";
  @Input() userData!: {email: string, role: string};

  constructor() { }

  ngOnInit(): void {
  }

}
