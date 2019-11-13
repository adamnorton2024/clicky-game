import React from 'react';

function Container(props){
    return <div className="container col-sm-12 d-flex flex-wrap justify-content-center">
        {props.children}
    </div>;
};

export default Container;