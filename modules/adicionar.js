var prompt = require('prompt-sync')();
var contatos = [];

adicionar = () => {
    console.log('Informe os dados do novo contato');
    var nome = prompt('Nome: ');
    var telefone = prompt('Telefone: ');
    var email = prompt('Email: ');
    var uf = prompt('UF: ');
    var cidade = prompt('Cidade: ');
    var endereco = prompt('Endereço: ');

    if (nome === null && telefone === null && email === null && uf === null && cidade === null && endereco === null) {
        nome = "";
        telefone = "";
        email = "";
        uf = "";
        cidade = "";
        endereco = "";
      }

    contatos[contatos.length] = new add(nome, telefone, email, uf, cidade, endereco);
    
    add = (nome, sobrenome, celular, email) => {
    this.nome = nome;
    this.telefone = sobrenome;
    this.email = celular;
    this.uf = email;
    this.cidade = cidade;
    this.endereco = endereco;
    }
}

module.exports = adicionar;