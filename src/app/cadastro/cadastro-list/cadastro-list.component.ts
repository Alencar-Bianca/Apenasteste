import { CadastroService } from './../shared/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../shared/cadastro';

@Component({
  selector: 'app-cadastro-list',
  templateUrl: './cadastro-list.component.html',
  styleUrls: ['./cadastro-list.component.css']
})
export class CadastroListComponent implements OnInit {
item: Cadastro [] = []
  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.item = this.cadastroService.getAll();
  }

}
