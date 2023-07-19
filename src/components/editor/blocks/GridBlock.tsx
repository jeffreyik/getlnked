import { BlockInterface } from "@/interfaces/interfaces";

const GridBlock = ({ id, className, style, children }: BlockInterface) => {
    return ( 
        <div id={id} style={style} className='grid grid-cols-2 justify-between items-center py-2 w-full gap-4'>{children}</div>
     );
}
 
export default GridBlock;