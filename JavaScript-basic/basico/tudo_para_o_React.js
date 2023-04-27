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
const user0 = {
   name, // =  name: name , 
    age , // = idade: idade, 

}; 
document.body.innerText = JSON.stringify({first, third, rest })

//Optional Chaning, utilizado para lidar com o acesso de informações nulas 
const user1 = { 
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

//exemplo de quando se chama um função que se encontra dentro do objeto 

const user2 = { 
    name:'Diogo', 
    idade: 27 , 
    address:{
        street:'Rua teste', 
        number :176, 
        zip:{
            code:'89190000',
            city: 'Rio do Sul '
        },
        showFullAddress(){
            return 'ok'; 
        }
    }, 
};

document.body.innerText = user.address?.showFullAddress?.()//o ponto de interrogação e o ponto final ao fim da função vão fazer com que ela só seja acionada caso ela exista 

//métodos de array 

const array = [1,2,3,4,5]; 

for (const i of array ){
    document.body.innerText +=1
}

array.forEach (item=>{
    document.body.innerText+= item ; 
})


const array.map(item=> {  //a principal diferença entre o map e o forEach é que no primeiro é possível incluir um retorno 
   if(item % 2 == 0){ //é possível colocar uma condicional dentro do map 
        return item * 2; //o array sempre vai ter o mesmo tamanho ou seja o ideal é utilizar o map quando quiser modificar os elementos do array 
   }
   return item;
})
document.body.innerText =JSON.stringify(novoArray)

//a mesma operação acima ficaria da seguinte forma 
/*
const novoArray=[]; 

array.forEach(item=>{
    novoArray.push(item*2)
})
*/

//filter
//vai apenas filtrar os elementos , mas não vai modifica-los
const novoArray = array.filter(item => item %2 == 0 )

//every retorna um valor booleano true or false , vai retornar , ele só retorna true se todos os itens satisfazem a condição 

const todosItensSaoNumeros = array.every(item=> typeof item == 'number');

//some verifica se pelo menos um item satisfaz a condição 
const peloMenosUmItemNaoEuMNumero = array.some(item =>{
    return typeof item !== 'number'
})

//find encontra um item do array , o findIndex faz a mesma função mas ao invés de retornar o elemento , ele vai retornar o índice deste elemento   

const par = array.find(item=> % 2 == 0)//vai retornar o primeiro item que satisfaz a condição 

//reduce 
//cria uma nova estrutura com o array 

const soma = array.reduce((acc, item)=>{
     return acc + item
},0)//valor inicial da nova estrutura criada 

//Template Literals