const prompt = require("prompt-sync")({ sigint: true });
const listar = require("./listar")

const adicionar = (contatos) => {
    console.log('Informe os dados do novo contato');
    const nome = prompt('Nome: ') || "";
    const telefone = prompt('Telefone: ') || "";
    const email = prompt('Email: ') || "";
    const uf = prompt('UF: ') || "";
    const cidade = prompt('Cidade: ') || "";
    const endereco = prompt('Endereço: ') || "";

    contatos.push({ nome, telefone, email, uf, cidade, endereco });

    listar(contatos)
}

module.exports = adicionar;