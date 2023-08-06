// 1
// const axios = require('axios');
// async function obtenerTiposPokemon(nombrePokemon) {
//   try {
//     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`);
//     const tipos = response.data.types.map((tipo) => tipo.type.name);
//     return tipos;
//   } catch (error) {
//     throw new Error('No se pudo obtener el Pokémon. Verifica el nombre ingresado.');
//   }
// }

// const nombrePokemon = 'pikachu';

// obtenerTiposPokemon(nombrePokemon)
//   .then((tipos) => {
//     console.log(`Los tipos del Pokémon ${nombrePokemon} son:`);
//     for (const tipo of tipos) {
//       console.log(tipo);
//     }
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// 2

// const axios = require('axios');

// async function obtenerAutoresLibro(busqueda) {
//   try {
//     const response = await axios.get(`http://openlibrary.org/search.json?q=${encodeURIComponent(busqueda)}`);
//     const docs = response.data.docs;
    
//     if (docs.length > 0) {
//       const primerLibro = docs[0];
//       const autores = primerLibro.author_name;
//       return autores;
//     } else {
//       throw new Error('No se encontró ningún libro que coincida con la búsqueda.');
//     }
//   } catch (error) {
//     throw new Error('Error al obtener los autores del libro.');
//   }
// }


// const busqueda = 'i robot';
// obtenerAutoresLibro(busqueda)
//   .then((autores) => {
//     if (autores.length > 0) {
//       console.log(`Los autores del libro "${busqueda}" son: ${autores.join(', ')}`);
//     } else {
//       console.log(`No se encontraron autores para el libro "${busqueda}".`);
//     }
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// 3
// const axios = require('axios');

// async function obtenerLibrosPorAutor(autor) {
//   try {
//     const response = await axios.get(`http://openlibrary.org/search.json?author=${encodeURIComponent(autor)}`);
//     const docs = response.data.docs;
    
//     if (docs.length > 0) {
//       const libros = docs.map(libro => libro.title);
//       return libros;
//     } else {
//       throw new Error('No se encontró ningún libro para el autor especificado.');
//     }
//   } catch (error) {
//     throw new Error('Error al obtener la lista de libros del autor.');
//   }
// }

// const autor = 'asimov';
// obtenerLibrosPorAutor(autor)
//   .then((libros) => {
//     if (libros.length > 0) {
//       console.log(`Los libros del autor "${autor}" son: \n${libros.join('\n')}`);
//     } else {
//       console.log(`No se encontraron libros para el autor "${autor}".`);
//     }
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// 4
// const axios = require('axios');

// async function obtenerGeneroBanda(banda) {
//   try {
//     const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(banda)}`);
//     const artists = response.data.artists;
    
//     if (artists && artists.length > 0) {
//       const genero = artists[0].strGenre;
//       if (genero) {
//         return genero;
//       } else {
//         throw new Error(`No se encontró el género de la banda "${banda}".`);
//       }
//     } else {
//       throw new Error(`No se encontró información para la banda "${banda}".`);
//     }
//   } catch (error) {
//     throw new Error(`Error al obtener el género de la banda "${banda}".`);
//   }
// }

// const banda = 'coldplay';
// obtenerGeneroBanda(banda)
//   .then((genero) => {
//     console.log(`El género de la banda "${banda}" es: ${genero}`);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });
// 5
// const axios = require('axios');

// async function obtenerPersonaje(nombrePersonaje) {
//   try {
//     const response = await axios.get(`https://swapi.dev/api/people/?search=${encodeURIComponent(nombrePersonaje)}`);
//     const resultados = response.data.results;

//     if (resultados && resultados.length > 0) {
//       const personaje = resultados[0];
//       const peliculasUrls = personaje.films;
      
//       // Obtener los títulos de las películas
//       const peliculasPromesas = peliculasUrls.map(async (url) => {
//         const peliculaResponse = await axios.get(url);
//         return peliculaResponse.data.title;
//       });
//       const peliculas = await Promise.all(peliculasPromesas);

//       return {
//         nombre: personaje.name,
//         peliculas: peliculas
//       };
//     } else {
//       throw new Error(`No se encontró el personaje "${nombrePersonaje}".`);
//     }
//   } catch (error) {
//     throw new Error(`Error al obtener el personaje "${nombrePersonaje}".`);
//   }
// }

// const nombrePersonaje = 'Luke Skywalker';
// obtenerPersonaje(nombrePersonaje)
//   .then((personaje) => {
//     console.log(`Nombre del personaje: ${personaje.nombre}`);
//     console.log('Películas donde aparece:');
//     personaje.peliculas.forEach((pelicula) => {
//       console.log(`- ${pelicula}`);
//     });
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// 7
const axios = require('axios');


async function obtenerInfoPokemon(numeroPokedex) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numeroPokedex}/`);
    const pokemon = response.data;

    const pokemonInfo = {
      nombre: pokemon.name,
      movimientos: pokemon.moves.map(move => move.move.name),
      tipos: pokemon.types.map(type => type.type.name),
      altura: pokemon.height,
      peso: pokemon.weight
    };

    return pokemonInfo;
  } catch (error) {
    throw new Error(`Error al obtener información del Pokémon con el número de Pokédex ${numeroPokedex}.`);
  }
}

async function obtenerPrimeros151Pokemon() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
    const listaPokemon = response.data.results;
    
    const primeros151Pokemon = await Promise.all(
      listaPokemon.map(async (pokemon, index) => {
        const numeroPokedex = index + 1;
        return await obtenerInfoPokemon(numeroPokedex);
      })
    );

    return primeros151Pokemon;
  } catch (error) {
    throw new Error('Error al obtener los primeros 151 Pokémon de la primera generación.');
  }
}


obtenerPrimeros151Pokemon()
  .then((pokemonList) => {
    console.log(pokemonList);
  })
  .catch((error) => {
    console.error(error.message);
  });
