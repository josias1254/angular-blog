import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giga-card',
  templateUrl: './giga-card.component.html',
  styleUrls: ['./giga-card.component.css']
})
export class GigaCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lista = ['javaScript','HTML','CSS']

  descricao = '';
}
