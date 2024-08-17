
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import axiosInstance from "@/utils/axiosInstance";
import { InitialStateInterface, SignUpInterface, SignInInterface } from "@/redux/reducers/Authentication/authInterface";

const initialState : InitialStateInterface = {
    authLoading: false,
}

export const signUpThunk = createAsyncThunk(
    'auth/signUp',
    async(data: SignUpInterface, thunkAPI) => {
        try {
            const result = await axiosInstance.post('/create-account', data);
            return result?.data;
        } catch (error : any) {
            console.log('error in signup', error.message);
        }
    }
)

export const signInThunk = createAsyncThunk(
    'auth/signIn',
    async(data: SignInInterface, thunkAPI) => {
        try {
            const result = await axiosInstance.post('/login', data);
            return result?.data;
        } catch (error:any) {
            console.log('error in signin', error.message);
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(signUpThunk.pending , (state, action) => {
            state.authLoading = true;
        })
        .addCase(signUpThunk.fulfilled || signUpThunk.rejected, (state,action) => {
            state.authLoading = false;
        })
    }
})

export const authReducer = authSlice.reducer;

export const authSelector = (state:RootState) => state.authReducer;