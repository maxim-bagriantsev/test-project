import {configureStore} from "@reduxjs/toolkit";
import {mbaApi} from "@store/mba/api";

export const store = configureStore({
    reducer: {
        [mbaApi.reducerPath]: mbaApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mbaApi.middleware)
})