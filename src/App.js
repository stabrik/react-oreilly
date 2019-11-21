import React, {Component} from 'react';
// import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

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
            color: 'green',
        };

        let persons = null;
        if(this.state.showPerson){
            persons = (
                <div>
                    { this.state.persons.map( (person, index) =>{
                        return <Person
                            key={person.id}
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            change={(event) => this.nameChangeHandler(event, person.id)}
                        />
                    })
                        // <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
                        //         click={this.switchNameHandler.bind(this, 'Kasia!')}/>
                        // < Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                        // change={this.nameChangeHandler}/>
                    }
                </div>
            )
        }

        return (
            <div className="App">
                <h1>Hi, I'm React App</h1>
                <button style={styleBtn} onClick={() => this.switchNameHandler('Katarzyna!')}>Switch Name</button>
                <button style={styleBtn} onClick={this.togglePersonHandler}>Toggle Name</button>
                {persons}
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