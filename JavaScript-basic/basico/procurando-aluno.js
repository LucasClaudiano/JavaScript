const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeNotasEMedias = [alunos, medias]; 

function exibeNotasEMedias(aluno){
    if(listaDeNotasEMedias[0].includes(aluno)){
        //const indice = listaDeNotasEMedias[0].indexOf(aluno);
        //const medias = listaDeNotasEMedias[1]
        
        const [alunos , medias]= listaDeNotasEMedias;

        const indice= alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice]; 

        console.log(`${aluno} está cadastrado e sua média é ${mediaDoAluno}`); 

    }else{
        console.log(`Aluno não cadastrado!!`); 
    }
}   
exibeNotasEMedias("João")