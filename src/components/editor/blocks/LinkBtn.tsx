import { BlockInterface } from "@/interfaces/interfaces";

const LinkBtn = ({ link, text, id, style }: BlockInterface) => {
    return ( 
        <div style={style}>
            <a className="bg-[#1C5D99] text-white rounded-[999px] h-[61px] flex items-center justify-center" href={link}>{text}</a>
        </div>
     );
}

export default LinkBtn;