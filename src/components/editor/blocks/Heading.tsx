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
            <h1 style={style} className={className}>{text}</h1>
        </ComponentWrapper>
     );
}
 
export default Heading;