import Autor from "./autor";
import Categoria from "./categoria";
import ConteudoDAO from "./conteudoDAO";
import Tag from "./tag";

export default class Conteudo implements ConteudoDAO {
  constructor(
    private _titulo: string,
    private _texto: string,
    private _categoria: Categoria,
    private _ativo: boolean = true,
    private _autor?: Autor | undefined,
    private _tags?: Tag[]
  ) {}
  salvar(conteudo: Conteudo): Conteudo {
    // Tantão de código
    return conteudo;
  }
  deletar(conteudo: Conteudo): number {
    throw new Error("Method not implemented.");
  }
  atualizar(conteudo: Conteudo): Conteudo {
    throw new Error("Method not implemented.");
  }
  listar(): Conteudo[] {
    throw new Error("Method not implemented.");
  }
  buscarPorID(id: string): Conteudo {
    throw new Error("Method not implemented.");
  }

  public set autor(a: Autor | undefined) {
    this._autor = a;
  }

  public get autor(): undefined | Autor {
    return this._autor;
  }

  public set titulo(titulo: string) {
    this.validaNumeroDeCaracteres(3, titulo);
    this._titulo = titulo;
  }

  public get titulo(): string {
    return this._titulo;
  }

  private validaNumeroDeCaracteres(
    numeroDeCaracteresValidos: number,
    palavraTestada: string
  ) {
    if (palavraTestada.length < numeroDeCaracteresValidos) {
      throw new Error("Número de caracteres inválido!");
    }
  }
}
