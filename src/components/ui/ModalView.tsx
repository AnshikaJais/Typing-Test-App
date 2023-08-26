import React, { FunctionComponent} from "react";

type ModalViewProps = {
    children: React.ReactElement | React.ReactElement[];
    title: String;
};

const ModalView: FunctionComponent<ModalViewProps> = ({children, title}) =>{
    return(
        <div className="fixed top-0 left-0 w-[100%] h-[100%] z-20 bg-black bg-opacity-50 text-center">
            <div className=" w-[100%] xxs:w-[60%] absolute z-30 left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] md:px-[10rem] md:py-[5rem] xs:px-[7rem] xs:py-[3rem] p-[2rem] bg-white shadow-inside-border rounded-md text-center">
                <h2 className="mb-10 md:text-[4rem] text-[3rem] font-serif text-primary tracking-[0.75px]">{title}</h2>
                {children}
            </div>
        </div>
    )
}

export default ModalView;