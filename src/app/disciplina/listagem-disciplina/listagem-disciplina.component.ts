import { Component } from '@angular/core';
import {DISCIPLINAS} from "../../shared/modelo/DISCIPLINAS";
import {Disciplina} from "../../shared/modelo/disciplina";

@Component({
  selector: 'app-listagem-disciplina',
  templateUrl: './listagem-disciplina.component.html',
  styleUrls: ['./listagem-disciplina.component.css']
})
export class ListagemDisciplinaComponent {

  disciplinas = DISCIPLINAS;


  excluir(disciplinaARemover: Disciplina): void {
    const indx = this.disciplinas.findIndex(disciplina =>
      disciplina.nome === disciplinaARemover.nome);

    this.disciplinas.splice(indx, 1);
  }

}
