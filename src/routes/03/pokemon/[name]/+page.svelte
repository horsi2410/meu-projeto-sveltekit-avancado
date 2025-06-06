<script>
  export let data;
  
  // Verifica tanto o pokemon quanto erros
  $: pokemon = data?.pokemon;
  $: erro = data?.mensagem;
</script>

{#if erro}
  <div class="erro">
    {erro}
    <a href="/03/pokemon">Voltar à lista</a>
  </div>
{:else if pokemon}
  <div class="detalhes-pokemon">
    <img src={pokemon.imagem} alt={pokemon.nome}>
    <h1>{pokemon.nome}</h1>
    <p><strong>Altura:</strong> {pokemon.altura}m</p>
    <p><strong>Peso:</strong> {pokemon.peso}kg</p>
    <p><strong>Tipos:</strong> {pokemon.tipos.join(', ')}</p>
  </div>
{:else}
  <p>Carregando...</p>
{/if}

<style>
  .detalhes-pokemon {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .erro {
    color: red;
    text-align: center;
  }
</style>