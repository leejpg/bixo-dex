import React from 'react';

const BixoDisplay = ({ pokemon, onOpenDetails }) => {
  if (!pokemon) {
    return (
      <div className="display-empty">
        <p>Selecione um Bixo para ver os detalhes</p>
      </div>
    );
  }

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return (
    <div className="pokemon-display-card">
      <div className="sprite-container">
        <img src={imageUrl} alt={pokemon.name} className="main-sprite" />
      </div>
      
      <h2 className="display-name">{pokemon.name}</h2>
      
      <div className="display-actions">
        <button className="btn-favorite" onClick={() => alert(`${pokemon.name} adicionado aos favoritos!`)}>
            Favoritar
        </button>
        <button className="btn-info" onClick={onOpenDetails}>
            Mais Informações
        </button>
      </div>
    </div>
  );
};

export default BixoDisplay;