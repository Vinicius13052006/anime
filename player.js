document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("videoPlayer");
    const loader = document.getElementById("loader");
    const episodeInfo = document.querySelector(".episode-info");

    // 1. Pega os dados salvos (Ex: anime="Toradora", episode="1")
    const animeAtivo = localStorage.getItem("anime");
    const episodeAtivo = parseInt(localStorage.getItem("episode")) || 1;

    // 2. Banco de Dados de Vídeos
    const videos = {
        "86 Eighty Six": ["videos/six.mp4", "videos/six2.mp4" ],
        "Attack on Titan": ["videos/aot1.mp4", "videos/aot2.mp4"],
        "Demon Slayer": ["videos/demon.mp4", "videos/demon2.mp4"],
        "Solo Leveling": ["videos/solo1.mp4", "videos/solo2.mp4"],
        "Toradora": ["videos/toradora.mp4", "videos/toradora2.mp4", "videos/toradora3.mp4"],
        "Chainsaw Man": ["videos/chainsaw1.mp4", "videos/chainsaw2.mp4"],
         "sword art online": ["videos/kirito.mp4",],
         "Darling in the Franxx": ["videos/zero.mp4",]
    };

    // 3. Lógica de Carregamento
    if (animeAtivo && videos[animeAtivo]) {
        const urlVideo = videos[animeAtivo][episodeAtivo - 1];

        if (urlVideo) {
            video.src = urlVideo;
            if (episodeInfo) episodeInfo.textContent = `${animeAtivo} - EP ${episodeAtivo}`;
            
            // Tenta o play
            video.play().catch(() => console.log("Aguardando interação do usuário para dar play."));
        } else {
            alert("Episódio não encontrado!");
        }
    } else {
        console.log("Nenhum anime selecionado no localStorage.");
    }

    // 4. Controle do Loader
    video.onwaiting = () => loader.style.display = "block";
    video.onplaying = () => loader.style.display = "none";
    video.oncanplay = () => loader.style.display = "none";

    // 5. Atalhos de Teclado (Opcional - Estilo Pro)
    document.addEventListener("keydown", (e) => {
        if (e.code === "Space") { e.preventDefault(); video.paused ? video.play() : video.pause(); }
        if (e.code === "ArrowRight") video.currentTime += 10;
        if (e.code === "ArrowLeft") video.currentTime -= 10;
    });
});