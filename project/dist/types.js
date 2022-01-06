"use strict";
// ===> BOOLEAN = true or false <===
var isPar = true;
isPar = false;
// ===> STRING ('foo', "foo", `foo`)  <===
var message = "Eu amo açaí";
// message = 0 // erro
message = 'foo';
message = "foo";
message = "foo " + isPar + " ";
// ===> NUMBER = int, float, hex, bin, etc... <===
var total = 100;
total = 2.24;
total = 1 / 2;
total = 0xff0;
// ===> ARRAY = lista => (type[]) <===
var items = [7, 9, 14, 45, 56];
var values = ['Mozilla', 'Opera', 'Edge']; //generic
// ===> TUPLA = ARRAY[] QUE EU JÁ SEI QUANTOS ITENS TEM <===
var title = ["O Nome do vento", 2002];
// let title1: [string, number] = [2002, "O Nome do vento"]; // erro -> ordem invertida
// ===> ENUM = CHAVE/VALOR => FACILITA O ENTENDIMENTO PARA O USUÁRIO, ou seja, passamos para o usuário os nomes das cores(exemplo), mas para o sistema, passamos o número hexadecimal <===
var colors;
(function (colors) {
    colors["white"] = "#FFFFFF";
    colors["red"] = "#FF0000";
    colors["amarelo"] = "#FFF000";
    colors["laranja"] = "#FF8C00";
    colors["verde"] = "#00FF00";
    colors["azul"] = "#00FFFF";
    colors["lilas"] = "#A020F0";
})(colors || (colors = {}));
// ===> ANY = QUALQUER COISA -> NÃOOOOO É LEGAL, PORQUE É COMO SE EU NÃO TIVESSE ESCREVENDO NADA <- <===
var coisa = [1];
// ===> VOID = VAZIO -> NÃO RETORNA NADA <===
function test() {
    console.log('foo'); // não retorna nada, só printa no console
}
function soma(n) {
    return n % 2 == 0;
}
console.log(soma(12));
// ===> NEVER - nunca vai retornar nada. Ex: um função que retornará um erro! Esse erro não é uma string, não é vazia, não é indefinida ou etc <===
function error() {
    throw new Error("Error");
}
// ===> OBJECT - qualquer coisa que não se encaixe em nenhum dos outros tipos <===
var carta;
carta = {
    pokemon: 'Pikachu',
    type: 'fire'
};
var carros = [
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
