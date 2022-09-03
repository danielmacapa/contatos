
listar = (contatos) => {
    for (var i = 0; i < contatos.length; i++) {
        console.table(contatos)
        //console.log(contatos[i]);
    }
}


module.exports = listar;