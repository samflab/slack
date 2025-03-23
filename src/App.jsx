import React from 'react';
import Navbar from './Body/Navbar';
import Message from './Body/Message';
import Hero from './Body/Hero';
import ClientCarousel from './Body/ClientCarousel';
import Cookie from './Body/Cookie';
import Content from './Body/Content';
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Message />
      <Hero />
      <ClientCarousel />

      <Content />
      <Cookie />
    </div>
  );
};

export default App;
