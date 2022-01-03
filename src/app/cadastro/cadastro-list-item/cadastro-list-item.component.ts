import { Component, Input, OnInit } from '@angular/core';
import { Cadastro } from '../shared/cadastro';
import { CadastroService } from '../shared/cadastro.service';

@Component({
  selector: 'app-cadastro-list-item',
  templateUrl: './cadastro-list-item.component.html',
  styleUrls: ['./cadastro-list-item.component.css']
})
export class CadastroListItemComponent implements OnInit {

@Input()
itens!: Cadastro;
  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  ChangeCadastro(item: Cadastro){
    this.cadastroService.save(item)
  }

  remover(item: Cadastro){
    this.cadastroService.delete(item.id);
  }

}
