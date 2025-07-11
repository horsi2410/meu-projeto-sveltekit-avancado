<!-- +page.svelte -->

<script>
    export let data
</script>

<h1>Produtos de {data.categoria}</h1>

<form method="GET">
    <label>
        Buscar:
        <input name="busca" placeholder="Digite um termo">
    </label>
    <!-- Campo de preço (comentado) -->
    {/*
    <label>
        Preço mínimo:
        <input type="number" name="min" step="0.01">
    </label>
    <label>
        Preço máximo:
        <input type="number" name="max" step="0.01">
    </label>
    */}
    <!-- Campo de ID (comentado) -->
    {/*
    <label>
        ID:
        <input type="number" name="id">
    </label>
    */}
    <button type="submit">Filtrar</button>
</form>

<ul>
    {#each data.produtos as p}
        <li>
            <h3>{p.titulo} - R$ {p.preco.toFixed(2)}</h3>
            <p>{p.descricao}</p>
        </li>
    {/each}
</ul>
