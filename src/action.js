import * as actions from './actionType';

// action creators
export const onIncrement = (value) => {
    console.log(value);
    // return action
    return {
        type: actions.INC,
        payload: value
    }
}


export const onDecrement = (val) => {
    console.log(val);
    return {
        type: actions.DEC,
        payload: val
    }
}
