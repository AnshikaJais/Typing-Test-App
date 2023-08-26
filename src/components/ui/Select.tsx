import React, { ComponentPropsWithoutRef} from "react";

interface SelectProps extends ComponentPropsWithoutRef<'select'>{
    defaultValue: string;
    options:{
        value: string;
        name: string;
    }[];
}

const Select: React.FunctionComponent<SelectProps> = ({defaultValue, options, ...props}) =>{
    return (
        <select className="block text-primary text-3xl px-5 py-2 border-2 border-primary focus:outline-none mx-auto my-[2rem]" defaultValue={defaultValue} {...props}>
            {options.map(option => {
                return (
                    <option
                    key={option.value}
                    value={option.value}
                    >
                        {option.name}
                    </option>
                )
            })}
        </select>
    )
}

export default Select;