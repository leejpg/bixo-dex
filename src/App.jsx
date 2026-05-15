import React from 'react';
import Sidebar from './components/Sidebar'; // Ajuste o caminho conforme sua pasta
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* A nossa barra lateral */}
      <Sidebar />

      {/* Área principal do site */}
      <main className="main-content">
        <section className="pokemon-display">
          {/* Aqui é onde a mágica vai acontecer depois! */}
          <div className="placeholder-card">
            <p>Nenhum Pokémon selecionado</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;