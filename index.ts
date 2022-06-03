import Autor from "./autor";
import Conteudo from "./conteudo";
import Tag from "./tag";
import prompt from "prompt-sync";
import Categoria from "./categoria";
import AutorPF from "./autorpf";

const teclado = prompt();

const conteudos: Conteudo[] = [];

function menu(): void {
  while (true) {
    console.log("+================= MENU FEICIBUK =================+");
    console.log("| 1. Cadastrar conteúdo/postagem                  |");
    console.log("| 2. Visualizar postagens                         |");
    console.log("| 99. Sair                                        |");
    console.log("+=================================================|");

    const escolha: number = +teclado("Escolha uma ação: ");
    if (escolha == 99) break;

    switch (escolha) {
      case 1:
        console.table(cadastrarConteudo());
        break;

      case 2:
        imprimirConteudos();
        break;

      default:
        break;
    }
  }
}

function cadastrarConteudo() {
  const tituloConteudo: string = teclado("Digite o título do conteúdo: ");
  const textoConteudo: string = teclado("Digite o texto do conteúdo: ");
  const isAtivo: boolean =
    teclado("Este conteúdo deverá ficar visível? (Sim/Não)")
      .charAt(0)
      .toLowerCase() == "s";

  const categoriaDoConteudo = new Categoria(
    teclado("Digite a categoria do conteúdo: ")
  );

  const nomeAutor: string = teclado("Digite o nome do autor da postagem: ");
  const dataDeNascimento: Date = new Date(
    teclado("Digite a data de nascimento do autor:(yyyy/MM/DD) ")
  );

  const numeroDeCategorias: number = +teclado(
    "Digite o número de tags a cadastrar neste conteúdo: "
  );

  const categorias: Categoria[] = [];
  for (let index = 0; index < numeroDeCategorias; index++) {
    const nomeCategoria: string = teclado(
      `Digite o nome da categoria a cadastrar (${
        index + 1 + "/" + numeroDeCategorias
      }): `
    );
    const categoria: Categoria = new Categoria(nomeCategoria);
    categorias.push(categoria);
  }

  const autor: Autor = new AutorPF(
    "Apelido1",
    "123123123-12",
    nomeAutor,
    dataDeNascimento,
    categorias
  );

  const numeroDeTags: number = +teclado(
    "Digite o número de tags a cadastrar neste conteúdo: "
  );

  const tags: Tag[] = [];
  for (let index = 0; index < numeroDeTags; index++) {
    const nomeTag: string = teclado(
      `Digite o nome da tag a cadastrar (${index + 1 + "/" + numeroDeTags}): `
    );
    const tag: Tag = new Tag(nomeTag);
    tags.push(tag);
  }

  const conteudo: Conteudo = new Conteudo(
    tituloConteudo,
    textoConteudo,
    categoriaDoConteudo,
    isAtivo,
    autor,
    tags
  );

  conteudos.push(conteudo);

  return conteudo;
}

function imprimirConteudos(): void {
  console.table(conteudos);
}

menu();
