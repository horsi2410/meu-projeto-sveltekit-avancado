export async function load({ url }) {
    const limit = 20;
    const page = parseInt(url.searchParams.get('page')) || 1;
    const name = url.searchParams.get('name')?.toLowerCase() || '';
    const offset = (page - 1) * limit;
  
    if (name) {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!res.ok) throw new Error('Not found');
        const pokemon = await res.json();
        const pokemons = [{
          name: pokemon.name,
          image: pokemon.sprites.front_default || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        }];
        return {
          pokemons,
          page: 1,
          total: 1,
          limit: 20
        };
      } catch {
        return {
          pokemons: [],
          page: 1,
          total: 0,
          limit: 20
        };
      }
    } else {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
      const data = await res.json();
  
      for (const pokemon of data.results) {
        const id = pokemon.url.split("/").at(-2);
        pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      }
  
      return {
        pokemons: data.results,
        page,
        total: data.count,
        limit
      };
    }
  }
  