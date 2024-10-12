// Buscar todos os digimons
document.getElementById('fetchAllDigimons').addEventListener('click', () => {
  fetch('/api/digimons')
    .then(response => {
      return response.json();
    })
    .then(digimons => {
      const digimonList = document.getElementById('digimonList');
      digimonList.innerHTML = ''; // Limpar a lista 

      digimons.forEach(digimon => {
        const div = document.createElement('div');
        div.classList.add('digimon-item');
        div.innerHTML = `
          <h3>${digimon.name}</h3>
          <p>Level: ${digimon.level}</p>
          <img src="${digimon.img}" alt="${digimon.name}">
        `;
        digimonList.appendChild(div);
      });
    })
});

// Buscar um Digimon aleatório
document.getElementById('fetchRandomDigimon').addEventListener('click', () => {
  fetch('/api/digimons')
    .then(response => {
      return response.json();
    })
    .then(digimons => {
      const randomIndex = Math.floor(Math.random() * digimons.length);
      const randomDigimon = digimons[randomIndex];

      const digimonList = document.getElementById('digimonList');
      digimonList.innerHTML = ''; //  Limpar a lista

      const div = document.createElement('div');
      div.classList.add('digimon-item');
      div.innerHTML = `
        <h3>${randomDigimon.name}</h3>
        <p>Level: ${randomDigimon.level}</p>
        <img src="${randomDigimon.img}" alt="${randomDigimon.name}">
      `;
      digimonList.appendChild(div);
    })
});

// Buscar um digimon por nome
document.addEventListener('DOMContentLoaded', () => {

  function capitalizeFirstLetter(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }

  document.getElementById('searchByNameButton').addEventListener('click', () => {
    const input = document.getElementById('searchByName');
    const inputValue = capitalizeFirstLetter(input.value);

    fetch(`/api/digimons/name/${inputValue}`)
      .then(response => {
        return response.json();
      })
      .then(digimon => {
        const digimonList = document.getElementById('digimonList');
        digimonList.innerHTML = ''; // Limpar a lista

        const div = document.createElement('div');
        div.classList.add('digimon-item');
        div.innerHTML = `
          <h3>${digimon.name}</h3>
          <p>Level: ${digimon.level}</p>
          <img src="${digimon.img}" alt="${digimon.name}">
        `;
        digimonList.appendChild(div);
      })
  });

  // Buscar um digimon por level

  document.getElementById('searchByLevelButton').addEventListener('click', () => {
    const input = document.getElementById('searchByLevel');
    const inputValue = capitalizeFirstLetter(input.value);

    fetch(`/api/digimons/level/${inputValue}`)
      .then(response => {
        return response.json();
      })
      .then(digimons => {
        const digimonList = document.getElementById('digimonList');
        digimonList.innerHTML = ''; // Limpar a lista

        digimons.forEach(digimon => {
          const div = document.createElement('div');
          div.classList.add('digimon-item');
          div.innerHTML = `
            <h3>${digimon.name}</h3>
            <p>Level: ${digimon.level}</p>
            <img src="${digimon.img}" alt="${digimon.name}">
          `;
          digimonList.appendChild(div);
        });
      })
  });
});