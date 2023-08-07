const jovens = [];
const adultos = [];
const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

for (usuario of usuarios) {
    if (usuario.idade < 18) {
        jovens.push(usuario);
    } else {
        adultos.push(usuario);
    }
};

console.log(adultos);
console.log(jovens);