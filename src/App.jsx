import React from 'react';
import Navbar from './Body/Navbar';
import Message from './Body/Message';
import Hero from './Body/Hero';
import ClientCarousel from './Body/ClientCarousel';
import "./index.css"

const App = () => {
  return <div>
    <Navbar/>
    <Message/>
    <Hero/>
    <ClientCarousel/>
  </div>;
};

export default App;
