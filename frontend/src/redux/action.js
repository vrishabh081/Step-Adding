import axios from "axios";
import * as types from "./actionType";

// post function for adding two numbers-
export const addTwoNumber = (data) => (dispatch) =>{
    dispatch({type: types.REQUEST_ADD_NUMBER})
    return axios.post('https://dark-gold-bee-tutu.cyclic.app/carry-sum', data)
            .then(res=>{
                dispatch({type: types.SUCCESS_ADD_NUMBER, payload: res.data})
            })
            .catch(err=>{
                console.log(err)
                dispatch({type: types.ERROR_ADD_NUMBER})
            })
}