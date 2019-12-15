export class Gestor {

    id: string;
    nome: string;
    matricula: string;
    dataDeNascimento: string;
    setor: string;
  
    constructor(id: string, nome: string, matricula: string, dataDeNascimento: string, setor: string) {
      this.id = id;
      this.nome = nome;
      this.matricula = matricula;
      this.dataDeNascimento = dataDeNascimento;
      this.setor = setor;
    }
  }