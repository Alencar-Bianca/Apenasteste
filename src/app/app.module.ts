import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroListComponent } from './cadastro/cadastro-list/cadastro-list.component';
import { CadastroListItemComponent } from './cadastro/cadastro-list-item/cadastro-list-item.component';
import { CadastroFormComponent } from './cadastro/cadastro-form/cadastro-form.component';
import { HomeComponent } from './cadastro/home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CadastroListComponent,
    CadastroListItemComponent,
    CadastroFormComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
