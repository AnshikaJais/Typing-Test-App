import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";

type TimerState = {
    isTimerOn: boolean;
    seconds: number;
}

const initialState = {
    isTimerOn: false,
    seconds: 0
}

const timerSlice: Slice<TimerState> = createSlice({
    name: "timerSlice",
    initialState,
    reducers: {
        setIsTimerOn(state, action: PayloadAction<boolean>){
            state.isTimerOn = action.payload;
        },
        increaseSeconds(state){
            state.seconds += 1;
        },
        resetSeconds(state){
            state.seconds = 0;
        }
    }
})
export const {setIsTimerOn, increaseSeconds, resetSeconds} = timerSlice.actions;

export default timerSlice.reducer;