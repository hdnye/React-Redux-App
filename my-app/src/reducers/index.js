import { FETCHING_PICS, SUCCESS } from '../actions';


const initialState = {
    pic: null,
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_PICS: 
        return {
            ...state,
            isFetching: true,
            error: ''
        };
       
        case SUCCESS: 
        return {
            ...state,
            isFetching: false,
            pic: action.payload
        };
        default: 
         return state;
    }
};
