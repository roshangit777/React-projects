import {configureStore} from "@reduxjs/toolkit";
import jokeSlice from "./jokeSlice";

const jokeStore=configureStore({
    reducer: {
        joke: jokeSlice.reducer
    }
})

export default jokeStore;