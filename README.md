# Atlético 27 F.C. ⚽

Sitio web oficial del club Atlético 27 F.C., desarrollado con React y Vite. Muestra la plantilla de jugadores, resultados y próximos partidos, un contador en tiempo real para el próximo encuentro, e información de contacto del club.

🔗 **Demo en vivo:** [a27-pi.vercel.app](https://a27-pi.vercel.app/)

## Capturas de pantalla

<!-- Agrega aquí 1-2 capturas del sitio. Ejemplo:
![Inicio](./screenshots/home.png)
![Plantel](./screenshots/players.png)
-->

## Características

- **Match Center**: countdown en tiempo real hasta el próximo partido, calculado dinámicamente.
- **Plantel de jugadores**: cargado de forma asíncrona desde un archivo JSON (`data.json`).
- **Resultados y próximos partidos**: carrusel interactivo (Swiper) con los últimos encuentros del club.
- **Animaciones al hacer scroll**: implementadas con ScrollReveal.
- **Sección de contacto**: redes sociales, ubicación y mapa del club.
- **Diseño responsive**, adaptado a dispositivos móviles y escritorio.

## Tecnologías utilizadas

- [React](https://react.dev/) — librería para construir la interfaz
- [Vite](https://vitejs.dev/) — entorno de desarrollo y build
- [Swiper](https://swiperjs.com/) — carruseles interactivos
- [ScrollReveal](https://scrollrevealjs.org/) — animaciones al hacer scroll
- [RemixIcon](https://remixicon.com/) — set de íconos
- CSS personalizado
- Desplegado en [Vercel](https://vercel.com/) con integración continua desde GitHub

## Cómo correr el proyecto localmente

```bash
# Clona el repositorio
git clone https://github.com/m4vl0/atletico27fc.git

# Entra a la carpeta del proyecto
cd atletico27fc

# Instala las dependencias
npm install

# Levanta el servidor de desarrollo
npm run dev
```

El proyecto quedará disponible en `http://localhost:5173`.

## Estructura del proyecto

```
atletico27fc/
├── public/
├── src/
│   ├── assets/          # Imágenes y estilos
│   ├── components/      # Componentes de React (Navbar, Hero, Players, etc.)
│   ├── App.jsx
│   └── main.jsx
├── data.json             # Datos del plantel de jugadores
├── index.html
└── vite.config.js
```

## Próximas mejoras

- [ ] Panel de administración para editar jugadores y resultados sin tocar el código
- [ ] Consumir los datos desde una API o base de datos en vez de un JSON estático
- [ ] Sección de noticias del club

## Autor

Desarrollado por [Pablo](https://github.com/m4vl0) como proyecto de práctica en React + Vite.
