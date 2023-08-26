import React, {FunctionComponent} from 'react';

import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import Test from "./components/Test";
import Button from "./components/ui/Button";
import ModalView from "./components/ui/ModalView";
import Select from "./components/ui/Select";

import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {setIsTestStarted, setSentences} from "./redux/store/testSlice";


const sentenceOptions = [
    { value: '1', name: '1'},
    { value: '2', name: '2'},
    { value: '3', name: '3'},
    { value: '4', name: '4'},
    { value: '5', name: '5'},
]

const App: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const isTestStarted = useAppSelector(state => state.testSlice.isTestStarted)
    const testStateToggle = () => dispatch(setIsTestStarted(true));
    const changeSentence = (value:string) => dispatch(setSentences(value));
  return (
    <>
      <Header/>
      <main className="lg:mx-[20rem] my-[7rem] md:mx-[7rem] mx-[2.5rem]">
          {
              isTestStarted
                  ? <Test />
                  : <ModalView title={"Take a typing test"}>
                        <label className="block text-3xl mb-[3rem] text-secondary" htmlFor="numOfSentences">Choose number of sentences</label>
                        <Select defaultValue={'4'} options={sentenceOptions} id="numOfSentences" onChange={(e) => changeSentence(e.target.value)}/>
                        <Button btnText={"Start"} onClick={testStateToggle}/>
                    </ModalView>
          }
      </main>
      <Footer/>
    </>
      );
}

export default App;
