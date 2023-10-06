import { Component } from '@angular/core';
import {Disciplina} from "../../shared/modelo/disciplina";
import {DISCIPLINAS} from "../../shared/modelo/DISCIPLINAS";
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../shared/modelo/usuario";

@Component({
  selector: 'app-mantem-disciplina',
  templateUrl: './mantem-disciplina.component.html',
  styleUrls: ['./mantem-disciplina.component.css']
})
export class MantemDisciplinaComponent {

  manutencaoDisciplina: Disciplina;
  estahCadastrada = true;
  nomeBotaoManutencao = 'Cadastrar';

  disciplinas = DISCIPLINAS;

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.manutencaoDisciplina = new Disciplina('', '',[]);
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('nome');
    if (idParaEdicao) {
      // editando
      const disciplinaEncontrada = this.disciplinas.find(
        disciplina => disciplina.nome === idParaEdicao);
      if (disciplinaEncontrada) {
        this.estahCadastrada = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.manutencaoDisciplina = disciplinaEncontrada;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastrada && this.manutencaoDisciplina) {
      this.disciplinas.push(this.manutencaoDisciplina);
    }
    this.disciplinas = new Array<Disciplina>;
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemdisciplina']);
  }
}
