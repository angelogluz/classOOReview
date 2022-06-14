import Categoria from "./categoria";
import Conteudo from "./conteudo";

// Generics
export default interface DAO {
  // CRUD operations
  salvar<T>(objeto: T): T;
  deletar<T>(objeto: T): number;
  atualizar<T>(objeto: T): T;
  listar<T>(): T[];
  buscarPorID<T>(id: string): T;
}
