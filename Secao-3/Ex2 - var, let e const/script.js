// VAR, LET E CONST

var nome = "Sujeito";

if (nome === "Sujeito") {
    var curso = "Programador Frontend";
    console.log(curso);
}

curso = "PHP"; // curso será igual a "PHP"

if (nome === "Sujeito") {
    let cargo = "CEO - Sujeito Programador";
    console.log(cargo);
}

cargo // cargo is not defined

let bonus = true;

if (bonus) {
    let salario = 4000 + 600;
    console.log(salario);
} // 4600

salario // salario is not defined

const cargo = "Programador Front end";

cargo; // 'Programador Front end'

cargo = "Programador Front end" // erro, não é possível mudar a variável const.

let statusCurso;

statusCurso = "Ativo";

/* const sobrenome; */ // Precisa de um valor