// Como podemos melhorar o esse código usando TS?

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

// Resposta

enum Trabalho {
  Atriz,
  Padeiro,
  Motorista,
}

interface Humano {
  nome: string;
  idade: number;
  profissao: Trabalho;
}

let fulano: Humano = {
  nome: 'joão',
  idade: 15,
  profissao: Trabalho.Padeiro,
};

let ciclano: Humano = {
  nome: 'marcos',
  idade: 19,
  profissao: Trabalho.Motorista,
};

let pessoa3: Humano = {
  nome: 'laura',
  idade: 32,
  profissao: Trabalho.Atriz,
};

let pessoa4: Humano = {
  nome: 'carlos',
  idade: 19,
  profissao: Trabalho.Padeiro,
};
