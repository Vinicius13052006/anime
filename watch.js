// Lista de animes
const animes = [
  {title:"86 Eighty Six", desc:"Um anime de guerra futurista onde soldados lutam para sobreviver.", img:"oip3.webp", episodes:5},
  {title:"Darling in the Franxx", desc:"Humanos pilotam mechas para defender a humanidade.", img:"zerotwo.jpg", episodes:6},
  {title:"Kaiju No 8", desc:"Um homem ganha o poder de virar Kaiju.", img:"kaiju.jpg", episodes:4},
  {title:"Attack on Titan", desc:"Soldados lutam contra Titãs que ameaçam a humanidade.", img:"attack.webp", episodes:7},
  {title:"Demon Slayer", desc:"Tanjiro luta para salvar sua irmã e derrotar demônios.", img:"kimetsu.webp", episodes:8},
  {title:"Chainsaw Man", desc:"Denji luta contra demônios usando sua motosserra humana.", img:"denji-pulls-his-chainsaw-cord-in-front-of-the-chainsaw-man-reze-arc-film.avif", episodes:6},
  {title:"Solo Leveling", desc:"Sung Jin-Woo ganha poderes incríveis em masmorras perigosas.", img:"71goH8p2ENL._SL1500_.jpg", episodes:7},
  {title:"Tokyo Ghoul", desc:"Kaneki luta para sobreviver em um mundo de ghouls.", img:"tokyoghoul.jpeg", episodes:5},
  {title:"Jujutsu Kaisen", desc:"Yuji e amigos enfrentam maldições perigosas.", img:"the-jujutsu-kaisen-5k-k0.jpg", episodes:6},
  {title:"Your Name", desc:"Dois adolescentes trocam de corpo misteriosamente.", img:"your-name-anime-2016-movie-poster-mlwlcbx1run1k2u9.jpg", episodes:3},
  {title:"Horimiya", desc:"A história do amor entre Hori e Miyamura.", img:"Horimiya-The-Missing-Pieces-Novo-trailer-revela-a-data-de-estreia-do-anime-1-jpg.webp", episodes:4},
  {title:"Toradora", desc:"O romance entre Taiga e Ryuuji.", img:"toradora.webp", episodes:4},
  {title:"A Silent Voice", desc:"Shouya busca redenção e amizade.", img:"wp6234232.jpg", episodes:3},
  {title:"Steins Gate", desc:"Viagem no tempo e conspirações científicas.", img:"steinsgate.jpg", episodes:6},
  {title:"Code Geass", desc:"Lelouch luta para mudar o mundo.", img:"codegeass.jpg", episodes:7},
  {title:"Evangelion", desc:"Pilotos lutam contra monstros apocalípticos.", img:"evangelion.jpg", episodes:6}
];

// Pega o anime clicado
const animeName = localStorage.getItem("anime");
const anime = animes.find(a => a.title === animeName) || animes[0];

// Atualiza banner e detalhes
document.getElementById("animeTitle").textContent = anime.title;
document.getElementById("animeDesc").textContent = anime.desc;
document.getElementById("watchBanner").style.backgroundImage =
  `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(${anime.img})`;

// Botão "Assistir Agora"
document.getElementById("watchNow").onclick = () => {
  alert(`▶ Devido a direitos autorais, os episódios completos não são exibidos.
O objetivo do projeto é demonstrar a interface e funcionalidades de um serviço de streaming.`);
};

// Carrega episódios simulados
const episodesGrid = document.getElementById("episodesGrid");
for (let i = 1; i <= anime.episodes; i++) {
  const epCard = document.createElement("div");
  epCard.classList.add("episode-card");
  epCard.innerHTML = `
    <img src="${anime.img}" alt="Episódio ${i}">
    <p>Episódio ${i}</p>
  `;
  epCard.onclick = () => alert(`▶ Devido a direitos autorais, os episódios completos não são exibidos.
O objetivo do projeto é demonstrar a interface e funcionalidades de um serviço de streaming.`);
  episodesGrid.appendChild(epCard);
}
