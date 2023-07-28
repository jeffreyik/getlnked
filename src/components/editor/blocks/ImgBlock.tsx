import { BlockInterface } from "@/interfaces/interfaces";
import Image from "next/image";
import { useState } from "react";

export const imageLoader = () => {
    return 'https://www.mbot.com/wp-content/uploads/2016/12/placeholder.png'
}

const ImgBlock = ({ id, style, url = 'https://www.mbot.com/wp-content/uploads/2016/12/placeholder.png' }: BlockInterface) => {
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

        const handleImageLoad = (event: any) => {
            setImageDimensions({
            width: event.target.naturalWidth,
            height: event.target.naturalHeight
            });
        };

    return ( 
        <Image loader={imageLoader} id={id} style={style} src={url} width={imageDimensions.width} height={imageDimensions.height} onLoad={handleImageLoad} className="max-w-full" alt="" />
     );
}
 
export default ImgBlock;