import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        // increment: (state)=> {state.count += 1},
        decrement: (state, action)=> {
            if(action.payload){
                state.count -= action.payload; 

           }else{
                state.count -= 1;
           }
            
        },

        incrementByamount: (state,action) => {
            if(action.payload){
                 state.count += action.payload; 

            }else{
                 state.count += 1;
            }
        //    state.count =  Number(state.count) + Number(action.payload);    payload is a prop u want the reducer function to do, thou not specified here. but will be stated in the render file with dispatch.
        // console.log(typeof Number(state.count), typeof action.payload)
        //  state.count += action.payload; 

        },
        reset: (state)=> {state.count = 0}

    }
});

export const {increment,decrement, incrementByamount, reset} = counterSlice.actions;

export default counterSlice.reducer;