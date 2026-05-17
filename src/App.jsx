import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import BixoDisplay from './components/BixoDisplay.jsx';
import BixoDetailsPanel from './components/BixoDetailsPanel.jsx'; // Importa o novo painel
import { bixomons } from './db';
import './App.css';

function App() {
  // Estado para armazenar o Pokémon selecionado
  const [selectedBixomon, setSelectedBixomon] = useState(bixomons[0]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorite = (pokemon) => {
    setFavorites((prev) => {
      if (prev.some(fav => fav.id === pokemon.id)) {
        return prev.filter(fav => fav.id !== pokemon.id);
      }

      return [...prev, pokemon]
    });

  }

  const handleSelect = (poke) => {
    console.log("Clique detectado no App! Pokémon:", poke.name);
    setSelectedBixomon(poke);
  };

  return (
    <div className="app-container">
      {/* Passamos a função de mudar o pokemon para a Sidebar */}
      <Sidebar 
        onSelect={handleSelect} 
        favorites={favorites}
      />

      <main className="main-content">
        <BixoDisplay 
          pokemon={selectedBixomon} 
          onOpenDetails={() => setIsPanelOpen(true)}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={favorites.some(fav => fav.id === selectedBixomon?.id)}
        />
      </main>

      <BixoDetailsPanel 
        pokemon={selectedBixomon} 
        isOpen={isPanelOpen} 
        onClose={() => setIsPanelOpen(false)}
      />
    </div>
  );
}

export default App;