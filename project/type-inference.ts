// OQUE É TYPE INFERENCE:

// TYPE INFERENCE é quando ao iniciarmos uma variável, já atribuimos valor pra ela. Uma vez atribuido, o proprio typescript infere isso, subentende o que aquela variável está recebendo. Logo, se eu declaro que uma variável está recebendo uma string, eu posso redeclarar o valor, contudo somente o mesmo tipo.

let nome = 'Laura';

nome = 'Laura Carlota';

nome = '5';

// nome = true; // error


window.addEventListener('click', (e) => {
	console.log(e.target)
});

// ||
//  =====> Se eu passar o mouse por cima do 'e' dentro do parenteses, ele me aprensetará que aquele parâmetro é do tipo, mouseEvent. Ele já infere o tipo e não precisamos declarar!

// também posso construir assim:

window.addEventListener('click', (e: MouseEvent) => {
	console.log(e.target)
});
