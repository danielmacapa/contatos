//db

const contatos = [
    {
        nome: "Ana",
        telefone: "Nascimento",
        email: "anacoimba@bol.com",
        uf: "PA",
        cidade: "belém",
        endereco: "rua 15"
    }
]

module.exports = contatos

//agenda

const prompt = require('prompt-sync')();
const contatos = require("./db")

const listar = (contatos) => {
    console.table(contatos)
}

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

const remover = (contatos) => {
    console.log('Informe o nome');
    const nome = prompt('Nome: ');
    let lidos = true
    for (var i = 0; i < contatos.length; i++) {
        if (nome === contatos[i].nome) {
            contatos.splice(i, 1);
            lidos = false
        }
    }

    if (lidos) {
        console.log("\n\nNão encontrado!\n\n")
    }

    listar(contatos)
}

const pesquisar = (contatos) => {
    console.log('Informe o nome');
    const nome = prompt('Nome: ');
    let contato = null
    for (var i = 0; i < contatos.length; i++) {
        if (nome === contatos[i].nome) {
            contato = contatos[i]
        }
    }

    if (contato) {
        console.table(contato)
    } else {
        console.log("\nNao foi encontrado!\n")
    }
}

const main = (contatos) => {
    let condicao = true

    while (condicao) {
        console.log("1) Adicionar")
        console.log("2) Listar")
        console.log("3) Pesquisar")
        console.log("4) Remover")
        console.log("0) Sair")
        let opcao = parseInt(prompt("Digite um opção: "))

        switch (opcao) {
            case 1:
                adicionar(contatos)
                break
            case 2:
                listar(contatos)
                break
            case 3:
                pesquisar(contatos)
                break
            case 4:
                remover(contatos)
                break
            case 0:
                condicao = false
                break
            default:
                console.log("\n\nTente de novo, opção incorreta!\n\n")
                break
        }
    }
}

main(contatos)