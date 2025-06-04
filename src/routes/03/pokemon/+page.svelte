<script>
  import { onMount } from 'svelte';
  let { data } = $props();
  let { pokemons, page, total, limit } = data;
  const totalPages = Math.ceil(total / limit);

  let search = '';
  
  function handleSearch() {
    const params = new URLSearchParams(window.location.search);
    if (search.trim()) {
      params.set('name', search.toLowerCase());
    } else {
      params.delete('name');
    }
    params.set('page', '1');
    window.location.search = params.toString();
  }
</script>

<div class="mb-3">
  <input
    type="text"
    placeholder="Buscar por nome do Pokémon"
    bind:value={search}
    on:keydown={(e) => e.key === 'Enter' && handleSearch()}
    class="form-control"
  />
  <button class="btn btn-primary mt-2" on:click={handleSearch}>Buscar</button>
</div>

<div class="row">
  {#if pokemons.length > 0}
    {#each pokemons as p}
      <div class="col-md-3 col-sm-6 mb-3">
        <div class="card">
          <img src={p.image} alt={p.name} class="card-img-top" />
          <div class="card-body">
            <a href="/03/pokemon/{p.name}" class="stretched-link text-decoration-none">
              <h5 class="card-title text-capitalize">{p.name}</h5>
            </a>
          </div>
        </div>
      </div>
    {/each}
  {:else}
    <p>Nenhum Pokémon encontrado.</p>
  {/if}
</div>

<nav class="d-flex justify-content-between mt-4">
  <a
    class="btn btn-primary"
    href={`?page=${page - 1}${search ? `&name=${search}` : ''}`}
    class:disabled={page <= 1}
    aria-disabled={page <= 1}
  >
    Anterior
  </a>

  <a
    class="btn btn-primary"
    href={`?page=${page + 1}${search ? `&name=${search}` : ''}`}
    class:disabled={page >= totalPages}
    aria-disabled={page >= totalPages}
  >
    Próximo
  </a>
</nav>
