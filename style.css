/* =========================================
   RESET
========================================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* =========================================
   DESIGN SYSTEM
   ALTERE AS CORES AQUI
========================================= */

:root {

  --primary: #2e7d32;
  --secondary: #66bb6a;
  --background: #f4fdf4;
  --text: #222;
  --white: #fff;

  --spacing: 1rem;
  --radius: 16px;

  --transition: 0.3s ease;

  --font-size: 16px;
}

/* =========================================
   MODO ALTO CONTRASTE
========================================= */

body.high-contrast {
  --primary: #000;
  --secondary: #222;
  --background: #fff;
  --text: #000;
}

/* =========================================
   BODY
========================================= */

body {
  font-family: Arial, sans-serif;
  background: var(--background);
  color: var(--text);
  font-size: var(--font-size);
  line-height: 1.6;
  transition: var(--transition);
}

/* =========================================
   CONTAINER
========================================= */

.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

/* =========================================
   HEADER
========================================= */

.header {
  background: var(--primary);
  color: white;
  padding: 2rem 0;
}

.header-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.accessibility-controls {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

button {
  cursor: pointer;
  border: none;
  padding: 0.7rem 1rem;
  border-radius: var(--radius);
  background: var(--secondary);
  color: white;
  transition: var(--transition);
}

button:hover {
  opacity: 0.9;
}

/* =========================================
   HERO
========================================= */

.hero {
  padding: 4rem 0;
  text-align: center;
}

/* =========================================
   GRID DOS CARDS
   ALTERE O GRID AQUI
========================================= */

.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: var(--radius);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* =========================================
   CARROSSEL
========================================= */

.carousel {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.carousel-track-container {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  min-width: 100%;
}

.slide img {
  width: 100%;
  border-radius: var(--radius);
  height: 400px;
  object-fit: cover;
}

/* =========================================
   ACORDEÃO
========================================= */

.accordion-item {
  background: white;
  margin-bottom: 1rem;
  border-radius: var(--radius);
  overflow: hidden;
}

.accordion-header {
  width: 100%;
  text-align: left;
  background: var(--primary);
}

.accordion-content {
  padding: 1rem;
  display: none;
}

.accordion-item.active .accordion-content {
  display: block;
}

/* =========================================
   FOOTER
========================================= */

.footer {
  margin-top: 4rem;
  background: var(--primary);
  color: white;
  text-align: center;
  padding: 2rem 0;
}

/* =========================================
   SCROLL REVEAL
========================================= */

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* =========================================
   RESPONSIVIDADE
========================================= */

@media(min-width: 768px) {

  .header-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  /* ALTERE O GRID DESKTOP AQUI */
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }

}
