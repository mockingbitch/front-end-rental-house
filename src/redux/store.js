import { configureStore, combineReducers, Tuple } from '@reduxjs/toolkit';
import authReducer from './slides/authSlide';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer,
});

const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['auth']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: () => [thunk],
})
// export const persistor = persistStore(store)