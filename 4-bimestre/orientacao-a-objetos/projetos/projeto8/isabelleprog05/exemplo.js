
const repositorio = require('./repositorio')

async function executar() {

    // Criar venda
    const venda = {
        id: 1,
        cliente: "Ana",
        produto: "Dipirona",
        valor: 12,
        status: "aberta"
    };

    console.log("SALVAR:")
    console.log(await repositorio.salvar(venda))

    // Listar vendas
    console.log("LISTAR:")
    console.log(await repositorio.listar())

    // Atualizar venda
    console.log("ATUALIZAR:")
    console.log(
        await repositorio.atualizar(1, {
            status: "cancelada"
        })
    )

    // Remover venda
    console.log("REMOVER:")
    console.log(await repositorio.remover(1))

    // Listar novamente
    console.log("LISTAR FINAL:")
    console.log(await repositorio.listar())
}

executar()
