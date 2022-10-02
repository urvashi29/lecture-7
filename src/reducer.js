import * as actions from './actionType';

//central storage store (state)
const initState = {
    count: 0,
    posts: []
}

const reducer = (state = initState, action) => {
    console.log(action);
    console.log(state);

    switch (action.type) {
        case actions.INC:
            console.log(action);
            return { ...state, count: state.count + action.payload };
        case actions.DEC:
            console.log(action);
            return { ...state, count: state.count - action.payload };
        case actions.GET_POST:
            console.log('data rec');
            return { ...state, posts: action.payload.httpResponse }
        default:
            return state;
    }
}

export default reducer;