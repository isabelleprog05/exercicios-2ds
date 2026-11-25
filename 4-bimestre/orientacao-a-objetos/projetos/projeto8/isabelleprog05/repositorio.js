
const fs = require('fs').promises

const ARQUIVO = process.env.ARQUIVO_VENDAS || 'vendas.json'

// Lista todas as vendas
async function listar() {
    try {
        const dados = await fs.readFile(ARQUIVO, 'utf8')
        return JSON.parse(dados)
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            return []
        }

        throw erro
    }
}

// Salva uma nova venda
async function salvar(venda) {
    const vendas = await listar()

    vendas.push(venda)

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(vendas, null, 2)
    );

    return venda
}

// Atualiza uma venda existente
async function atualizar(id, dados) {
    const vendas = await listar()

    const indice = vendas.findIndex(venda => venda.id === id);

    if (indice === -1) {
        return null;
    }

    vendas[indice] = {
        ...vendas[indice],
        ...dados,
        id: vendas[indice].id
    };

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(vendas, null, 2)
    );

    return vendas[indice]
}

// Remove uma venda
async function remover(id) {
    const vendas = await listar()

    const indice = vendas.findIndex(venda => venda.id === id)

    if (indice === -1) {
        return false
    }

    vendas.splice(indice, 1)

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(vendas, null, 2)
    )

    return true
}

// Exporta as funções
module.exports = {
    listar,
    salvar,
    atualizar,
    remover
}
