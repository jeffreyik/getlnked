import ComponentWrapper from "./ComponentWrapper";

interface Image {
    id?: string | undefined,
    url?: string | undefined,
    style?: {} | undefined,
}

const ImgBlock = ({ id, style, url }: Image) => {
    return ( 
        <ComponentWrapper id={id}>
            <div key={id} style={style}>
                <img src={url} alt="" className="w-full max-h-[450px] min-h-[350px] object-cover rounded-[20px]" />
            </div>
        </ComponentWrapper>
     );
}
 
export default ImgBlock;