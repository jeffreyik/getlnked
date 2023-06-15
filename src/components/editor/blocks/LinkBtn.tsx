import ComponentWrapper from "./ComponentWrapper";

interface Link {
    link: string | undefined,
    text: string | undefined,
    id: string | undefined,
    style: {} | undefined
}

const LinkBtn = ({ link, text, id, style }: Link) => {
    return ( 
        <ComponentWrapper id={id}>
            <div style={style}>
                <a className="bg-[#1C5D99] text-white rounded-[999px] h-[61px] flex items-center justify-center" href={link}>{text}</a>
            </div>
        </ComponentWrapper>
     );
}
 
export default LinkBtn;