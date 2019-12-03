import React, {Component} from 'react';
// import Radium, {StyleRoot} from "radium";
// import React, {useState} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons : [
            {name: 'Kasia' , age: 24, id: 1},
            {name: 'Paweł' , age: 28, id: 2},
        ],
        someValue: 'some val',
        showPerson: false,
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

    nameChangeHandler = (event, index) => {
        // console.log('click')
        const personIndex = this.state.persons.findIndex(p => {return p.id === index});
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const person2 = [...this.state.persons];
        person2[personIndex] = person;

        this.setState({persons:person2})
        // this.setState( {
        //     persons : [
        //         {name: 'Kasia' , age: 24},
        //         {name: event.target.value , age: 28},
        //     ]
        // })
    }

    togglePersonHandler = () => {
        //let current = !showPerson
        this.setState({
            showPerson : !this.state.showPerson
        })
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons: persons})
    }
    render(){
        const styleBtn = {
            backgroundColor: 'white',
            border: '1px solid green',
            padding: '8px',
            borderRadius: '4px',
            color: 'green'
            // ':hover': {
            //     backgroundColor: 'green',
            //     color: 'white',
            // }
        };

        let persons = null;
        if(this.state.showPerson){
            persons = (
                <div>
                    return <Persons persons={this.state.persons}
                                   clicked={this.deletePersonHandler}
                                   changed={this.nameChangeHandler} />
                </div>
            )
            styleBtn.backgroundColor = 'pink';
            // styleBtn[':hover'] = {
            //     backgroundColor: 'red',
            //     color: 'white',
            // }
        }



        return (
                <div className= "App">
                    <Cockpit persons={ this.state.persons}
                    clicked={this.togglePersonHandler}/>
                    {persons}
                </div>
        )
      // React.createElement('div', {className : 'App'} , React.createElement('h1', null, 'Czy dziala?'))
    }
}

export default App;
// export default Radium(App);
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