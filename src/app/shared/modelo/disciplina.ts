export class Disciplina{

  constructor(private _nome: string, private _professor: string, private _alunos: Array<string>) {
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get professor(): string {
    return this._professor;
  }

  set professor(value: string) {
    this._professor = value;
  }

  get alunos(): Array<string> {
    return this._alunos;
  }

  set alunos(value: Array<string>) {
    this._alunos = value;
  }

}
