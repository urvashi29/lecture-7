import React, { Component } from 'react';
import Counter from './Counter';
import CounterTwo from './CounterTwo';
import ApiData from './ApiData';
import CounterFunction from './CounterFunction';

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Counter />
                <CounterTwo />
                <ApiData />
                <CounterFunction />
            </React.Fragment>
        )
    }
}

export default App;



// task
// create a form (name, age, email, password) and store that data as a object inside array in store



//mini-assignment
// Create an application using React-Redux.
// Take an input(movie) from user and add movie to the movie list.
// Display movie-list.
// Display number of movies below the movie-list.

// Style you Web Application using any framework.
