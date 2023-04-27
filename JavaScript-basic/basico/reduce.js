const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, nota)=>{
        return acumulador+nota; 
    },0)


    /* forma resumida de declarar  o acumulador pode ser chamado de acc
    const somaDasNotas = notasDaSala.reduce((acumulador, nota)=>acumulador +nota, 0); */
    const media = somaDasNotas / notasDaSala.length; 
    return media ; 
     
}

/* O reduce vai possuir dois parâmetros o segundo que é o número zero 
vai ser o valor inicial do acumulador ou seja se o retorno for acumulador + 1
o reduce vai retornar a quantidade de elementos do array , se for colocado 
somando com o array nota como no exemplo ele vai fazer 0+primeira nota + 
segunda nota e assim vai retornar a soma de todas as notas. */

console.log(`A média da sala de JS é ${calculaMedia(salaJava)}`); 
