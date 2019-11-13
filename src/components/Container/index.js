import React from 'react';

function Container(props){
    return <div className="container d-flex flex-wrap justify-content-center">
        {props.children}
    </div>;
};

export default Container;