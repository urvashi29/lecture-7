import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onDecrement } from './action';

const CounterFunction = () => {
    const [first, setFirst] = useState('alina');

    // get the data fom store (central storage state)
    const counter = useSelector((state) => state.count);//(similar to mapStateToProps)
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    // send the data to the store
    const dispatch = useDispatch();////(similar to mapDispatchToProps)

    const handleClick = () => {
        dispatch(onDecrement(1));
    }
    return (
        <div>
            <h4>Function</h4>
            {counter}
            <button onClick={handleClick}>Decrement</button>
        </div>
    )
}

export default CounterFunction;
