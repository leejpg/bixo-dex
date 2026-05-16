import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import BixoDisplay from './components/BixoDisplay';
import { bixomons } from './db';
import './App.css';

function App() {
  // Estado para armazenar o Pokémon selecionado
  const [selectedBixomon, setSelectedBixomon] = useState(bixomons[0]);

  const handleSelect = (poke) => {
    console.log("Clique detectado no App! Pokémon:", poke.name);
    setSelectedBixomon(poke);
  };

  return (
    <div className="app-container">
      {/* Passamos a função de mudar o pokemon para a Sidebar */}
      <Sidebar onSelect={handleSelect} />

      <main className="main-content">
        <BixoDisplay pokemon={selectedBixomon} />
      </main>
    </div>
  );
}

export default App;