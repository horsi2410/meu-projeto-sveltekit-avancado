<script>
    export let data
</script>

<form method="GET">
    <label>
        Nome:
        <input name="nome" required>
    </label>
    <label>
        Data de Nascimento:
        <input type="date" name="data_nascimento" required>
    </label>
    <button type="submit">Verificar</button>
</form>

{#if data.resultado === true}
    <p>Bem-vindo, {data.nome}! Acesso permitido.</p>
{:else if data.resultado === false}
    <p>Acesso negado. Você é menor de idade.</p>
{/if}