import {FunctionComponent} from "react";

const Header: FunctionComponent = () =>{
    return (
        <header className="lg:mx-[20rem] md:mx-[7rem] p-[3rem] text-center border-b-2 border-b-[#fae6ff] shadow-bottom-md">
            <h1 className="md:text-[6rem] text-[5rem] font-serif text-primary font-bold">Typing Test</h1>
        </header>)
}

export default Header;