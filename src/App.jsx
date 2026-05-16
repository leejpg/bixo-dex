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

  const handleSelect = (poke) => {
    console.log("Clique detectado no App! Pokémon:", poke.name);
    setSelectedBixomon(poke);
  };

  return (
    <div className="app-container">
      {/* Passamos a função de mudar o pokemon para a Sidebar */}
      <Sidebar onSelect={handleSelect} />

      <main className="main-content">
        <BixoDisplay 
          pokemon={selectedBixomon} 
          onOpenDetails={() => setIsPanelOpen(true)}
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