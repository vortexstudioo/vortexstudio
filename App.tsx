
import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Products } from './components/Products';
import { Benefits } from './components/Benefits';
import { Proof } from './components/Proof';
import { FinalCTA } from './components/FinalCTA';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuizBot } from './components/QuizBot';

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-900 selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Solution />
        <Products />
        <Benefits />
        <Proof />
        <FinalCTA />
      </main>
      <Footer />
      <QuizBot />
    </div>
  );
}

export default App;
