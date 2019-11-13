import React from 'react';

function GameCard(props){
    return(

        <div className="card col-md-3 text-dark m-2">
            <img src={props.image} className="card-img-top img-fluid" alt={props.name} />
                <div className="card-body">
                    <p className="card-text">{props.name}</p>
                </div>
        </div>      
    );
};

export default GameCard;