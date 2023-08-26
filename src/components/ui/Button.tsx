import {FunctionComponent, ComponentPropsWithoutRef} from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button">{
    btnText: String;
}

const Button: FunctionComponent<ButtonProps> = ({btnText, ...props}) =>{
    return (
        <button className="m-[2rem] px-[4rem] py-8 text-3xl rounded-lg tracking-[1px] uppercase bg-primary text-white transition ease-in duration-200 hover:text-primary hover:bg-white hover:shadow-inside-border" {...props}>{btnText}</button>
    )
}

export default Button;