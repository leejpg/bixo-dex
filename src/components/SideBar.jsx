import '../styles/SideBar.css'

import React from 'react';
import Item from './Item';
import { bixomons } from '../db';

const Sidebar = () => {
  return (
    <aside className="pokedex-sidebar">
      <div className="sidebar-header">
        <h2>Bixodéx</h2>
        <input type="text" placeholder="Pesquisar..." className="search-bar" />
      </div>
      
      <div className="pokemon-list">
        {bixomons.map((poke) => (
          <Item key={poke.id} pokemon={poke} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;