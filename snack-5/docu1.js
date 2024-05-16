//creo array vuoto
let numero = []

// creo ciclo per cui il prompt viene richiesto 6 volte
for (let i = 0 ; i < 6 ; i++){

const input = prompt('Inserisci qui il tuo numero')

// creo la mia condizione per cui i numeri inseriti se dispari... 
if (input % 2 !== 0){
  
// vanno pushati nella variabile let...
numero.push(input)


//per poi essere stampati in console
console.log(numero)

}


}
