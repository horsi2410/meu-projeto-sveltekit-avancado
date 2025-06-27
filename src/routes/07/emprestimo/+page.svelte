<script>
  let { form } = $props();
</script>

<form method="POST" action="?/solicitarPessoal">
  <label>
    Renda Mensal: <input name="renda" type="number" step="0.01" value={form?.renda ?? ''} required />
  </label>
  <br />
  <label>
    Score de Crédito: <input name="score" type="number" value={form?.score ?? ''} required />
  </label>
  <br />
  <label>
    Possui Imóvel para Garantia: <input name="imovel" type="checkbox" />
  </label>
  <br />
  <label>
    Valor do Veículo a ser Financiado: <input name="valorVeiculo" type="number" step="0.01" value={form?.valorVeiculo ?? ''} />
  </label>
  <br />
  <a href="/pessoal">
  <button type="button">Solicitar Empréstimo Pessoal</button>
</a>
<a href="/imobiliario">
  <button type="button">Solicitar Empréstimo Imobiliário</button>
</a>
<a href="/automotivo">
  <button type="button">Solicitar Empréstimo Automotivo</button>
</a>

</form>

{#if form && form.error != undefined}
  <p style="color: red">{form.error}</p>
{/if}