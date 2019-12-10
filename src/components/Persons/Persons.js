import React, {Component} from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends Component {
    static getDerivedStateFromProps(props,state){
        console.log('[Persons,js] getDerivedStateFromProps',props)
        return true;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons,js] shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons,js] getSnapshotBeforeUpdate')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons,js] componentDidUpdate')
    }

    render(){
        console.log('[Persons.js] rendering...');

        return(
            this.props.persons.map( (person, index) =>{
                return <ErrorBoundary key={person.id}>
                    <Person
                        click={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}
                        change={(event) => this.props.changed(event, person.id)}
                    />
                </ErrorBoundary>
            })
        )
    }


}

export default Persons;