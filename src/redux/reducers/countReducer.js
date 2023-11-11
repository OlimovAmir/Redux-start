import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../type";

const initialState = {
    counts: 0,
}

 const countReducer = (state = initialState, action) => {
    
    switch (action.type) {
    
        case INCREMENT_COUNTER:
            console.log('INCREMENT_COUNTER--->>> ', state)
            return {
                
                ...state,
                counts: state.counts + 1,
                
              };

            case DECREMENT_COUNTER:
                console.log('DECREMENT_COUNTER--->>> ', state)
            return {
                ...state,
                counts: state.counts - 1,
              };
        default:
            return state;
    }
}

export default countReducer;