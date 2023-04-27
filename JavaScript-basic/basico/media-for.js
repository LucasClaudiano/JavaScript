const nota =[10, 8, 5, 6.5, 7.7]; 
somaDeNotas = 0; 

for(let i= 0; i<nota.length; i++){
    somaDeNotas+=nota[i]; 

}
let media = somaDeNotas/nota.length; 

console.log(`A media das notas sera ${media}`); 
