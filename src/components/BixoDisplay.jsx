import React from 'react';
import '../styles/BixoDisplay.css'

const BixoDisplay = ({ pokemon, onOpenDetails, onToggleFavorite, isFavorite }) => {
  if (!pokemon) {
    return (
      <div className="display-empty">
        <p>Selecione um Bixo para ver os detalhes</p>
      </div>
    );
  }

  return (
    <div className="pokemon-display-card">
      <div className="sprite-container">
        <img src={pokemon.sprite} alt={pokemon.name} className="main-sprite" />
      </div>
      
      <h2 className="display-name">{pokemon.name}</h2>
      
      <div className="display-actions">
        {/* Botão dinâmico de favorito */}
        <button 
          className={`btn-favorite ${isFavorite ? 'active-fav' : ''}`}
          onClick={() => onToggleFavorite(pokemon)}
        >
          {isFavorite ? '❤️ Favoritado' : '🖤 Favoritar'}
        </button>

        <button className="btn-info" onClick={onOpenDetails}>
          Mais Informações
        </button>
      </div>
    </div>
  );
};

export default BixoDisplay;