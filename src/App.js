import React from 'react';
import './App.css';
import Container from './components/Container';
import Jumbotron from './components/Jumbotron';
import Counter from './components/Counter';
import GameCard from './components/GameCard';
import images from './images.json';
let shuffle = require('shuffle-array');

let imgArray = [];

for (let i = 0; i < images.length; i++) {
  imgArray.push(images[i]);
};

shuffle(imgArray);



function App() {
  return (
    <div>
      <Jumbotron>
        <Counter />
      </Jumbotron>
      <Container>
      {imgArray.map(character =>
        <GameCard 
          image={character.image} 
          name={character.name}
          id={character.id}
          clicked={character.clicked}
           />
      )}
      </Container>
    </div>
  );
  
};

export default App;
