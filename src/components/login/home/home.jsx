import React from 'react';

import '../../login/home/home.css';
const Home = () => {
  return (
    <div>
    <header class="header">
    <a href="" class="logo">Inicio</a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
      <li><a href="#about">Sobre nós</a></li>
      <li><a href="#services">Serviços</a></li>
      <li><a href="#operações">Operações</a></li>
    </ul>
  </header>
    </div>
  );
};

export default Home;
