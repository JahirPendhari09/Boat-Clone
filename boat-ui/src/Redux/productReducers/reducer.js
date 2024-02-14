import { GET_AIRDROPS, GET_HEADPHONES, GET_PARTY_SPEAKERS, GET_PRODUCTS, GET_SOUND_BARS, GET_SPEAKERS, GET_WATCHES, ISERROR, ISLOADING, SET_SPECIFIC_PRODUCT } from "../actionTypes";

const initialState = {
    isAuthenticated: false,
    user: null,
    specificProduct:"",
    airdrops:[],
    watches:[],
    speakers:[],
    soundbars:[],
    headphones:[], 
    partySpeakers:[],
    product:[],
    isLoading:false,
    isError:false
  };

  
const reducer =(state=initialState, {type, payload})=>{
    switch(type)
    {
        case ISLOADING : {
            return {...state , isLoading:true }
        }
        case SET_SPECIFIC_PRODUCT : {
            return {...state ,isLoading:false ,  specificProduct:payload}
        }
        case GET_AIRDROPS : {
            return { ...state , isLoading:false , airdrops:payload}
        }
        case GET_SPEAKERS :{
            return { ...state , isLoading:false , speakers:payload}
        }
        case GET_SOUND_BARS : {
            return { ...state , isLoading:false , soundbars:payload}
        }
        case GET_PARTY_SPEAKERS : {
            return { ...state , isLoading:false , partySpeakers:payload}
        }
        case GET_HEADPHONES : {
            return { ...state , isLoading:false , headphones:payload}
        }
        case GET_WATCHES : {
            return {...state , isLoading:false , watches:payload}
        }
        case GET_PRODUCTS : {
            return {...state , isLoading:false , product : payload}
        }
        case ISERROR : {
            return {...state, isLoading:false, isError :true}
        }
        default : {
            return state
        }
    }
}
export {reducer}