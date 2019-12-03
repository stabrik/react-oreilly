import React from 'react';
//import Radium from "radium";
import './Person.css';

const person = ({name, age, children, click, change}) => {
    // return <p>Hello, I'm Person and I have {Math.floor(Math.random() * 30)} years old</p>
    // const style = {
    //     '@media(min-width: 500px)':{
    //         width: '450px',
    //     }
    //
    // }

    const rnd = Math.random();
    if ( rnd > 0.7){
        throw new Error(' Something went wrong');
    }
    return (
        <div className='person' > {/*style={style}*/}
            <p onClick={click}>Hello, I'm {name} and I have {age} years old</p>
            <p>{children}</p>
            <input type="text" onChange={change} value={name}/>
        </div>
    )
};

export default person;
// export default Radium(person);