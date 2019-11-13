import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron.js';
import GameCard from './components/GameCard';
import images from './images.json';


function App() {
  return (
    <div>
      <Jumbotron />
      {images.map(character =>
        <GameCard image={character.image} />
      )}
    </div>
  );
  
};

export default App;
