export function load({ url }) {
    const nome = url.searchParams.get('nome')
    const dataNasc = url.searchParams.get('data_nascimento')
    
    if (!nome || !dataNasc) return { resultado: null }
    
    const idade = new Date().getFullYear() - new Date(dataNasc).getFullYear()
    return {
        resultado: idade >= 18,
        nome
    }
}
