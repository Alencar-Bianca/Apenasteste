import { Cadastro } from './../shared/cadastro';
import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../shared/cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {
  item: Cadastro = new Cadastro();
  title: string = 'Nova Tarefa';
  constructor(private cadastroService: CadastroService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.item = this.cadastroService.getId(parseInt(id))!
      this.title = 'Alterando Tarefa'

  }
  }
  onSubmit(){
    this.cadastroService.save(this.item)
    this.router.navigate(['/']);
  }
}
