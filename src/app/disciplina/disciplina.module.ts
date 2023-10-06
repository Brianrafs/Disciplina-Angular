import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantemDisciplinaComponent } from './mantem-disciplina/mantem-disciplina.component';
import { ListagemDisciplinaComponent } from './listagem-disciplina/listagem-disciplina.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {PipesModule} from "../pipes/pipes.module";
import {FlexModule} from "@angular/flex-layout";





@NgModule({
  exports:[
    MantemDisciplinaComponent,
    ListagemDisciplinaComponent,
  ],
  declarations: [
    MantemDisciplinaComponent,
    ListagemDisciplinaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    PipesModule,
    FlexModule,
    RouterModule
  ]
})
export class DisciplinaModule { }
