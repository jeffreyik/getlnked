interface Image {
    id?: string | undefined,
    url?: string | undefined,
    style?: {} | undefined,
}

const ImgBlock = ({ id, style, url }: Image) => {
    return ( 
        <div key={id} style={style}>
            <img src={url} alt="" className="w-full max-h-[450px] min-h-[350px] object-cover rounded-[20px]" />
        </div>
     );
}
 
export default ImgBlock;