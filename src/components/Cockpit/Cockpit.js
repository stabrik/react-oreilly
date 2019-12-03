import React from 'react';

const cockpit = (props) => {
    const classes = [];
    if(props.persons.length <= 2){
        classes.push('red');
    }
    if(props.persons.length <= 1){
        classes.push('bold');
    }

    return(
        <div>
            <h1>Hi, I'm React App</h1>
            <p className={classes.join(' ')}>I's working</p>
            {/*<button onClick={() => this.switchNameHandler('Katarzyna!')}>Switch Name</button>*/}
            <button onClick={props.clicked}>Toggle Name</button>
        </div>
    );
};

export default cockpit;