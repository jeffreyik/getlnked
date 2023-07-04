import { ReactNode } from "react";
import ComponentWrapper from "./ComponentWrapper";
import { nanoid } from "nanoid";

interface heading {
    id?: string | undefined,
    className?: string | undefined,
    text?: string | null,
    style?: {} | undefined
}

const Heading = ({ id, className, style, text }: heading) => {

    return ( 
        <ComponentWrapper id={id}>
            <h1 id={id} style={style} className='text-[48px] font-bold w-fit'>{text}</h1>
        </ComponentWrapper>
     );
}
 
export default Heading;