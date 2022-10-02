import React, { Component } from "react";
import { connect } from 'react-redux';
import { onIncrement, onDecrement } from './action';

class Counter extends Component {
    state = {

    }

    handleClick = () => {
        this.props.onInc(2);
    }
    handleClickDec = () => {
        this.props.onDec(1);
    }

    render() {
        return (
            <React.Fragment>
                <p>{this.props.counter}</p>
                <button onClick={this.handleClick}>Increment</button>
                <button onClick={this.handleClickDec}>Decrement</button>
            </React.Fragment>
        )
    }
}

//get the data from central storage(store/state)
const mapStateToProps = state => {
    console.log(state);
    return {
        counter: state.count
    }
}

//send the data to store
const mapDispatchToProps = (dispatch) => {
    return {
        onInc: (value) => dispatch(onIncrement(value)),
        onDec: (val) => dispatch(onDecrement(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

