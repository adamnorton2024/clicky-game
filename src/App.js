import React from 'react';
import './App.css';
import Container from './components/Container';
import Jumbotron from './components/Jumbotron';
import Counter from './components/Counter';
import GameCard from './components/GameCard';
import images from './images.json';



function App() {
  return (
    <div>
      <Jumbotron>
        <Counter />
      </Jumbotron>
      <Container>
      {images.map(character =>
        <GameCard 
          image={character.image} 
          name={character.name}
          id={character.id} />
      )}
      </Container>
    </div>
  );
  
};

export default App;
