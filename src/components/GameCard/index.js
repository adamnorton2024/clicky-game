import React from 'react';

function GameCard(props){
    return(
        
        <div className="col-xs-4 col-sm-3 col-lg-2 text-dark p-0 mt-2" id={props.id}>
            <button type="button" className="btn" onClick={() => props.clickedImage(props.id)}>
                <img src={props.image} className="img-fluid rounded" alt={props.name} />
            </button>
        </div>     
    );
};

export default GameCard;