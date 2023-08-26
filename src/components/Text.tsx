import {FunctionComponent, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {fetchText, setText, setCurrentCharIndex, increasePressingCount, setMistakes} from "../redux/store/textSlice";
import {setIsTimerOn} from "../redux/store/timerSlice";
import {getCurrentChar, compareChars} from "../helpers/charTransform";
import {setIsTestFinished} from "../redux/store/testSlice";

const Text: FunctionComponent = () =>{
    const dispatch = useAppDispatch();
    const text = useAppSelector(state => state.textSlice.text);
    const isLoading = useAppSelector(state => state.textSlice.isLoading);
    const error = useAppSelector(state => state.textSlice.error);
    const currentCharIndex = useAppSelector(state => state.textSlice.currentCharIndex);
    const mistakes = useAppSelector(state => state.textSlice.mistakes);
    const pressingCount = useAppSelector(state => state.textSlice.pressingCount);
    const sentences = useAppSelector(state => state.testSlice.sentences);

    useEffect(() => {
            dispatch(fetchText(sentences));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [dispatch]);

    useEffect(() => {
        const newText = getCurrentChar(text, currentCharIndex);
        dispatch(setText(newText));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, currentCharIndex]);

    useEffect(() => {
        if(pressingCount === 0 && text.length > 0){
            dispatch(setIsTimerOn(true));
        }
        if(currentCharIndex < text.length){
            const keyPressHandler = (event: KeyboardEvent) =>{
                const [newText, newCurrentIndex, newMistakes] = compareChars(text, currentCharIndex, event.key, mistakes);

                dispatch(setCurrentCharIndex(newCurrentIndex));
                dispatch(setText(newText));
                dispatch(setMistakes(newMistakes));
                dispatch(increasePressingCount());

                if(newCurrentIndex === text.length){
                    dispatch(setIsTimerOn(false));
                    dispatch(setIsTestFinished(true));
                }
            }
            document.addEventListener("keypress", keyPressHandler);

            return () =>{
                document.removeEventListener("keypress", keyPressHandler);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, text]);

    return(
        <div className="max-w-[100vw] p-[3rem] py-[10rem] md:text-[2rem] text-primary text-[1.7rem] tracking-[2px] shadow-md border-2 border-purple-50">
            {
                error &&
                    <p>{error}</p>
            }
            {
                isLoading
                    ? <p className="self-start justify-self-center text-center">Loading text...</p>
                    :   <div className="self-center">
                        {
                            text.map((item, index) =>{
                                return <span className={item.class} key={index}>{item.char}</span>
                            })
                        }
                        </div>
            }
        </div>
    );
};

export default Text;