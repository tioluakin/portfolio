import Parallax from "./components/parallax/Parallax"; 
import "./app.scss"
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";








const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="Services">
        <Parallax type="services" />
      </section>

      <section>
        <Services />
      </section>

      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />

      <section id="About Me">
        <About />
      </section>

      <section id="Contact">
        <Contact />
      </section>
      {/* <Test /> */}
      {/* <Test /> */}
    </div>
  );

};

export default App;




