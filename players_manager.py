import json
import re

def update_html():
    # Load data
    try:
        with open('data.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print("Error: data.json not found.")
        return

    # Load HTML
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            html = f.read()
    except FileNotFoundError:
        print("Error: index.html not found.")
        return

    # 1. Update Players Section
    players_html = ""
    for p in data['players']:
        players_html += f"""
               <article class="products__card">
                  <img src="{p['img']}" alt="image" class="products__img">

                  <h3 class="products__name">{p['name']} <br> {p['position']}</h3>
                  <span class="products__price">{p['number']}</span>

                  <button class="products__button">
                     <i class="ri-shopping-bag-3-fill"></i>
                  </button>
               </article>"""
    
    # Use regex to replace the content inside the players container
    player_pattern = re.compile(r'(<div class="products__container container grid">)(.*?)(<!--  -->\s*</div>)', re.DOTALL)
    html = player_pattern.sub(f'\\1{players_html}\n               \\3', html)

    # 2. Update Results Section
    results_html = ""
    for r in data['results']:
        results_html += f"""
                     <article class="popular__card swiper-slide">
                        <img src="src/assets/img/home-escudo vs.png" alt="image" class="popular__img">
                        <h3 class="popular__title">{r['team_a']} ({r['score_a']}) VS ({r['score_b']}) {r['team_b']} </h3>
                     </article>"""
    
    # Use regex to replace the content inside the results swiper-wrapper
    results_pattern = re.compile(r'(<!--SWIPER-->.*?<div class="swiper-wrapper">)(.*?)(</div>\s*</div>)', re.DOTALL)
    html = results_pattern.sub(f'\\1{results_html}\n                  \\3', html)

    # Save HTML
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    
    print("Successfully updated index.html with data from data.json!")

if __name__ == "__main__":
    update_html()
