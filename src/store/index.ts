import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./reducers/auth";



let reducers = combineReducers({
    authReducer
})

export const store = configureStore({
    reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
