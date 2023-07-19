import { BlockInterface } from "@/interfaces/interfaces";

const Heading = ({ id, className, style, text }: BlockInterface) => {

    return ( 
        <h1 id={id} style={style} className='text-[56px] font-bold w-fit'>{text}</h1>
     );
}
 
export default Heading;