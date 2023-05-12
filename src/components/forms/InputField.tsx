import React, { ChangeEvent } from "react";

interface Props  {
    type?: string,
    placeholder?: string,
    setValue?: (name: string) => void,
    value?: string,
}

const InputField: React.FC<Props> = ({ type, placeholder, setValue, value}) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue?.(e.target.value)
    }

    return ( 
        <input
         className="text-[14px] w-full h-[49px] border-[1px] border-[#818181] rounded-[10px] px-[26px] py-[15px]"
         type={type} placeholder={placeholder} value={value} onChange={handleChange} />
     );
}
 
export default InputField;