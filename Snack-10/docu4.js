//Ciclo determinante di numero di volte massime in cui viene richiesto il propt
for(let i = 0; i <= 30 ; i ++){

let NumeroDaInserire1 = Number(prompt('Inserisci il primo Numero'))
let NumeroDaInserire2 = Number(prompt('Inserisci il secondo Numero'))

if(isNaN(NumeroDaInserire1 && NumeroDaInserire2)){
    console.log('I caratteri che hai inserito non sono validi');
break
} else if (NumeroDaInserire1 === NumeroDaInserire2){
    console.log('Hai Vinto');
    break
}
}