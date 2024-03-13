import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { LoginService, LogoutService } from '../../services/authService'

const initialState = {
    user : {
        access_token : '',
        user : {}
    },
    isLoggedIn : false
};

export const login = createAsyncThunk(
    "auth/login",
    async ({email, password}) => {
        const res = await LoginService({email, password});

        return res;
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (token) => {
        try {
            const res = await LogoutService(token);
            return res;
        } catch (error) {
            return error
        }
    }
)

const authSlide = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload ;
            state.isLoggedIn = true;
        })
        // [login.fulfilled]: (state, action) => {
        //     state.user = action.payload ;
        //     state.isLoggedIn = true;
        // },
        // [logout.fulfilled]: (state, action) => {
        //     state.user = null;
        //     state.isLoggedIn = false;
        // }
    }
})

const { reducer } = authSlide;

export default reducer;