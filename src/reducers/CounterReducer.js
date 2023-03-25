import { increment, decrement, reset } from "../Action";
const initialState = {
    count: 0
}

export default function CounterReducer(state = initialState, action){
    switch(action.type){
        case increment:
            return {...state, count: state.count + 1};
        case decrement:
            return {...state, count: state.count - 1};
        case reset:
            return {...initialState};
        default:
            return state;
    }

}