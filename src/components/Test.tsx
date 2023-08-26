import {FunctionComponent} from "react";
import Text from "./Text";
import Stats from "./Stats";
import ModalView from "./ui/ModalView";
import Button from "./ui/Button";

import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {resetSeconds} from "../redux/store/timerSlice";
import {setIsTestFinished, resetTestState} from "../redux/store/testSlice";
import {restoreText} from "../helpers/charTransform";
import {resetTextState, setText} from "../redux/store/textSlice";

const Test: FunctionComponent = () =>{
    const dispatch = useAppDispatch();
    const isTestFinished = useAppSelector(state => state.testSlice.isTestFinished);
    const text = useAppSelector(state => state.textSlice.text);

    function restart(){
        dispatch(resetTextState());
        // @ts-ignore
        dispatch(resetSeconds());
        dispatch(setText(restoreText(text)));

        if(isTestFinished){
            dispatch(setIsTestFinished(false));
        }
    }
    function newTest() {
        dispatch(resetTestState());
        // @ts-ignore
        dispatch(resetSeconds());
    }

    return (
        <section className="grid md2:grid-cols-customGrid grid-cols-1 text-center gap-[3rem]">
            {
                isTestFinished &&
                    <ModalView title={"Test Completed!"} >
                        <Stats />
                        <Button btnText={"restart"} onClick={restart}/>
                        <Button btnText={"new test"} onClick={newTest}/>
                    </ModalView>
            }
            <Text />
            <Stats>
                <Button btnText={'restart'} onClick={restart} onFocus={event => event.target.blur()}/>
            </Stats>
        </section>
    )
}

export default Test;