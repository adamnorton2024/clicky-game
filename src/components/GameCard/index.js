import React from 'react';

function GameCard(props){
    return(
        
        <div className="col-xs-4 col-sm-3 col-lg-2 text-dark p-0" id={props.id}>
            <button type="button" className="btn">
                <img src={props.image} className="img-fluid rounded" alt={props.name} />
                <p>Clicked = {props.clicked.toString()}</p>
            </button>
        </div>     
    );
};

export default GameCard;