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




