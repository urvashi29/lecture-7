import * as actions from './actionType';
import axios from 'axios';

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

// action creators
export const onGetPosts = () => {
    console.log('got data');
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/').then(res => {
            dispatch(
                // self invoking function
                ((data) => {
                    return {
                        type: actions.GET_POST,
                        payload: {
                            httpResponse: data
                        }
                    }
                })(res.data)
            )
        }).catch(err => {
            console.log(err);
        })
    }
}


