const notas = [7,7,8,9]

const novasNotas = [...notas,10]; // Os ... chamam spread operator ou operador de esplamento ele pega todo o conteúdo do array e espalha em um novo array .  


console.log(`As novas notas são ${novasNotas}`); 
console.log(`As notas originais são ${notas}`); 
//cria uma cópia do array 