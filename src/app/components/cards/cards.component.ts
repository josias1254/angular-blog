import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

 @Input()
  imagem:string = '';
  @Input()
  data:string = '';
  @Input()
  titulo:string = '';
  @Input()
  descricao:string = '';
  @Input()
  link:string = '';
  @Input()
  tags:string[] = [];
  @Input()
  Id:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
