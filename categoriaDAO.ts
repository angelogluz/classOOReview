import Categoria from "./categoria";
import Conteudo from "./conteudo";

export default interface CategoriaDAO {
  // CRUD operations
  salvar(categoria: Categoria): Categoria;
  deletar(categoria: Categoria): number;
  atualizar(categoria: Categoria): Categoria;
  listar(): Categoria[];
  buscarPorID(id: string): Categoria;
}
