import Autor from "./autor";
import Conteudo from "./conteudo";

export default interface AutorDAO {
  // CRUD operations
  salvar(autor: Autor): Autor;
  deletar(autor: Autor): number;
  atualizar(autor: Autor): Autor;
  listar(): Autor[];
  buscarPorID(id: string): Autor;
}
