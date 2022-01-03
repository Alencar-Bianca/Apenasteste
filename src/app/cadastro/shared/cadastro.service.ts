import { Injectable } from '@angular/core';
import { Cadastro } from './cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }
  itens: Cadastro[] =[
    {id: 1, nome: 'Desktop',tipo: 'Eletronico',valor:5000},
    {id: 2, nome: 'PC',tipo: 'Eletronico',valor:5000}
  ]


  getAll(){
    this.itens = JSON.parse(localStorage.getItem('itens') || '{}');
    return this.itens;
  }

  getId(id: number){
    const item = this.itens.find((itemId) => itemId.id == id)
    return item
  }

  save(item: Cadastro){
    if(item.id){
      const i = this.getId(item.id)
      i!.nome = item.nome
      i!.tipo = item.tipo
      i!.valor = item.valor
    }else{
      let lastId = 1
      if(this.itens.length > 0){
        lastId = this.itens[this.itens.length - 1].id
      }
      item.id = 1
      this.itens.push(item)
    }
    const data = JSON.stringify(this.itens);
    localStorage.setItem('itens',data)

  }

  delete(id:number){
    const itemIdex = this.itens.findIndex((itemId) => itemId.id == id)
    this.itens.splice(itemIdex,1)
    const data = JSON.stringify(this.itens);
    localStorage.setItem('itens',data)
  }
}
