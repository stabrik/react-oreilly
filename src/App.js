import React, {Component} from 'react';
// import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons : [
            {name: 'Kasia' , age: 24},
            {name: 'Paweł' , age: 28},
        ],
        someValue: 'some val'
    }

    switchNameHandler = (newName) => {
        // console.log('click')
        this.setState( {
            persons : [
                {name: newName , age: 24},
                {name: 'Paweł' , age: 28},
            ]
        })
    }

    nameChangeHandler = (event) => {
        // console.log('click')
        this.setState( {
            persons : [
                {name: 'Kasia' , age: 24},
                {name: event.target.value , age: 28},
            ]
        })
    }
    render(){
        const styleBtn = {
            backgroundColor: 'white',
            border: '1px solid green',
            padding: '8px',
            borderRadius: '4px',
            color: 'green',
        }

        return (
            <div className="App">
                <h1>Hi, I'm React App</h1>
                <button style={styleBtn} onClick={() => this.switchNameHandler('Katarzyna!')}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Kasia!')}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.nameChangeHandler}/>
            </div>
        );
      // React.createElement('div', {className : 'App'} , React.createElement('h1', null, 'Czy dziala?'))
    }
}

export default App;
// const App = props => {
//     const [personsState, setPersonsState] = useState({
//         persons : [
//             {name: 'Kasia' , age: 24},
//             {name: 'Paweł' , age: 28},
//         ],
//         someValue: 'some val'
//     });
//
//     const switchNameHandler = () => {
//         // console.log('click')
//         setPersonsState( {
//             persons : [
//                 {name: 'Katarzyna' , age: 24},
//                 {name: 'Paweł' , age: 28},
//             ]
//         })
//     }
//
//     return (
//         <div className="App">
//             <h1>Hi, I'm React App</h1>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//             <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//         </div>
//     );
//     // React.createElement('div', {className : 'App'} , React.createElement('h1', null, 'Czy dziala?'))
// }