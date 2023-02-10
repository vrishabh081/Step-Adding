import * as types from "./actionType";

const initState = {
    isLoading : false,
    payload : [],
    isError : false
}

// reducer function-
export const reducer = (state = initState, action)=>{
    const {type, payload} = action;
    switch(type)
    {
        case types.REQUEST_ADD_NUMBER:
            return {...state, isLoading: true}

        case types.SUCCESS_ADD_NUMBER:
            return {...state, isLoading: false, payload}

        case types.ERROR_ADD_NUMBER:
            return {...state, isLoading: false, isError: true}

        default :
            return {...state}
    }
}