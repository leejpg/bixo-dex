import React from 'react';

const Item = ({ pokemon }) => {
  // Gerando a URL da imagem baseada no ID (estática)

  return (
    <div className="pokemon-item">
      <span className="pokemon-id">#{pokemon.id.toString().padStart(3, '0')}</span>
      
      <span className="pokemon-name">{pokemon.name}</span>
    </div>
  );
};

export default Item;