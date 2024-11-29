import React from 'react';
import { Header } from './components/Header';
import { ExampleSection } from './components/ExampleSection';
import { TipsSection } from './components/TipsSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { LanguageSelector } from './components/LanguageSelector';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSelector />
      </div>
      <Header />
      <ExampleSection />
      <TipsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;