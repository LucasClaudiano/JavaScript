const nomes = ['Ana Julia',  'Caio Vinicius', 'Bia silva']; 

const nomesPadronizados = nomes.map((nome)=>{
    return nome.toUpperCase(); 
}); 
console.log(nomesPadronizados) ;

/* opção maias consida no arrow function
const nomesPadronizados ´= nomes.map((nome)=>nome.toUpperCase()); */
