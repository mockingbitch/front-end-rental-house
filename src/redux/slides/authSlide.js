import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { LoginService, LogoutService } from '../../services/authService'

const initialState = {
    user : {
        access_token : '',
        user : {}
    },
    error : {},
    isLoggedIn : false,
    isLoading : false
};

export const login = createAsyncThunk(
    "auth/login",
    async ({email, password}) => {
        let response = await LoginService({email, password});

        return response;
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (token) => {
        try {
            return await LogoutService(token);
        } catch (error) {
            return error
        }
    }
)

const authSlide = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
            console.log('pending');
        })
        .addCase(login.fulfilled, (state, action) => {
            console.log('fullfilled');
            state.user = action.payload ;
            state.isLoading = false;
        }).addCase(login.rejected, (state, action) => {
            console.log('rejected');
            state.error = action.error;
            state.isLoggedIn = false;
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