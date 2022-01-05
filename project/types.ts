// ===> BOOLEAN = true or false <===

let isPar: boolean = true;
isPar = false;


// ===> STRING ('foo', "foo", `foo`)  <===
let message: string = "Eu amo açaí";
message = 0 // erro
message = 'foo';
message = "foo";
message = `foo ${isPar} `;


// ===> NUMBER = int, float, hex, bin, etc... <===
let total: number = 100;
total = 2.24;
total =  1/2;
total = 0xff0;


// ===> ARRAY = lista => (type[]) <===
let items: number[] = [7, 9, 14, 45, 56];
let values: Array<string> = ['Mozilla', 'Opera', 'Edge']; //generic


// ===> TUPLA = ARRAY[] QUE EU JÁ SEI QUANTOS ITENS TEM <===
let title: [string, number] = ["O Nome do vento", 2002];
let title1: [string, number] = [2002, "O Nome do vento"]; // erro -> ordem invertida


// ===> ENUM = CHAVE/VALOR => FACILITA O ENTENDIMENTO PARA O USUÁRIO, ou seja, passamos para o usuário os nomes das cores(exemplo), mas para o sistema, passamos o número hexadecimal <===
enum colors {
    white = '#FFFFFF',
    red = '#FF0000',
    amarelo = '#FFF000',
    laranja = '#FF8C00',
    verde = '#00FF00',
    azul = '#00FFFF',
    lilas = '#A020F0'
}


// ===> ANY = QUALQUER COISA -> NÃOOOOO É LEGAL, PORQUE É COMO SE EU NÃO TIVESSE ESCREVENDO NADA <- <===
let coisa: any = [1];


// ===> VOID = VAZIO -> NÃO RETORNA NADA <===
function test(): void {
	console.log('foo'); // não retorna nada, só printa no console
}

function soma(n: number): boolean {
	return n % 2 == 0;
}

console.log(soma(12));


// ===> NULL / UNDEFINED -> na prática, não tem diferença <=== <== null e undefined são mais usados parsa type areas e não para variáveis. Para variáveis seria uma má pratica.
type Bla = string | undefined;


// ===> NEVER - nunca vai retornar nada. Ex: um função que retornará um erro! Esse erro não é uma string, não é vazia, não é indefinida ou etc <===

function error(): never {
	throw new Error("Error");
}


// ===> OBJECT - qualquer coisa que não se encaixe em nenhum dos outros tipos <===

let carta: object;
carta = {
	pokemon: 'Pikachu',
	type: 'fire'
}

let carros: object = [
	{
		nome: "Gol",
		cor: colors.red
	},
	{
		nome: "uno",
		cor: colors.verde
	},
	{
		nome: "range hover",
		cor: colors.white
	}
];
