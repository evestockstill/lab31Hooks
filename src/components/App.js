import React from 'react';
import './App.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import RickMorty from '../containers/RickMorty';

export default function App() {
  return (
    <>
      <Header />
      <RickMorty />
      <Footer />
    </>
  );
}
