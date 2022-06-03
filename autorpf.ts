import Autor from "./autor";
import Categoria from "./categoria";
export default class AutorPF extends Autor {
  public falarPF(): void {
    console.log("Eu sou uma pessoa fisica");
  }
  constructor(
    private _apelido: string,
    private _cpf: string,
    nome: string,
    dataDeNascimento: Date,
    categorias?: Categoria[]
  ) {
    super(nome, dataDeNascimento, categorias);
  }
}
