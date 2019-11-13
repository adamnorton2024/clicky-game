import React from 'react';
import './App.css';
import Container from './components/Container';
import Jumbotron from './components/Jumbotron';
import GameCard from './components/GameCard';
import images from './images.json';



function App() {
  return (
    <div>
      <Jumbotron />
      <Container>
      {images.map(character =>
        <GameCard 
          image={character.image} 
          name={character.name} />
      )}
      </Container>
    </div>
  );
  
};

export default App;
