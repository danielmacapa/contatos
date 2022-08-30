var prompt = require('prompt-sync')();
var armazenar = require('armazenar.js');

console.log('Informe os dados do novo contato');

var nome = prompt('Nome: ');
var telefone = prompt('Telefone: ');
var email = prompt('Email: ');
var uf = prompt('UF: ');
var cidade = prompt('Cidade: ');
var endereço = prompt('Endereço: ');

var meucontato = new Contato();

adicionar = () => {
console.log('ADICIONAR');
}



module.exports = adicionar;