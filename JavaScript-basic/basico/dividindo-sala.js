/*const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
const sala1 = alunos.slice(0,alunos.length/2);
const sala2 = alunos.slice(alunos.length/2);  
console.log(sala1); 
console.log(sala2);*/

/*const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie']; 
nomes.splice(1,2, "Rodrigo"); 
console.log(nomes); */

/*const array1 = ["Evaldo", "Camis", "Mari"];
const array2 = ["Ju", "Leo", "Raquel"];

const uniaodearray = array1.concat(array2); 
console.log(uniaodearray); */

const alunos= [ "João", "Juliana", "Ana", "Caio"]; 
const medias = [10, 8, 7.5, 9]; 

const alunosEmedias = [alunos, medias]; 

console.log(`O nome da primeira aluna é ${alunosEmedias[0][0]}`); 
console.log(`A nota deste aluno é ${alunosEmedias[1][0]}`); 
