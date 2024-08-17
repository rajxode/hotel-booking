import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

interface initialStateInterface {
    count: number;
}

const initialState : initialStateInterface = {
    count: 0,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCount: (state,action) => {
            state.count += action.payload;
        }
    }
})

export const authReducer = authSlice.reducer;

export const { setCount } = authSlice.actions;

export const authSelector = (state:RootState) => state.authReducer;