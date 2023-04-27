const alunos =["Ana", "Marcos", "Maria", "Mauro"]; 
const medidas = [7, 4.5, 8 , 7.5]

const reprovados = alunos.filter((alunos, indice)=>{//quando não se utiliza o primeiro parametro o mesmo pode ser substituido por um _
    return medidas[indice]<7; 
})
console.log(reprovados); 
//o retorno do filter é em booleano ou seja ele vai verificar as condições verdadeiras de acordo com os parâmetros definidos nas funções 