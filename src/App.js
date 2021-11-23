import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Aboutus from './components/Aboutus';
import Fact from './components/Fact';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReactStateTask from './components/ReactStateTask';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main id="main">
        <Aboutus />
        <Fact />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <ReactStateTask />
      </main>
      <Footer />
    </div>
  );
}

export default App;
