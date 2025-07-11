import { produtos } from '$lib/server/03/produtos.js'

export function load({ params, url }) {
    const { categoria } = params
    const busca = url.searchParams.get('busca') || ''
    const min = parseFloat(url.searchParams.get('min')) || 0
    const max = parseFloat(url.searchParams.get('max')) || Infinity
    const id = parseInt(url.searchParams.get('id'))

    let resultados = produtos.filter(p => p.categoria === categoria)

    // Filtro por ID (independente)
    // Exemplo de URL: ?id=3
    // Só funciona se o ID for válido e presente
    if (!isNaN(id)) {
        resultados = produtos.filter(p => p.id === id)
    }

    // Filtro por título ou descrição (independente)
    // Exemplo de URL: ?busca=notebook
    if (busca) {
        resultados = resultados.filter(p => 
            p.titulo.toLowerCase().includes(busca.toLowerCase()) || 
            p.descricao.toLowerCase().includes(busca.toLowerCase())
        )
    }

    // Filtro por faixa de preço (independente)
    // Exemplo de URL: ?min=1000&max=3000
    resultados = resultados.filter(p => p.preco >= min && p.preco <= max)

    return { produtos: resultados, categoria }
}
