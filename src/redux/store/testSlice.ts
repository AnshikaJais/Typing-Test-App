import {createSlice, Slice, PayloadAction} from "@reduxjs/toolkit";

type TestState = {
    isTestStarted: boolean;
    isTestFinished: boolean;
    sentences: string;
}

const initialState: TestState = {
    isTestStarted: false,
    isTestFinished: false,
    sentences: "4"
}

const testSlice: Slice<TestState, {}> = createSlice({
    name: "testSlice",
    initialState,
    reducers:{
        setIsTestStarted(state: { isTestStarted: boolean; }, action: PayloadAction<boolean>){
            state.isTestStarted = action.payload;
        },
        setIsTestFinished(state: { isTestFinished: boolean; }, action: PayloadAction<boolean>){
            state.isTestFinished = action.payload;
        },
        setSentences(state: { sentences: string; }, action:PayloadAction<string>){
            state.sentences = action.payload;
        },
        resetTestState(state: { isTestStarted: boolean; isTestFinished: boolean; sentences: string; }){
            state.isTestStarted = false;
            state.isTestFinished = false;
            state.sentences = '4';
        }
    }
});

// @ts-ignore
export const {setIsTestStarted, setIsTestFinished, setSentences, resetTestState} = testSlice.actions;
export default testSlice.reducer;