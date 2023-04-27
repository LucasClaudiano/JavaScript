const notas = [8 , 9.3 , 7.5, 6.4]; 
let somaDeNotas = 0; 
notas.forEach(function(nota){
    somaDeNotas +=nota; 

})

const media = somaDeNotas/notas.length; 

console.log(`A média das notas será ${media}.`); 

