import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-giga-card',
  templateUrl: './giga-card.component.html',
  styleUrls: ['./giga-card.component.css']
})
export class GigaCardComponent implements OnInit {

  goToLink(url: string){
    window.open(url, "_blank");
}
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
  Id:string="";

  constructor() { }

  ngOnInit(): void {
  }



}
