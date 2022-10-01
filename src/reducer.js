import * as actions from './actionType';

//central storage store
const initState = {
    count: 0
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
        default:
            return state;
    }
}

export default reducer;