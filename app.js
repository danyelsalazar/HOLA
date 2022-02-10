let numeroMaquina = Math.floor(Math.random() * (10 -1)) + 1;
console.log(numeroMaquina);
let numeroUser = parseInt(prompt(`Adivina un numero del 1 al 10 `));

let vidas = 3;

while (numeroMaquina !== numeroUser && vidas > 1){
    
    // podemos usar el if :
    // if(numeroMaquina < numeroUser){
    //     console.log("Pista: El numero es mas bajo")
    // }else{
    //     console.log("Pista: El numero es mas alto");
    // }

    //O si no en vez de usar el if podemos usar el operador ternario , lo hacemos de la siguinte manera:
    let mensaje = numeroMaquina < numeroUser ?"Pista: El numero es mas bajo" :"Pista: El numero es mas alto";
    alert(`Te equivocaste! ` + mensaje);

    vidas--;
    numeroUser = parseInt(prompt(`Vuelve a intentarlo, tus vidas: ` + vidas));
}

if (numeroMaquina === numeroUser){
    alert("GANASTE😎 te mereces una mamada de cuca");
}
else{
    alert(`PERDISTE😫, el numero era: ` + numeroMaquina)
}