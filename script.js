document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("#videoPlayer");
  const menu = document.querySelector("#menu");
  const productLinks = document.querySelector("#productLinks");

  // Simulando um banco de dados local
  const sceneData = [
    { time: 5, products: [{ name: "Relógio XYZ", link: "https://link.com/relogio" }] },
    { time: 10, products: [{ name: "Óculos ABC", link: "https://link.com/oculos" }] }
  ];

  video.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(video.currentTime);

    // Verifica se há produtos para o tempo atual
    const scene = sceneData.find(scene => scene.time === currentTime);
    if (scene) {
      menu.style.display = "block";
      productLinks.innerHTML = scene.products
        .map(product => `<a href="${product.link}" target="_blank">${product.name}</a>`)
        .join("");
    } else {
      menu.style.display = "none";
    }
  });
});
