const adicionar = require('./modules/adicionar.js');
const listar = require('./modules/listar.js');
const pesquisar = require('./modules/pesquisar.js');
const remover = require('./modules/remover.js');

// iniciando a agenda

var ana = {
    nome: "Ana",
    telefone: "Nascimento",
    email: "anacoimba@bol.com",
    uf: "PA",
    cidade: "belém",
    endereco: "rua 15"
};

var contatos = [ana];



var prompt = require('prompt-sync')();
var op = prompt('Selecione uma opção de contato: 1- Adicionar;  2- Remover; 3- Listar; 4- Pesquisar; 0- Sair da agenda ');

if (op == 1){
    adicionar();
} else { 
    if (op == 2){
    remover();
} else {
    if (op == 3){
    listar();
} else {
    if (op == 4){
    pesquisar();
} else {
    if (op == 0){
    sair();
}}}}}








