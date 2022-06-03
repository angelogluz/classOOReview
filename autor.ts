import Categoria from "./categoria";

export default abstract class Autor {
  constructor(
    private _nome: string,
    private _dataDeNascimento: Date,
    private _categorias?: Categoria[]
  ) {}
  public nada(): void {}
}
