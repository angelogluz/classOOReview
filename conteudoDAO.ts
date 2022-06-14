import Conteudo from "./conteudo";

export default interface ConteudoDAO {
  // CRUD operations
  salvar(conteudo: Conteudo): Conteudo;
  deletar(conteudo: Conteudo): number;
  atualizar(conteudo: Conteudo): Conteudo;
  listar(): Conteudo[];
  buscarPorID(id: string): Conteudo;
}
