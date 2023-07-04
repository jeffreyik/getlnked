import Image from "next/image";
import ComponentWrapper from "./ComponentWrapper";
import { useState } from "react";
interface Image {
    id?: string | undefined,
    url?: string,
    style?: {} | undefined,
}

export const imageLoader = () => {
    return 'https://www.mbot.com/wp-content/uploads/2016/12/placeholder.png'
}

const ImgBlock = ({ id, style, url = 'https://www.mbot.com/wp-content/uploads/2016/12/placeholder.png' }: Image): JSX.Element => {
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

        const handleImageLoad = (event: any) => {
            setImageDimensions({
            width: event.target.naturalWidth,
            height: event.target.naturalHeight
            });
        };

    return ( 
        <ComponentWrapper id={id}>
            {/* <img id={id} style={style} src={url} alt="" className="max-w-full w-fit min-h-[250px]" /> */}
            <Image loader={imageLoader} id={id} style={style} src={url} width={imageDimensions.width} height={imageDimensions.height} onLoad={handleImageLoad} className="max-w-full" alt="" />
        </ComponentWrapper>
     );
}
 
export default ImgBlock;