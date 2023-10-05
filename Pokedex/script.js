const searchInput = document.getElementById('search');
const pokemonList = document.getElementById('pokemonList');
const modalContent = document.querySelector('.modal-content');

axios.get('https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json')
    .then(response => {
        const pokemons = response.data;
        function showPokemonDetails(pokemon) {
            modalContent.innerHTML = `
                <h2>${pokemon.name}</h2>
                <p>Tipo: ${pokemon.type}</p>
                <p>Peso: ${pokemon.weight}</p>
                <p>Altura: ${pokemon.height}</p>
                <p>Ataques:</p>
                <ul>
                    ${pokemon.attacks.map(attack => `<li>${attack}</li>`).join('')}
                </ul>
            `;
            $('#pokemonModal').modal('show');
        }
        function showPokemonList() {
            pokemonList.innerHTML = '';
            pokemons.forEach(pokemon => {
                const card = document.createElement('div');
                card.classList.add('col-md-4', 'mb-3');
                card.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${pokemon.name}</h5>
                            <p class="card-text">Tipo: ${pokemon.type}</p>
                            <button class="btn btn-primary btn-sm" data-pokemon='${JSON.stringify(pokemon)}'>Ver detalles</button>
                        </div>
                    </div>
                `;
                pokemonList.appendChild(card);
            });
        }

        showPokemonList();
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm));
            showPokemonList(filteredPokemons);
        });
        pokemonList.addEventListener('click', event => {
            if (event.target.matches('button')) {
                const pokemon = JSON.parse(event.target.dataset.pokemon);
                showPokemonDetails(pokemon);
            }
        });
    })
    .catch(error => console.error('Error al cargar los datos de Pokémon:', error));
