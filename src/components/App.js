import React from 'react';
import './App.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NewCharacterStatus from './NewCharacterStatus';

export default function App() {
  
  return (
    <>
      <Header />
      <NewCharacterStatus />
      <Footer />
    </>
  );
}
