import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";

export interface State {
    isAuth: boolean,
    user: IUser,
    isLoading: boolean,
    error: string
}


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        user: {
            username: '',
            password: ''
        },
        isLoading: true,
        error: '',
    } as State,
    reducers: {
        authorization(state: State) {
            state.isAuth = !state.isAuth
        },
        setError(state: State, {payload}: PayloadAction<string>) {
            state.error = payload
        },
        setUser(state: State, {payload}: PayloadAction<IUser>) {
            state.user.username = payload.username
            state.user.password = payload.password

        },
        setIsLoading(state: State, action: PayloadAction<string>) {

        }
    }
})

export const authReducer = authSlice.reducer;
export const {authorization, setUser, setError, setIsLoading} = authSlice.actions;
