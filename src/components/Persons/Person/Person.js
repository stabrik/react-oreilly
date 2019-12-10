import React, { Component } from 'react';
//import Radium from "radium";
import './Person.css';

class Person extends Component {
    // return <p>Hello, I'm Person and I have {Math.floor(Math.random() * 30)} years old</p>
    // const style = {
    //     '@media(min-width: 500px)':{
    //         width: '450px',
    //     }
    //
    // }

    // const rnd = Math.random();
    // if ( rnd > 0.7){
    //     throw new Error(' Something went wrong');
    // }
    render(){
        console.log('[Person.js] rendering...')

        return (
            <div className='person' > {/*style={style}*/}
                <p onClick={this.props.click}>Hello, I'm {this.props.name} and I have {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}/>
            </div>
        )
    }


};

export default Person;
// export default Radium(person);