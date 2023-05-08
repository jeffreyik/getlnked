interface Props  {
    type: string,
    placeholder: string
}

const InputField = ({ type, placeholder}: Props) => {
    return ( 
        <input
         className="text-[14px] w-full h-[49px] border-[1px] border-[#818181] rounded-[10px] px-[26px] py-[15px]"
         type={type} placeholder={placeholder} />
     );
}
 
export default InputField;