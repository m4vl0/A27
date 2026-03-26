import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MatchCenter from './components/MatchCenter'
import About from './components/About'
import Players from './components/Players'
import Results from './components/Results'
import Contact from './components/Contact'
import Footer from './components/Footer'
2

function App() {
  useEffect(() => {
    // Initialize ScrollReveal
    if (typeof ScrollReveal !== 'undefined') {
      const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 300,
        // reset: true,  // animations repeat
      });

      sr.reveal(`.home__data, .match-center__data, .match-center__content, .popular__container, .footer`);
      sr.reveal(`.home__images`, { origin: 'bottom', delay: 600 });
      sr.reveal(`.about__data, .contact__data`, { origin: 'left' });
      sr.reveal(`.about__img, .contact__image`, { origin: 'right' });
      sr.reveal(`.players__card`, { interval: 100 });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="main">
        <Hero />
        <MatchCenter />
        <About />        
        <Players />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
