import { ReactNode } from "react";
import ComponentWrapper from "./ComponentWrapper";

interface GridBlock {
    id?: string | undefined,
    className?: string | undefined,
    children?: ReactNode | null,
    style?: {} | undefined
}

const GridBlock = ({ id, className, style, children }: GridBlock) => {

    return ( 
        <ComponentWrapper id={id}>
            <div id={id} style={style} className='grid grid-cols-2 justify-between items-center py-2 w-full gap-4'>{children}</div>
        </ComponentWrapper>
     );
}
 
export default GridBlock;