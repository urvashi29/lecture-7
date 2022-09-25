import React, { Component } from "react";
import { connect } from 'react-redux';

class CounterTwo extends Component {

    render() {
        return (
            <React.Fragment>
                <p>{this.props.counter}</p>
            </React.Fragment>
        )
    }
}

//get the data from central storage(store/state)
const mapStateToProps = state => {
    return {
        counter: state.count
    }
}


export default connect(mapStateToProps, null)(CounterTwo);