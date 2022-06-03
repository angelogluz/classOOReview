import Autor from "./autor";
import Categoria from "./categoria";
export default class AutorPJ extends Autor {
  public falarPF(): void {
    console.log("Eu sou PJ");
  }
  constructor(
    private _razaoSocial: string,
    private _cnpj: string,
    nome: string,
    dataDeAbertura: Date,
    categorias?: Categoria[]
  ) {
    super(nome, dataDeAbertura, categorias);
  }
}
