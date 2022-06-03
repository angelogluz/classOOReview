import Autor from "./autor";
import AutorPF from "./autorpf";
import AutorPJ from "./autorpj";

const autorPF1: AutorPF = new AutorPF(
  "Apelido 1",
  "11111111",
  "Nome 1",
  new Date()
);
//const autorPF: AutorPF = new Autor("")
const autorPF2: AutorPF = new AutorPF(
  "Apelido 2",
  "11111111",
  "Nome 2",
  new Date()
);
const autorPJ1: AutorPJ = new AutorPJ(
  "RAZAO 1",
  "11111111",
  "Nome 1",
  new Date()
);
const autorPJ2: AutorPJ = new AutorPJ(
  "RAZAO 2",
  "11111111",
  "Nome 2",
  new Date()
);

const autores: Autor[] = [];
autores.push(autorPF1, autorPF2);

autores.push(autorPJ1, autorPJ2);

// autores.forEach((autor) => autor.());
const x: AutorPF = autores[0] as AutorPF;
x.falarPF();

for (const autor of autores) {
  if (autor instanceof AutorPF) {
    console.log(autor.falarPF());
  }
}
