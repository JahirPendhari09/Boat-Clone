import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducers/reducer";
import { reducer as productReducer } from "./productReducers/reducer";
import { thunk } from "redux-thunk";

const allReducers =combineReducers({
    authReducer,productReducer
})

const store = legacy_createStore(allReducers, applyMiddleware(thunk));

export {store}