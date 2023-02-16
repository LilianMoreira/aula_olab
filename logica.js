let idade= 18;

if(idade > 15 && idade < 18 || idade > 70) {
    console.log('O seu voto é opicional')}
else if (idade < 16) {
    console.log('Você não pode votar')
}
else{
    console.log('Você é obrigado a votar, com consciência')
}

let animal= 'Cachorro';
switch (animal) {
    case 'Cachorro':
    console.log("mamifero");
    break;
    case 'Galinha':
    console.log("oviparo");
    break;
    case 'Grilo':
    console.log("onivoro");
    break;
    default:
    console.log('Animal não identificado')
}

let i= 0;
while (i < 11) {
    console.log('5x ' + i + '=' + 5*i)
    i++
}

let contador= 0;
do{
    console.log("O contador vale:" + contador);
    contador++;
} while (contador<5)

for(let i=0; i<11; i++){
    console.log("2x"+ i + "=" +2*i);
}