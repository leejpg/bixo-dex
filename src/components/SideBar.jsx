import '../styles/SideBar.css'
import { useState } from 'react';
import React from 'react';
import Item from './Item';
import { bixomons } from '../db';
import bixomonLogo from '../assets/bixomon.png'

const Sidebar = ({ onSelect, favorites }) => {
  const [activeTab, setActiveTab] = useState('all');

  const listToRender = activeTab === 'all' ? bixomons : favorites;

  return (
    <aside className="pokedex-sidebar">
      <div className="sidebar-header">
        <img src={bixomonLogo} alt="logo" />
        
        {/* ÍCONES DE ALTERNÂNCIA DE PÁGINA */}
        <div className="tab-menu">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
            title="Todos os Bixomons"
          >
            🌐 {/* Pode trocar por um ícone do Lucide/FontAwesome depois */}
          </button>
          <button 
            className={`tab-btn ${activeTab === 'fav' ? 'active' : ''}`}
            onClick={() => setActiveTab('fav')}
            title="Meus Favoritos"
          >
            ❤️ 
            {favorites.length > 0 && <span className="fav-count">{favorites.length}</span>}
          </button>
      
          <input type="text" placeholder="Pesquisar..." className="search-bar" />
        </div>
      </div>

      
      
      <div className="pokemon-list">
        {listToRender.length === 0 ? (
          <p className="empty-message">Nenhum bixo por aqui...</p>
        ) : (
          listToRender.map((poke) => (
            <Item 
              key={poke.id} 
              pokemon={poke} 
              dispararClique={onSelect} 
            />
          ))
        )}
      </div>
    </aside>
  );
};

export default Sidebar;