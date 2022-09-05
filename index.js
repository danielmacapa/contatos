const prompt = require('prompt-sync')();
const adicionar = require('./modules/adicionar.js');
const remover = require('./modules/remover.js');
const listar = require('./modules/listar.js');
const pesquisar = require('./modules/pesquisar.js');
let contatos = require("./modules/array")

const main = () => {
    let condicao = true

    while (condicao) {
        //var opcao = parseInt(prompt('Digite uma opção:\n1) Adicionar\n2) Remover\n3) Listar\n4) Pesquisar\n0) Sair\n'));
        console.log('1) Adicionar\n2) Remover\n3) Listar\n4) Pesquisar\n0) Sair');
        var opcao = parseInt(prompt('Digite uma opção: '));

        switch (opcao) {
            case 1:
                adicionar(contatos)
                break
            case 2:
                remover(contatos)
                break
            case 3:
                listar(contatos)
                break
            case 4:
                pesquisar(contatos)
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






