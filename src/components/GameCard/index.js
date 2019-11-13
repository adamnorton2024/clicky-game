import React from 'react';

function GameCard(props){
    return(
        <div>
            <img src={props.image} alt={props.name} />
        </div>
    );
};

export default GameCard;