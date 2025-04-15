import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AppScreens from './components/AppScreens';
import Download from './components/Download';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <AppScreens />
      <Download />
      <Footer />
    </main>
  );
} 