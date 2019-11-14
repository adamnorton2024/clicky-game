import React from 'react';

function Jumbotron(props) {
    return(
        <div className="jumbotron jumbotron-fluid bg-dark text-light m-0 p-0">
            <div className="container">
                <row>
                    <h1 className="title">Clicky Caricature</h1>
                </row>
                <row className="d-flex flex-row">
                    <div className="col">
                        <p className="lead">Celebrity Edition</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="lead text-right">Top Score:</p>
                        <p className="lead text-right">Score:</p>
                    </div>
                    <div className="col-sm-1 p-0">
                        <p className="lead ml-0">{props.topScore}</p>
                        <p className="lead">{props.currentScore}</p>
                    </div>
                </row>
                <row>
                    <p className="lead game-message text-center mb-0">{props.gameMessage}</p>
                </row>
            </div>
        </div>
    );
};

export default Jumbotron;


    