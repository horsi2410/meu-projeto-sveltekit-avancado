export function load({ url }) {
    const nome = url.searchParams.get('nome')
    return {
        nome: nome || 'Visitante'
    }
}
