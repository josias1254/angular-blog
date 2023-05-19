import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake  } from "../../data/dataFake";

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  imagem:string = "";
  titulo:string = "";
  descricao:string = "";
  link:string = "";

  private id:any= "";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }


  setValuesToComponent(id:string){
    const result = dataFake.filter(article => article.id ==  id
    )[0]

this.titulo = result.titulo
this.descricao = result.descricao
this.imagem = result.imagem
this.link = result.link



  }

}
