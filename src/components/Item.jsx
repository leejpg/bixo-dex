import React from 'react';

const Item = ({ pokemon, dispararClique }) => {
  // Gerando a URL da imagem baseada no ID (estática)

  return (
    <div className="pokemon-item" onClick={() => {
        console.log("Clique real detectado no Item!"); 
        dispararClique(pokemon); // Aqui você "liga" de volta para o App
      }}>

      <span className="pokemon-id">#{pokemon.id.toString().padStart(3, '0')}</span>
      
      <span className="pokemon-name">{pokemon.name}</span>
    </div>
  );
};

export default Item;