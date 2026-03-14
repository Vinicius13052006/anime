document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner");
  const bannerTitle = document.getElementById("bannerTitle");
  const bannerDesc = document.getElementById("bannerDesc");
  const watchBtn = document.getElementById("watchBtn");
  const search = document.getElementById("search");
  const cards = document.querySelectorAll(".anime-card");

  if (!banner) return;

  // Banner com rotatividade
  const bannerAnimes = [
    {title:"86 Eighty Six", desc:"Um anime de guerra futurista onde soldados lutam para sobreviver.", img:"oip3.webp", link:"watch.html"},
    {title:"Darling in the Franxx", desc:"Humanos pilotam mechas para defender a humanidade.", img:"zerotwo.jpg", link:"watch.html"},
    {title:"Kaiju No 8", desc:"Um homem ganha o poder de virar Kaiju.", img:"kaiju.jpg", link:"watch.html"}
  ];

  let index = 0;

  function updateBanner(){
    const anime = bannerAnimes[index];
    banner.style.opacity = 0;
    setTimeout(() => {
      banner.style.backgroundImage = `linear-gradient(to right,rgba(0,0,0,0.9),rgba(0,0,0,0.3)),url(${anime.img})`;
      bannerTitle.textContent = anime.title;
      bannerDesc.textContent = anime.desc;
      if (watchBtn) watchBtn.onclick = () => {
        localStorage.setItem("anime", anime.title);
        window.location.href = anime.link;
      };
      banner.style.opacity = 1;
    }, 400);
  }

  updateBanner();
  setInterval(() => {
    index = (index + 1) % bannerAnimes.length;
    updateBanner();
  }, 5000);

  // Pesquisa em tempo real
  if(search){
    search.addEventListener("input", () => {
      const value = search.value.toLowerCase();
      cards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = title.includes(value) ? "block" : "none";
      });
    });
  }

  // Clique nos cards usando data-link e localStorage
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3").innerText;
      localStorage.setItem("anime", title); // salva o anime clicado
      const link = card.getAttribute("data-link") || "watch.html"; // fallback
      window.location.href = link;
    });
  });
});