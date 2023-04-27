const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes); 

const nomesAtualizados = [...meuSet]; //cria um novo array com base no Set que retirou os repetidos 

console.log(meuSet);