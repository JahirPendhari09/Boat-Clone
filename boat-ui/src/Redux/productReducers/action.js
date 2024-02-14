import axios from "axios";
import { ISERROR, ISLOADING } from "../actionTypes";

const url = "https://boat-lifestyle-jp.onrender.com/products";


export  const getProducts =(value, type ,limit = 4)=> (dispatch) => {
    dispatch({type:ISLOADING});
    axios.get(`${url}?name=${value}&limit=${limit}`)
        .then((res) => dispatch({ type, payload:res.data.products}))
        .catch(err => dispatch({type:ISERROR}))   
}
