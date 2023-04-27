// Nullish Coalescing Operator 

const idade= 0 ; 

ducument.body.innerText = "Sua idade é :"(idade ?? "Não informado" ); 
//faz o mesmo que o operador ou || porém ele vai retornar até os dados que são null para o java , ou seja vai retornar como não informado. 

//objetos 
//São estruturas de dados de chave e valor 

const user = { 
    name:'Diogo', 
    idade: 27 , 
    address:{
        street:'Rua teste', 
        number :176, 
    }, 
};
document.body.innerText = ('name' in user ) //expressão 'in' que vai buscar se determinada informação existe dentro do objeto 
document.body.innerText = Object.keys(user)//vai retornar um vetor com todas as chaves do objeto 
document.body.innerText = Object.values(user)//retorna todos os valores do objeto 
document.body.innerText = JSON.stringify(Object.entries(user))//vai retornar um vetor com vários vetores dentro 

//desestruturação => remover parte de um objeto para uma variável a parte 
const {address} = user 


const {idade:age} = user//usando a desestruturação para mudar o nome da variável , pode ser utilizada em qualquer lugar que se refira a um objeto
document.body.innerText = JSON.stringify(Object.entries(age))


// Rest Operator 
//forma de buscar o restante das informações , ou seja as que não foram buscadas 

const {name, address, ...rest} = user//usando a desestruturação para mudar o nome da variável , pode ser utilizada em qualquer lugar que se refira a um objeto
document.body.innerText = JSON.stringify(rest)

//desestruturação com array 
const array = [1,2,3,4,5,6,7,8,9,10]; 
document.body.innerText = JSON.stringify({first, second, rest})//ele vai mostrar o primeiro número , depois o segundo e o restante em apenas um grupo só 

// Short Syntax , sintaxe curta 
const user = {
   name, // =  name: name , 
    age , // = idade: idade, 

}; 
document.body.innerText = JSON.stringify({first, third, rest })

//Optional Chaning, utilizado para lidar com o acesso de informações nulas 
const user = { 
    name:'Diogo', 
    idade: 27 , 
    address:{
        street:'Rua teste', 
        number :176, 
        zip:{
            code:'89190000',
            city: 'Rio do Sul '
        }
    }, 
};

/* document.body.innerText = user.address 
? user.address.zip
    ?user.address.zip.code
    :'não informado'
:'não informado' */
document.body.innerText = user.address?.zip?.code ?? "Não informado "; //se resume no mesmo resultado da operação acima cada comando '?' verifica se o objeto pode existir ou não 