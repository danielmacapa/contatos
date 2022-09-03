const prompt = require("prompt-sync")({ sigint: true });

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

module.exports = pesquisar;
