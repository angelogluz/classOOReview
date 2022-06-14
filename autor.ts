import Categoria from "./categoria";
import DAO from "./DAO";

export class Autor implements DAO {
  constructor(
    private _nome: string,
    private _dataDeNascimento: Date,
    private _categorias?: Categoria[]
  ) {}
  salvar<T>(objeto: T): T {
    // Montão de código
    return objeto;
  }
  deletar<T>(objeto: T): number {
    throw new Error("Method not implemented.");
  }
  atualizar<T>(objeto: T): T {
    throw new Error("Method not implemented.");
  }
  listar<T>(): T[] {
    throw new Error("Method not implemented.");
  }
  buscarPorID<T>(id: string): T {
    throw new Error("Method not implemented.");
  }
  public nada(): void {}
}
