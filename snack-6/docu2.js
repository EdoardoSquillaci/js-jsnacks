


let input = Number(prompt('Inserisci un numero, se è uguale a quello generato dal pc vinci 100000milioni di pesos'))

console.log('il numero che hai generato è:', input)


let numeroGenerato =Math.floor(Math.random() * 10 + 1);

console.log('Il computer ha generato:' , numeroGenerato)



if(input==numeroGenerato){

    console.log('Hai vinto!')
    

}else if (input !== numeroGenerato){
    console.log ('Hai Perso, riprova.')
}