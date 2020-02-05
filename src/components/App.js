import React from 'react';
import './App.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import RickMortyFn from '../containers/RickMortyFn';

export default function App() {
  
  return (
    <>
      <Header />
      <RickMortyFn />
      <Footer />
    </>
  );
}
