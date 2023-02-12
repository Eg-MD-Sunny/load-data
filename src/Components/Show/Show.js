import React from 'react';

const Show = (props) => {
    const {id,name,img}=props.passingData;
    return (
        <div>
            <h3>ID: {id}</h3>
            <p>Name: {name}</p>
            <img src={img} alt=""></img>
        </div>
    );
};

export default Show;