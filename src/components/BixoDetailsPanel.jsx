import React from 'react';
import '../styles/BixoDetailsPanel.css'

const BixoDetailsPanel = ({ pokemon, isOpen, onClose }) => {
  // Se não estiver aberto ou não tiver pokémon selecionado, não renderiza nada
  if (!pokemon) return null;

  return (
    <aside className={`details-panel ${isOpen ? 'open' : 'closed'}`}>
      <div className="panel-header">
        <button className="btn-close" onClick={onClose}>&times;</button>
        <h2>Detalhes Avançados</h2>
      </div>

      <div className="panel-content">
        <h3>{pokemon.name}</h3>
        <p><strong>ID:</strong> #{pokemon.id}</p>
        
        <div className="stats-dummy">
          <p>HP: 50</p>
          <p>Attack: 65</p>
          <p>Defense: 40</p>
        </div>
      </div>
    </aside>
  );
};

export default BixoDetailsPanel;