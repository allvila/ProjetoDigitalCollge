import Header from './components/Header';
import Hero from './components/Hero';
import React from 'react';

export default function App() {
  return (
    <main className="w-full min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <Hero />
    </main>
  );
}