import React, {Component} from 'react';
import './App.css';
import Container from './components/Container';
import Jumbotron from './components/Jumbotron';
import GameCard from './components/GameCard';
import images from './images.json';
let shuffle = require('shuffle-array');

let imgArray = [];

class App extends Component {


  //  Starting/Reset Values
  state = {
    currentScore: 0,
    topScore: 0,
    gameMessage: "",
    clicked: [],
    images,
    gameOver: false
  };



  // Render first set of images and starting game message
  componentDidMount() {
    for (let i = 0; i < images.length; i++) {
      imgArray.push(images[i]);
    };

    shuffle(imgArray);

    this.setState({gameMessage: "Click each image one time to win. If you click on twice, you lose."})
  };



  // Shuffle and Redraw Images
  shuffleImageArray = () => {
    imgArray = [];

    for (let i = 0; i < images.length; i++) {
      imgArray.push(images[i]);
    };

    shuffle(imgArray);

  }



  // When image is clicked, increment score by 1, add image to array. 
  clickedImage = (id) => {
    console.log(`image ${id} clicked!`);
    if(!this.state.clicked.includes(id)){
      this.increaseScore();
      this.state.clicked.push(id);
      this.setState({
        gameOver: false
      });
    } else {
      this.resetGame();
    }
  };



  // Increase Score by 1
  increaseScore = () => {
    let score = this.state.currentScore + 1;
    if(score === this.state.images.length) {
      this.setState({
        topScore: score,
        currentScore: 0,
        gameMessage: "You win! Click an image to play again!",
        clicked: [],
        images,
        gameOver: false
      });
    } else if(score > this.state.topScore) {
      this.setState({
        topScore:score,
        currentScore: score,
        gameMessage: "New High Score!"
      });
    } else {
      this.setState({
        currentScore: score,
        gameMessage: "Correct!"
      });
    }
    this.shuffleImageArray();
  };


  // Lose and Reset Game
  resetGame = () => {
    this.setState({
      points: 0,
      currentScore: 0,
      topScore: this.state.topScore,
      gameMessage: "Wrong! Click an image to start over...",
      clicked: [],
      images,
      gameOver: true
    });
    // console.log("Game Over");
    this.shuffleImageArray();
  };


  render(){
    return (
      <div>
        <Jumbotron 
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          gameMessage={this.state.gameMessage}
        />
        <Container>
          {imgArray.map(character =>
            <GameCard
              image={character.image}
              name={character.name}
              id={character.id}
              clickedImage={this.clickedImage}
            />
          )}
        </Container>
      </div >
    );
  }

};

export default App;
