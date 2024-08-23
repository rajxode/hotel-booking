
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import axiosInstance from "@/utils/axiosInstance";
import { InitialStateInterface, SignUpInterface, SignInInterface } from "@/redux/reducers/Authentication/authInterface";

const initialState : InitialStateInterface = {
    authLoading: false,
    user:null!,
}

export const signUpThunk = createAsyncThunk(
    'auth/signUp',
    async(data: SignUpInterface, thunkAPI) => {
        try {
            const result = await axiosInstance.post('/user/create-account', data);
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
            const result = await axiosInstance.post('/user/login', data);
            if(result?.data) {
                const {success} = result?.data;
                if(success) {
                    thunkAPI.dispatch(setUser(result?.data?.user));
                    localStorage.setItem("token", result?.data?.token);
                }
            }
            return result?.data;
        } catch (error:any) {
            console.log('error in signin', error.message);
        }
    }
)

export const signOutThunk = createAsyncThunk(
    'auth/signOut',
    async(args, thunkAPI)  => {
        try {
            const result = await axiosInstance.get('/user/logout');
            if(result?.data?.success) {
                thunkAPI.dispatch(setUser(null));
                localStorage.removeItem("token");
            }
            return result?.data?.success;
        } catch (error:any) {
            console.log('error in signout', error.message);
        }
    }
)

export const getMyDataThunk = createAsyncThunk(
    'auth/getMyData',
    async ( args, thunkAPI) => {
        try {
            const result = await axiosInstance.get("/user/get-my-data");
            if(result?.data?.success) {
                thunkAPI.dispatch(setUser(result?.data?.user));
            }
        } catch (error:any) {
            console.log("error in getting user's data", error.message);
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(signUpThunk.pending , (state, action) => {
            state.authLoading = true;
        })
        .addCase(signUpThunk.fulfilled || signUpThunk.rejected, (state,action) => {
            state.authLoading = false;
        })
        .addCase(signInThunk.pending , (state, action) => {
            state.authLoading = true;
        })
        .addCase(signInThunk.fulfilled || signInThunk.rejected, (state,action) => {
            state.authLoading = false;
        })
        .addCase(signOutThunk.pending , (state, action) => {
            state.authLoading = true;
        })
        .addCase(signOutThunk.fulfilled || signOutThunk.rejected, (state,action) => {
            state.authLoading = false;
        })
        .addCase(getMyDataThunk.pending , (state, action) => {
            state.authLoading = true;
        })
        .addCase(getMyDataThunk.fulfilled || getMyDataThunk.rejected, (state, action) => {
            state.authLoading = false;
        })
    }
})

export const authReducer = authSlice.reducer;

export const { setUser } = authSlice.actions;

export const authSelector = (state:RootState) => state.authReducer;