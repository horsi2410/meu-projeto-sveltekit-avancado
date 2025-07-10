import { produtos } from '$lib/server/03/produtos.js'

export function load({ params, url }) {
    const { categoria } = params
    const busca = url.searchParams.get('busca') || ''
    const min = parseFloat(url.searchParams.get('min')) || 0
    const max = parseFloat(url.searchParams.get('max')) || Infinity

    let resultados = produtos.filter(p => p.categoria === categoria)
    
    if (busca) {
        resultados = resultados.filter(p => 
            p.titulo.toLowerCase().includes(busca.toLowerCase()) || 
            p.descricao.toLowerCase().includes(busca.toLowerCase())
        )
    }
    
    resultados = resultados.filter(p => p.preco >= min && p.preco <= max)

    return { produtos: resultados, categoria }
}
