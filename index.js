const prompt = 3
const adicionar = require('./modules/adicionar.js');
const remover = require('./modules/remover.js');
const listar = require('./modules/listar.js');
const pesquisar = require('./modules/pesquisar.js');
let contatos = require("./modules/array")

const main = () => {
    let condicao = true

    while (condicao) {
        console.log("1) Adicionar")
        console.log("2) Remover")
        console.log("3) Listar")
        console.log("4) Pesquisar")
        console.log("0) Sair")
        var opcao = parseInt(prompt("Digite uma opção: "));

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






