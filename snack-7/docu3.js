
//Tabellina del 2 moltiplicato massimo fino a 1000

//for (let i = 2; i <= 1000 ; i++){

 //console.log (i)

//}


//Moltiplicazione fino al numero inserito dall'utente
let inputNumeroLimite = Number(prompt('Inserisci il tuo Numero Limite per la moltiplicazione'));

if(!isNaN(inputNumeroLimite)){
   for(let i = 2; i <= inputNumeroLimite; i += 2){
    console.log(i)
   }
}else{
    window.alert('Il numero che hai inserito non è valido')
    
}





