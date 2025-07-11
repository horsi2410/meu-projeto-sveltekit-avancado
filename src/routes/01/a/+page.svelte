// +page.server.js

import { produtos } from '$lib/server/03/produtos.js'

export function load({ params, url }) {
    const { categoria } = params
    const busca = url.searchParams.get('busca') || ''
    const min = parseFloat(url.searchParams.get('min')) || 0
    const max = parseFloat(url.searchParams.get('max')) || Infinity
    const id = parseInt(url.searchParams.get('id'))

    let resultados = produtos.filter(p => p.categoria === categoria)

    // === FILTRO POR TÍTULO (ATIVO) ===
    if (busca) {
        resultados = resultados.filter(p =>
            p.titulo.toLowerCase().includes(busca.toLowerCase()) ||
            p.descricao.toLowerCase().includes(busca.toLowerCase())
        )
    }

    // === FILTRO POR PREÇO (COMENTADO) ===
    /*
    resultados = resultados.filter(p => p.preco >= min && p.preco <= max)
    */

    // === FILTRO POR ID (COMENTADO) ===
    /*
    if (!isNaN(id)) {
        resultados = produtos.filter(p => p.id === id)
    }
    */

    return { produtos: resultados, categoria }
}
