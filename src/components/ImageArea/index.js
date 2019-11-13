import React, {Component} from 'react';
import Container from '../Container/';
import GameCard from '../GameCard/';
import images from '../../images.json';
const shuffle = require('shuffle-array');

let imgArray = [];

class ImageArea extends Component {

    handleClick = name => {

        for (let i = 0; i < images.length; i++) {
            imgArray.push(images[i]);
        };

        shuffle(imgArray);

    };

    render() {
        return (
            <div>
                <Container>
                    {imgArray.map(character =>
                        <GameCard
                            image={character.image}
                            name={character.name}
                            id={character.id}
                            clicked={character.clicked}
                            handleClick={this.handleClick}
                        />
                    )}
                </Container>
            </div>
        );
    }
    
};


export default ImageArea;