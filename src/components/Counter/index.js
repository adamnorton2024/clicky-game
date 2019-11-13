import React from 'react';

class Counter extends React.Component {
    
    state = {
        count: 0
    }; 

    render(){
        return(
            <div className="card text-center">
                <div className="card-header bg-dark text-white">
                    Score
                </div>
                <div className="card-body">
                    <h1>0</h1>
                </div>
            </div>
        );
        
    }
}

export default Counter;