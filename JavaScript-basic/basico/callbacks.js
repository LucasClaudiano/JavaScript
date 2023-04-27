const nomes = ["Evaldo", "Mari", "Camis"]; 

/* método simples 

nomes.forEach(function (nome){ 
    console.log(nome); 
})
*/

// método mais ultilizado//
nomes.forEach((nome)=>{
    console.log(nome); 
}); 
/* outra maneira alternativa criando a função callback de maneira externa

function impreNome(nome){
    console.log(nome); 
}
nomes.forEach(impreNome); 
*/