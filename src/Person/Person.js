import React from 'react';
import './Person.css';

const person = ({name, age, children, click, change}) => {
    // return <p>Hello, I'm Person and I have {Math.floor(Math.random() * 30)} years old</p>
    return (
        <div className='person'>
            <p onClick={click}>Hello, I'm {name} and I have {age} years old</p>
            <p>{children}</p>
            <input type="text" onChange={change} value={name}/>
        </div>
    )
};

export default person;