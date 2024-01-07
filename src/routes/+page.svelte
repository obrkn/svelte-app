<div class="container mx-auto py-12 px-4">
  <div class="grid grid-cols-1 content-center h-full gap-4">
    <a
      href="./pokemons/1"
      class="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl hover:border-2 hover:border-blue-500 hover:scale-105 w-full p-12"
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.ceil(
          Math.random() * 151
        )}.png`}
        class="mx-auto"
        alt="pokemon top-left"
      />
      <div class="text-2xl m-auto text-bold text-gray-700 italic">
        First Generation
      </div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.ceil(
          Math.random() * 151
        )}.png`}
        class="mx-auto"
        alt="pokemon"
      />
    </a>
    <a
      href="./pokemons/2"
      class="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl hover:border-2 hover:border-blue-500 hover:scale-105 w-full p-12"
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          151 + Math.ceil(Math.random() * 100)
        }.png`}
        class="mx-auto"
        alt="pokemon"
      />
      <div class="text-2xl m-auto text-bold text-gray-700 italic">
        Second Generation
      </div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          151 + Math.ceil(Math.random() * 100)
        }.png`}
        class="mx-auto"
        alt="pokemon"
      />
    </a>
  </div>
</div>
