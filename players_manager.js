const fs = require('fs');
const path = require('path');

function updateHtml() {
    // 1. Load Data
    const dataPath = path.join(__dirname, 'data.json');
    if (!fs.existsSync(dataPath)) {
        console.error("Error: data.json not found.");
        return;
    }
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    // 2. Load HTML
    const htmlPath = path.join(__dirname, 'index.html');
    if (!fs.existsSync(htmlPath)) {
        console.error("Error: index.html not found.");
        return;
    }
    let html = fs.readFileSync(htmlPath, 'utf-8');

    // 3. Update Players Section
    let playersHtml = "";
    data.players.forEach(p => {
        playersHtml += `
               <article class="products__card">
                  <img src="${p.img}" alt="image" class="products__img">

                  <h3 class="products__name">${p.name} <br> ${p.position}</h3>
                  <span class="products__price">${p.number}</span>

                  <button class="products__button">
                     <i class="ri-shopping-bag-3-fill"></i>
                  </button>
               </article>`;
    });

    const playerPattern = /(<div class="products__container container grid">)([\s\S]*?)(<!--  -->\s*<\/div>)/;
    html = html.replace(playerPattern, `$1${playersHtml}\n               $3`);

    // 4. Update Results Section
    let resultsHtml = "";
    data.results.forEach(r => {
        resultsHtml += `
                     <article class="popular__card swiper-slide">
                        <img src="src/assets/img/home-escudo vs.png" alt="image" class="popular__img">
                        <h3 class="popular__title">${r.team_a} (${r.score_a}) VS (${r.score_b}) ${r.team_b} </h3>
                     </article>`;
    });

    const resultsPattern = /(<!--SWIPER-->[\s\S]*?<div class="swiper-wrapper">)([\s\S]*?)(<\/div>\s*<\/div>)/;
    html = html.replace(resultsPattern, `$1${resultsHtml}\n                  $3`);

    // 5. Save HTML
    fs.writeFileSync(htmlPath, html, 'utf-8');
    console.log("Successfully updated index.html with data from data.json!");
}

updateHtml();
