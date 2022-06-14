import { Autor } from "./autor";

const autor: Autor = new Autor("Pedro Peglow", new Date());

const autorSalvo: Autor = autor.salvar(autor);
