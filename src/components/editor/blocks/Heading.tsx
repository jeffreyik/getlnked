import { ReactNode } from "react";
import ComponentWrapper from "./ComponentWrapper";
import { nanoid } from "nanoid";

interface heading {
    id?: string | undefined,
    className?: string | undefined,
    children?: ReactNode | string | null,
    style?: {} | undefined
}

const Heading = ({ id, className, children, style }: heading) => {

    return ( 
        <ComponentWrapper id={id}>
            <h1 style={style} className={className}>{children}</h1>
        </ComponentWrapper>
     );
}
 
export default Heading;