import React, {FunctionComponent, useState, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {increaseSeconds} from "../redux/store/timerSlice";

import {speedCounting, accuracyCounting} from "../helpers/statsCounting";

type StatProps = {
    children? : React.ReactElement | React.ReactElement[];
}

const Stats: FunctionComponent<StatProps> = ({children}) =>{
    const dispatch = useAppDispatch();
    const mistakes = useAppSelector(state => state.textSlice.mistakes);
    const pressingCount = useAppSelector(state => state.textSlice.pressingCount);
    const seconds = useAppSelector(state => state.timerSlice.seconds);
    const isTimerOn = useAppSelector(state => state.timerSlice.isTimerOn);

    const [speed, setSpeed] = useState("0.00");
    const [accuracy, setAccuracy] = useState("0.00");

    useEffect(() => {
        const correctLetters = pressingCount - mistakes;
        setAccuracy(accuracyCounting(mistakes, pressingCount));
        setSpeed(speedCounting(correctLetters, seconds));

    }, [mistakes, pressingCount, seconds]);

    useEffect(() => {
        if(isTimerOn){
            const timer = setTimeout(()=>{
                dispatch(increaseSeconds());
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isTimerOn, seconds, dispatch]);

    return (
        <div className="w-[100%] justify-self-center pt-[6rem] border-2 shadow-md border-purple-50 flex flex-col items-center leading-[3rem] md:text-[2.5rem] text-[2rem] text-primary uppercase">
            <div className="mb-[3rem] ">
                <p className="mb-[3rem]">speed</p>
                <p className="mb-[3rem]">{speed} WPM</p>
            </div>
            <div className="mb-[3rem]">
                <p className="mb-[3rem]">accuracy</p>
                <p className="mb-[3rem]">{accuracy} %</p>
            </div>
            {children}
        </div>
    )
}

export default Stats;