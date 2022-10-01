import React, { Component } from 'react';
import Counter from './Counter';
import CounterTwo from './CounterTwo';

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Counter />
                <CounterTwo />
            </React.Fragment>
        )
    }
}

export default App;

// task
// create a form (name, age, email, password) and store that data as a object inside array in store


