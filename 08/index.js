const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

for (quantidade of usuarios) {
    if (quantidade.pets.length == 0) {
        console.log(`Sou ${quantidade.nome} e não tenho nenhum pet`);
    } else {
        if (quantidade.pets.length == 1) {
            console.log(`Sou ${quantidade.nome} e tenho 1 pet`);
        } else {
            console.log(`Sou ${quantidade.nome} e tenho ${quantidade.pets.length} pets`);
        };
    };
    
};

