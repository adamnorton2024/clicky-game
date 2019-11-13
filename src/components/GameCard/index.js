import React from 'react';

function GameCard(props){
    return(

        <div className="card col-md-3 text-dark p-0" id={props.id}>
            <img src={props.image} className="card-img-top img-fluid" alt={props.name} />
        </div>      
    );
};

export default GameCard;