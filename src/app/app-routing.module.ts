import { CadastroListComponent } from './cadastro/cadastro-list/cadastro-list.component';
import { CadastroFormComponent } from './cadastro/cadastro-form/cadastro-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './cadastro/home/home.component';

const routes: Routes = [
  {path: '',component: CadastroListComponent},
  {path: 'new',component: CadastroFormComponent},
  {path: 'edit/:id',component: CadastroFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
