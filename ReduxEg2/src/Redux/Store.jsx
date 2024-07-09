import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Counter.jsx';


export default configureStore({
    reducer: {
        counter: counterReducer
    }
})